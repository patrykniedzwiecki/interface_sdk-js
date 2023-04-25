/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
* Provides options that can be set for the worker to create.
* @crossplatform
* @since 7
* @syscap SystemCapability.Utils.Lang
*/
export interface WorkerOptions {
  /**
   * Mode in which the worker executes the script.
   * @crossplatform
   * @since 7
   * @syscap SystemCapability.Utils.Lang
   */
  type?: "classic" | "module";

  /**
   * Name of the worker.
   * @crossplatform
   * @since 7
   * @syscap SystemCapability.Utils.Lang
   */
  name?: string;

  /**
   * Whether the worker is shared.
   * @crossplatform
   * @since 7
   * @syscap SystemCapability.Utils.Lang
   */
  shared?: boolean;
}

/**
 * Defines the event.
 * @crossplatform
 * @since 7
 * @syscap SystemCapability.Utils.Lang
 */
export interface Event {
  /**
   * Type of the Event.
   * @crossplatform
   * @since 7
   * @syscap SystemCapability.Utils.Lang
   */
  readonly type: string;

  /**
   * Timestamp(accurate to millisecond) when the event is created.
   * @crossplatform
   * @since 7
   * @syscap SystemCapability.Utils.Lang
   */
  readonly timeStamp: number;
}

/**
 * Provides detailed information about the exception occurred during worker execution.
 * @crossplatform
 * @since 7
 * @syscap SystemCapability.Utils.Lang
 */
export interface ErrorEvent extends Event {
  /**
   * Information about the exception.
   * @crossplatform
   * @since 7
   * @syscap SystemCapability.Utils.Lang
   */
  readonly message: string;

  /**
   * File where the exception is located.
   * @crossplatform
   * @since 7
   * @syscap SystemCapability.Utils.Lang
   */
  readonly filename: string;

  /**
   * Number of the line where the exception is located.
   * @crossplatform
   * @since 7
   * @syscap SystemCapability.Utils.Lang
   */
  readonly lineno: number;

  /**
   * Number of the column where the exception is located.
   * @crossplatform
   * @since 7
   * @syscap SystemCapability.Utils.Lang
   */
  readonly colno: number;

  /**
   * Type of the exception.
   * @crossplatform
   * @since 7
   * @syscap SystemCapability.Utils.Lang
   */
  readonly error: Object;
}

/**
 * Holds the data transferred between worker threads.
 * @crossplatform
 * @since 7
 * @syscap SystemCapability.Utils.Lang
 */
export interface MessageEvent<T> extends Event {
  /**
   * Data transferred when an exception occurs.
   * @crossplatform
   * @since 7
   * @syscap SystemCapability.Utils.Lang
   */
  readonly data: T;
}

/**
 * Saves the data transferred between worker thread and host thread.
 * @crossplatform
 * @since 9
 * @syscap SystemCapability.Utils.Lang
 */
export interface MessageEvents extends Event {
  /**
   * Data transferred when an exception occurs.
   * @crossplatform
   * @since 9
   * @syscap SystemCapability.Utils.Lang
   */
  readonly data;
}

/**
 * Specifies the object whose ownership need to be transferred during data transfer.
 * The object must be ArrayBuffer.
 * @crossplatform
 * @since 7
 * @syscap SystemCapability.Utils.Lang
 */
export interface PostMessageOptions {
  /**
   * ArrayBuffer array used to transfer the ownership.
   * @crossplatform
   * @since 7
   * @syscap SystemCapability.Utils.Lang
   */
  transfer?: Object[];
}

/**
 * Implements event listening.
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.worker.WorkerEventListener
 * @syscap SystemCapability.Utils.Lang
 */
export interface EventListener {
  /**
   * Specifies the callback to invoke.
   * @param evt Event class for the callback to invoke.
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.worker.WorkerEventListener.(event: Event): void | Promise<void>
   * @syscap SystemCapability.Utils.Lang
   */
  (evt: Event): void | Promise<void>;
}

/**
 * Implements event listening.
 * @crossplatform
 * @since 9
 * @syscap SystemCapability.Utils.Lang
 */
