import { Injectable, EventEmitter, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket: WebSocket | null = null;
  private listener: EventEmitter<{ type: string; data: any }> = new EventEmitter();
  private reconnectInterval = 5000; // 5 seconds

  public constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeWebSocket();
    } else {
      console.warn('WebSocket is not supported in the current environment.');
    }
  }

  private initializeWebSocket() {
    this.socket = new WebSocket("ws://localhost:3000/ws");

    this.socket.onopen = (event) => {
      console.log('WebSocket connection established');
      this.listener.emit({ type: "open", data: event });
    };

    this.socket.onclose = (event) => {
      console.warn('WebSocket connection closed:', event);
      this.listener.emit({ type: "close", data: event });
      this.reconnectWebSocket(); // Attempt to reconnect
    };

    this.socket.onmessage = (event) => {
      this.listener.emit({ type: "message", data: JSON.parse(event.data) });
    };

    this.socket.onerror = (event) => {
      console.error('WebSocket error:', event);
      this.listener.emit({ type: "error", data: event });
    };
  }

  private reconnectWebSocket() {
    setTimeout(() => {
      console.log('Attempting to reconnect WebSocket...');
      this.initializeWebSocket();
    }, this.reconnectInterval);
  }

  public send(data: string) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(data);
    } else {
      console.error('WebSocket is not open. Unable to send message.');
    }
  }

  public close() {
    this.socket?.close();
  }

  public getEventListener() {
    return this.listener;
  }
}
