/*
* Copyright (C) 2021 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { Callback } from './basic';

/**
 * The event of key input management module is configured to subscribe and unsubscribe system keys.
 *
 * @since 8
 * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
 * @import import inputConsumer from '@ohos.multimodalInput.inputConsumer';
 * @systemapi hide for inner use
 */
declare namespace inputConsumer {
  /**
   * Defines event of key that user want to subscribe or unsubscribe.
   *
   * @since 8
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use
   * @param preKeys The pre-keys that want to subscribe or unsubscribe.
   * @param finalKey The post position key that want to subscribe or unsubscribe.
   * @param isFinalKeyDown The final key press down or up.
   * @param finalKeyDownDuration Duration of final key press.
   */
  interface KeyOptions {
    preKeys: Array<number>;
    finalKey: number;
    isFinalKeyDown: boolean;
    finalKeyDownDuration: number;
  }

  /**
   * Defines event of key that user want to subscribe or unsubscribe.
   *
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use
   */
  enum SubscribeType {
    /**
     * @since 9
     */
    KEY = 0,
  }

  /**
   * Subscribe system keys.
   *
   * @since 8
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use
   * @param type Type of the inputevent about input which is to be subscribed.
   * @param keyOptions The key events about input which is to be subscribed.
   * @param callback Callback function, receive reported data.
   * @deprecated since 9
   * @useinstead on(SubscribeType.Key, keyOptions, callback)
   */
  function on(type: "key", keyOptions: KeyOptions, callback: Callback<KeyOptions>): void;

  /**
   * Subscribe system keys.
   *
   * @since 8
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use
   * @param type Type of the inputevent about input which is to be subscribed.
   * @param keyOptions The key events about input which is to be subscribed.
   * @param callback Callback function, receive reported data.
   * @deprecated since 9
   * @useinstead off(SubscribeType.Key, keyOptions, callback)
   */
  function off(type: "key", keyOptions: KeyOptions, callback?: Callback<KeyOptions>): void;

  /**
   * Subscribe system keys.
   *
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use
   * @param type Type of the inputevent about input which is to be subscribed.
   * @param keyOptions The key events about input which is to be subscribed.
   * @param callback Callback function, receive reported data.
   * @throws {BusinessError} 401 Parameter error.
   */
  function on(type: SubscribeType, keyOptions: KeyOptions, callback: Callback<KeyOptions>): void;

  /**
   * Subscribe system keys.
   *
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use
   * @param type Type of the inputevent about input which is to be subscribed.
   * @param keyOptions The key events about input which is to be subscribed.
   * @param callback Callback function, receive reported data.
   * @throws {BusinessError} 401 Parameter error.
   */
  function off(type: SubscribeType, keyOptions: KeyOptions, callback?: Callback<KeyOptions>): void;
}

export default inputConsumer;