export interface WorkerEventListener {
  /**
   * Specifies the callback function to be invoked.
   * @param event Event class for the callback to invoke.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 10200004 - Worker instance is not running.
   * @throws {BusinessError} 10200005 - The invoked API is not supported in workers.
   * @crossplatform
   * @since 9
   * @syscap SystemCapability.Utils.Lang
   */
  /**
   * Specifies the callback function to be invoked.
   * @param event Event class for the callback to invoke.
   * @crossplatform
   * @since 10
   * @syscap SystemCapability.Utils.Lang
   */
  (event: Event): void | Promise<void>;
}

/**
 * Type of message, only "message" and "messageerror".
 * @crossplatform
 * @since 7
 * @syscap SystemCapability.Utils.Lang
 */
type MessageType = "message" | "messageerror";

/**
 * Specific event features.
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.worker.WorkerEventTarget
 * @syscap SystemCapability.Utils.Lang
 */
export interface EventTarget {
  /**
   * Adds an event listener to the worker.
   * @param type  Type of the event to listen for.
   * @param listener Callback to invoke when an event of the specified type occurs.
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.worker.WorkerEventTarget.addEventListener
   * @syscap SystemCapability.Utils.Lang
   */
  addEventListener(
    type: string,
    listener: EventListener
  ): void;

  /**
   * Dispatches the event defined for the worker.
   * @param event Event to dispatch.
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.worker.WorkerEventTarget.dispatchEvent
   * @syscap SystemCapability.Utils.Lang
   */
  dispatchEvent(event: Event): boolean;

  /**
   * Removes an event defined for the worker.
   * @param type Type of the event for which the event listener is removed.
   * @param callback Callback of the event listener to remove.
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.worker.WorkerEventTarget.removeEventListener
   * @syscap SystemCapability.Utils.Lang
   */
  removeEventListener(
    type: string,
    callback?: EventListener
  ): void;

  /**
   * Removes all event listeners for the worker.
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.worker.WorkerEventTarget.removeAllListener
   * @syscap SystemCapability.Utils.Lang
   */
  removeAllListener(): void;
}

/**
 * Specific worker event features.
 * @crossplatform
 * @since 9
 * @syscap SystemCapability.Utils.Lang
 */
export interface WorkerEventTarget {
  /**
   * Adds an event listener to the worker.
   * @param type  Type of the event to listen for.
   * @param listener Callback to invoke when an event of the specified type occurs.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 10200004 - Worker instance is not running.
   * @throws {BusinessError} 10200005 - The invoked API is not supported in workers.
   * @since 9
   * @syscap SystemCapability.Utils.Lang
   */
  /**
   * Adds an event listener to the worker.
   * @param type  Type of the event to listen for.
   * @param listener Callback to invoke when an event of the specified type occurs.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 10200004 - Worker instance is not running.
   * @crossplatform
   * @since 10
   * @syscap SystemCapability.Utils.Lang
   */
  addEventListener(type: string, listener: WorkerEventListener): void;
  /**
   * Handle the event defined for the worker.
   * @param event Event to dispatch.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 10200004 - Worker instance is not running.
   * @crossplatform
   * @since 9
   * @syscap SystemCapability.Utils.Lang
   */
  dispatchEvent(event: Event): boolean;
  /**
   * Remove an event defined for the worker.
   * @param type Type of the event for which the event listener is cancelled.
   * @param callback Callback of the event listener to remove.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 10200004 - Worker instance is not running.
   * @crossplatform
   * @since 9
   * @syscap SystemCapability.Utils.Lang
   */
  removeEventListener(type: string, callback?: WorkerEventListener): void;
  /**
   * Remove all event listeners for the worker.
   * @throws {BusinessError} 10200004 - Worker instance is not running.
   * @crossplatform
   * @since 9
   * @syscap SystemCapability.Utils.Lang
   */
  removeAllListener(): void;
}

/**
 * Specifies the worker thread running environment, which is isolated from the host thread environment.
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.worker.GlobalScope
 * @syscap SystemCapability.Utils.Lang
 */
declare interface WorkerGlobalScope extends EventTarget {
  /**
   * Worker name specified when there is a new worker.
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.worker.GlobalScope.name
   * @syscap SystemCapability.Utils.Lang
   */
  readonly name: string;

  /**
   * The onerror attribute of parentPort specifies
   * the event handler to be called when an exception occurs during worker execution.
   * The event handler is executed in the worker thread.
   * @param ev Error data.
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.worker.GlobalScope.onerror
   * @syscap SystemCapability.Utils.Lang
   */
  onerror?: (ev: ErrorEvent) => void;
  readonly self: WorkerGlobalScope & typeof globalThis;
}

/**
 * The environment Specified in which worker threads run, which is isolated from the host thread environment.
 * @crossplatform
 * @since 9
 * @syscap SystemCapability.Utils.Lang
 */
declare interface GlobalScope extends WorkerEventTarget {
  /**
   * Name of Worker specified when there is a new worker.
   * @crossplatform
   * @since 9
   * @syscap SystemCapability.Utils.Lang
   */
  readonly name: string;

  /**
   * The onerror attribute of parentPort specified.
   * the event handler to be called when an exception occurs during worker execution.
   * The event handler is executed in the worker thread.
   * @param ev Error data.
   * @crossplatform
   * @since 9
   * @syscap SystemCapability.Utils.Lang
   */
  onerror?: (ev: ErrorEvent) => void;
  /**
   * Specify the type attribute for self.
   * @param self type is read-only.
   * @crossplatform
   * @since 9
   * @syscap SystemCapability.Utils.Lang
   */
  readonly self: GlobalScope & typeof globalThis;
}

/**
 * Specifies the worker thread running environment, which is isolated from the host thread environment
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.worker.ThreadWorkerGlobalScope
 * @syscap SystemCapability.Utils.Lang
 */
export interface DedicatedWorkerGlobalScope extends WorkerGlobalScope {
  /**
   * The onmessage attribute of parentPort specifies the event handler
   * to be called then the worker thread receives a message sent by
   * the host thread through worker postMessage.
   * The event handler is executed in the worker thread.
   * @param ev Message received.
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.worker.ThreadWorkerGlobalScope.onmessage
   * @syscap SystemCapability.Utils.Lang
   */
  onmessage?: (this: DedicatedWorkerGlobalScope, ev: MessageEvent) => void;

  /**
   * The onmessage attribute of parentPort specifies the event handler
   * to be called then the worker receives a message that cannot be deserialized.
   * The event handler is executed in the worker thread.
   * @param ev Error data.
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.worker.ThreadWorkerGlobalScope.onmessageerror
   * @syscap SystemCapability.Utils.Lang
   */
  onmessageerror?: (this: DedicatedWorkerGlobalScope, ev: MessageEvent) => void;

  /**
   * Close the worker thread to stop the worker from receiving messages
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.worker.ThreadWorkerGlobalScope.close
   * @syscap SystemCapability.Utils.Lang
   */
  close(): void;

  /**
   * Send a message to be host thread from the worker
   * @param messageObject Data to be sent to the worker
   * @param transfer array cannot contain null.
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.worker.ThreadWorkerGlobalScope.postMessage
   * @syscap SystemCapability.Utils.Lang
   */
  postMessage(messageObject: Object, transfer: Transferable[]): void;
  postMessage(messageObject: Object, options?: PostMessageOptions): void;

  /**
   * Send a message to host thread from the worker
   * @param messageObject Data to be sent to the worker
   * @param transfer array cannot contain null.
   * @since 9
   * @syscap SystemCapability.Utils.Lang
   */
  postMessage(messageObject: Object, transfer: ArrayBuffer[]): void;
}

/**
 * Specifies the thread-worker running environment, which is isolated from the host-thread environment
 * @crossplatform
 * @since 9
 * @syscap SystemCapability.Utils.Lang
 */
export interface ThreadWorkerGlobalScope extends GlobalScope {
  /**
   * The onmessage attribute of parentPort specifies the event handler
   * to be called then the worker thread receives a message sent by
   * the host thread through worker postMessage.
   * The event handler is executed in the worker thread.
   * @param ev Message received.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 10200004 - Worker instance is not running.
   * @throws {BusinessError} 10200005 - The invoked API is not supported in workers.
   * @since 9
   * @syscap SystemCapability.Utils.Lang
   */
  /**
   * The onmessage attribute of parentPort specifies the event handler
   * to be called then the worker thread receives a message sent by
   * the host thread through worker postMessage.
   * The event handler is executed in the worker thread.
   * @param ev Message received.
   * @crossplatform
   * @since 10
   * @syscap SystemCapability.Utils.Lang
   */
  onmessage?: (this: ThreadWorkerGlobalScope, ev: MessageEvents) => void;

  /**
  * The onmessage attribute of parentPort specifies the event handler
  * to be called then the worker receives a message that cannot be deserialized.
  * The event handler is executed in the worker thread.
  * @param ev Error data.
  * @throws {BusinessError} 401 - if the input parameters are invalid.
  * @throws {BusinessError} 10200004 - Worker instance is not running.
  * @throws {BusinessError} 10200005 - The invoked API is not supported in workers.
  * @since 9
  * @syscap SystemCapability.Utils.Lang
  */
  /**
   * The onmessage attribute of parentPort specifies the event handler
   * to be called then the worker receives a message that cannot be deserialized.
   * The event handler is executed in the worker thread.
   * @param ev Error data.
   * @crossplatform
   * @since 10
   * @syscap SystemCapability.Utils.Lang
   */
  onmessageerror?: (this: ThreadWorkerGlobalScope, ev: MessageEvents) => void;

  /**
   * Close the worker thread to stop the worker from receiving messages
   * @throws {BusinessError} 10200004 - Worker instance is not running.
   * @crossplatform
   * @since 9
   * @syscap SystemCapability.Utils.Lang
   */
  close(): void;

  /**
   * Send a message to host thread from the worker
   * @param messageObject Data to be sent to the worker
   * @param transfer array cannot contain null.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 10200004 - Worker instance is not running.
   * @throws {BusinessError} 10200006 - Serializing an uncaught exception failed.
   * @crossplatform
   * @since 9
   * @syscap SystemCapability.Utils.Lang
   */
  postMessage(messageObject: Object, transfer: ArrayBuffer[]): void;

  /**
   * Send a message to be host thread from the worker
   * @param messageObject Data to be sent to the worker
   * @param options Option can be set for postmessage.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 10200004 - Worker instance is not running.
   * @throws {BusinessError} 10200006 - Serializing an uncaught exception failed.
   * @crossplatform
   * @since 9
   * @syscap SystemCapability.Utils.Lang
   */
  postMessage(messageObject: Object, options?: PostMessageOptions): void;
}

/**
 * JS cross-thread communication tool
 * @crossplatform
 * @since 7
 * @syscap SystemCapability.Utils.Lang
 */
declare namespace worker {
  /**
   * The ThreadWorker class contains all Worker functions.
   * @crossplatform
   * @since 9
   * @syscap SystemCapability.Utils.Lang
   */
  class ThreadWorker implements WorkerEventTarget {
    /**
     * Creates a worker instance
     * @param scriptURL URL of the script to be executed by the worker
     * @param options Options that can be set for the worker
     * @throws {BusinessError} 401 - if the input parameters are invalid.
     * @throws {BusinessError} 10200003 - Worker initialization failure.
     * @throws {BusinessError} 10200007 - The worker file patch is invalid path.
     * @crossplatform
     * @since 9
     * @syscap SystemCapability.Utils.Lang
     */
    constructor(scriptURL: string, options?: WorkerOptions);
    /**
     * The onexit attribute of the worker specifies the event handler to be called
     * when the worker exits. The handler is executed in the host thread.
     * @param code Code indicating the worker exit state
     * @throws {BusinessError} 401 - if the input parameters are invalid.
     * @throws {BusinessError} 10200004 - Worker instance is not running.
     * @throws {BusinessError} 10200005 - The invoked API is not supported in workers.
     * @since 9
     * @syscap SystemCapability.Utils.Lang
     */
    /**
     * The onexit attribute of the worker specifies the event handler to be called
     * when the worker exits. The handler is executed in the host thread.
     * @param code Code indicating the worker exit state
     * @crossplatform
     * @since 10
     * @syscap SystemCapability.Utils.Lang
     */
    onexit?: (code: number) => void;
    /**
     * The onerror attribute of the worker specifies the event handler to be called
     * when an exception occurs during worker execution.
     * The event handler is executed in the host thread.
     * @throws {BusinessError} 401 - if the input parameters are invalid.
     * @throws {BusinessError} 10200004 - Worker instance is not running.
     * @throws {BusinessError} 10200005 - The invoked API is not supported in workers.
     * @since 9
     * @syscap SystemCapability.Utils.Lang
     */
    /**
     * The onerror attribute of the worker specifies the event handler to be called
     * when an exception occurs during worker execution.
     * The event handler is executed in the host thread.
     * @crossplatform
     * @since 10
     * @syscap SystemCapability.Utils.Lang
     */
    onerror?: (err: ErrorEvent) => void;
    /**
     * The onmessage attribute of the worker specifies the event handler
     * to be called then the host thread receives a message created by itself
     * and sent by the worker through the parentPort.postMessage.
     * The event handler is executed in the host thread.
     * @param event Message received.
     * @throws {BusinessError} 401 - if the input parameters are invalid.
     * @throws {BusinessError} 10200004 - Worker instance is not running.
     * @throws {BusinessError} 10200005 - The invoked API is not supported in workers.
     * @since 9
     * @syscap SystemCapability.Utils.Lang
     */
    /**
     * The onmessage attribute of the worker specifies the event handler
     * to be called then the host thread receives a message created by itself
     * and sent by the worker through the parentPort.postMessage.
     * The event handler is executed in the host thread.
     * @param event Message received.
     * @crossplatform
     * @since 10
     * @syscap SystemCapability.Utils.Lang
     */
    onmessage?: (event: MessageEvents) => void;
    /**
     * The onmessage attribute of the worker specifies the event handler
     * when the worker receives a message that cannot be serialized.
     * The event handler is executed in the host thread.
     * @throws {BusinessError} 401 - if the input parameters are invalid.
     * @throws {BusinessError} 10200004 - Worker instance is not running.
     * @throws {BusinessError} 10200005 - The invoked API is not supported in workers.
     * @since 9
     * @syscap SystemCapability.Utils.Lang
     */
    /**
     * The onmessage attribute of the worker specifies the event handler
     * when the worker receives a message that cannot be serialized.
     * The event handler is executed in the host thread.
     * @crossplatform
     * @since 10
     * @syscap SystemCapability.Utils.Lang
     */
    onmessageerror?: (event: MessageEvents) => void;
    /**
     * Sends a message to the worker thread.
     * The data is transferred using the structured clone algorithm.
     * @param message Data to be sent to the worker
     * @param transfer ArrayBuffer instance that can be transferred.
     * The transferList array cannot contain null.
     * @throws {BusinessError} 401 - if the input parameters are invalid.
     * @throws {BusinessError} 10200004 - Worker instance is not running.
     * @throws {BusinessError} 10200006 - Serializing an uncaught exception failed.
     * @crossplatform
     * @since 9
     * @syscap SystemCapability.Utils.Lang
     */
    postMessage(message: Object, transfer: ArrayBuffer[]): void;
    /**
     * Sends a message to the worker thread.
     * The data is transferred using the structured clone algorithm.
     * @param message Data to be sent to the worker
     * @throws {BusinessError} 401 - if the input parameters are invalid.
     * @throws {BusinessError} 10200004 - Worker instance is not running.
     * @throws {BusinessError} 10200006 - Serializing an uncaught exception failed.
     * @crossplatform
     * @since 9
     * @syscap SystemCapability.Utils.Lang
     */
    postMessage(message: Object, options?: PostMessageOptions): void;
    /**
     * Adds an event listener to the worker.
     * @param type Adds an event listener to the worker.
     * @param listener Callback to invoke when an event of the specified type occurs.
     * @throws {BusinessError} 401 - if the input parameters are invalid.
     * @throws {BusinessError} 10200004 - Worker instance is not running.
     * @throws {BusinessError} 10200005 - The invoked API is not supported in workers.
     * @since 9
     * @syscap SystemCapability.Utils.Lang
     */
    /**
     * Adds an event listener to the worker.
     * @param type Adds an event listener to the worker.
     * @param listener Callback to invoke when an event of the specified type occurs.
     * @throws {BusinessError} 401 - if the input parameters are invalid.
     * @throws {BusinessError} 10200004 - Worker instance is not running.
     * @crossplatform
     * @since 10
     * @syscap SystemCapability.Utils.Lang
     */
    on(type: string, listener: WorkerEventListener): void;
    /**
     * Adds an event listener to the worker
     * and removes the event listener automatically after it is invoked once.
     * @param type Type of the event to listen for
     * @param listener Callback to invoke when an event of the specified type occurs
     * @throws {BusinessError} 401 - if the input parameters are invalid.
     * @throws {BusinessError} 10200004 - Worker instance is not running.
     * @throws {BusinessError} 10200005 - The invoked API is not supported in workers.
     * @since 9
     * @syscap SystemCapability.Utils.Lang
     */
    /**
     * Adds an event listener to the worker
     * and removes the event listener automatically after it is invoked once.
     * @param type Type of the event to listen for
     * @param listener Callback to invoke when an event of the specified type occurs
     * @throws {BusinessError} 401 - if the input parameters are invalid.
     * @throws {BusinessError} 10200004 - Worker instance is not running.
     * @crossplatform
     * @since 10
     * @syscap SystemCapability.Utils.Lang
     */
    once(type: string, listener: WorkerEventListener): void;
    /**
     * Removes an event listener to the worker.
     * @param type Type of the event for which the event listener is removed.
     * @param listener Callback of the event listener to remove.
     * @throws {BusinessError} 401 - if the input parameters are invalid.
     * @throws {BusinessError} 10200004 - Worker instance is not running.
     * @throws {BusinessError} 10200005 - The invoked API is not supported in workers.
     * @since 9
     * @syscap SystemCapability.Utils.Lang
     */
    /**
     * Removes an event listener to the worker.
     * @param type Type of the event for which the event listener is removed.
     * @param listener Callback of the event listener to remove.
     * @throws {BusinessError} 401 - if the input parameters are invalid.
     * @throws {BusinessError} 10200004 - Worker instance is not running.
     * @crossplatform
     * @since 10
     * @syscap SystemCapability.Utils.Lang
     */
    off(type: string, listener?: WorkerEventListener): void;
    /**
     * Terminates the worker thread to stop the worker from receiving messages
     * @throws {BusinessError} 10200004 - Worker instance is not running.
     * @crossplatform
     * @since 9
     * @syscap SystemCapability.Utils.Lang
     */
    terminate(): void;
    /**
     * Adds an event listener to the worker.
     * @param type  Type of the event to listen for.
     * @param listener Callback to invoke when an event of the specified type occurs.
     * @throws {BusinessError} 401 - if the input parameters are invalid.
     * @throws {BusinessError} 10200004 - Worker instance is not running.
     * @throws {BusinessError} 10200005 - The invoked API is not supported in workers.
     * @since 9
     * @syscap SystemCapability.Utils.Lang
     */
    /**
     * Adds an event listener to the worker.
     * @param type  Type of the event to listen for.
     * @param listener Callback to invoke when an event of the specified type occurs.
     * @throws {BusinessError} 401 - if the input parameters are invalid.
     * @throws {BusinessError} 10200004 - Worker instance is not running.
     * @crossplatform
     * @since 10
     * @syscap SystemCapability.Utils.Lang
     */
    addEventListener(type: string, listener: WorkerEventListener): void;
    /**
     * Handle the event defined for the worker.
     * @param event Event to dispatch.
     * @throws {BusinessError} 401 - if the input parameters are invalid.
     * @throws {BusinessError} 10200004 - Worker instance is not running.
     * @crossplatform
     * @since 9
     * @syscap SystemCapability.Utils.Lang
     */
    dispatchEvent(event: Event): boolean;
    /**
     * Remove an event defined for the worker.
     * @param type Type of the event for which the event listener is cancelled.
     * @param callback Callback of the event listener to remove.
     * @throws {BusinessError} 401 - if the input parameters are invalid.
     * @throws {BusinessError} 10200004 - Worker instance is not running.
     * @crossplatform
     * @since 9
     * @syscap SystemCapability.Utils.Lang
     */
    removeEventListener(type: string, callback?: WorkerEventListener): void;
    /**
     * Remove all event listeners for the worker.
     * @throws {BusinessError} 10200004 - Worker instance is not running.
     * @crossplatform
     * @since 9
     * @syscap SystemCapability.Utils.Lang
     */
    removeAllListener(): void;
  }

  /**
   * The Worker class contains all Worker functions.
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.worker.ThreadWorker
   * @syscap SystemCapability.Utils.Lang
   */
  class Worker implements EventTarget {
    /**
     * Creates a worker instance
     * @param scriptURL URL of the script to be executed by the worker
     * @param options Options that can be set for the worker
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.ThreadWorker.constructor
     * @syscap SystemCapability.Utils.Lang
     */
    constructor(scriptURL: string, options?: WorkerOptions);

    /**
     * The onexit attribute of the worker specifies the event handler to be called
     * when the worker exits. The handler is executed in the host thread.
     * @param code Code indicating the worker exit state
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.ThreadWorker.onexit
     * @syscap SystemCapability.Utils.Lang
     */
    onexit?: (code: number) => void;

    /**
     * The onerror attribute of the worker specifies the event handler to be called
     * when an exception occurs during worker execution.
     * The event handler is executed in the host thread.
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.ThreadWorker.onerror
     * @syscap SystemCapability.Utils.Lang
     */
    onerror?: (err: ErrorEvent) => void;

    /**
     * The onmessage attribute of the worker specifies the event handler
     * to be called then the host thread receives a message created by itself
     * and sent by the worker through the parentPort.postMessage.
     * The event handler is executed in the host thread.
     * @param event Message received.
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.ThreadWorker.onmessage
     * @syscap SystemCapability.Utils.Lang
     */
    onmessage?: (event: MessageEvent) => void;

    /**
     * The onmessage attribute of the worker specifies the event handler
     * when the worker receives a message that cannot be serialized.
     * The event handler is executed in the host thread.
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.ThreadWorker.onmessageerror
     * @syscap SystemCapability.Utils.Lang
     */
    onmessageerror?: (event: MessageEvent) => void;

    /**
     * Sends a message to the worker thread.
     * The data is transferred using the structured clone algorithm.
     * @param message Data to be sent to the worker
     * @param transfer ArrayBuffer instance that can be transferred.
     * The transferList array cannot contain null.
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.ThreadWorker.postMessage
     * @syscap SystemCapability.Utils.Lang
     */
    postMessage(message: Object, transfer: ArrayBuffer[]): void;
    postMessage(message: Object, options?: PostMessageOptions): void;

    /**
     * Adds an event listener to the worker.
     * @param type Adds an event listener to the worker.
     * @param listener Callback to invoke when an event of the specified type occurs.
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.ThreadWorker.on
     * @syscap SystemCapability.Utils.Lang
     */
    on(type: string, listener: EventListener): void;

    /**
     * Adds an event listener to the worker
     * and removes the event listener automatically after it is invoked once.
     * @param type Type of the event to listen for
     * @param listener Callback to invoke when an event of the specified type occurs
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.ThreadWorker.once
     * @syscap SystemCapability.Utils.Lang
     */
    once(type: string, listener: EventListener): void;

    /**
     * Removes an event listener to the worker.
     * @param type Type of the event for which the event listener is removed.
     * @param listener Callback of the event listener to remove.
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.ThreadWorker.off
     * @syscap SystemCapability.Utils.Lang
     */
    off(type: string, listener?: EventListener): void;

    /**
     * Terminates the worker thread to stop the worker from receiving messages
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.ThreadWorker.terminate
     * @syscap SystemCapability.Utils.Lang
     */
    terminate(): void;
  }

  /**
   * The object used by the worker thread to communicate with the host thread.
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.worker.workerPort
   * @syscap SystemCapability.Utils.Lang
   */
  const parentPort: DedicatedWorkerGlobalScope;

  /**
   * The object used by the worker thread to communicate with the host thread.
   * @crossplatform
   * @since 9
   * @syscap SystemCapability.Utils.Lang
   */
  const workerPort: ThreadWorkerGlobalScope;
}
export default worker;