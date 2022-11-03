/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

import AbilityConstant from "./@ohos.app.ability.AbilityConstant";
import AbilityContext from "./application/AbilityContext";
import Want from './@ohos.application.Want';
import window from './@ohos.window';
import { Configuration } from './@ohos.application.Configuration';
import rpc from './@ohos.rpc';

/**
 * The prototype of the listener function interface registered by the Caller.
 *
 * @since 9
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @permission N/A
 * @param msg Monitor status notification information.
 * @returns -
 * @StageModelOnly
 * @deprecated since 9
 * @useinstead ohos.app.ability.UIAbility
 */
export interface OnReleaseCallBack {
    (msg: string): void;
}

/**
 * The prototype of the message listener function interface registered by the Callee.
 *
 * @since 9
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @permission N/A
 * @param indata Notification data notified from the caller.
 * @returns rpc.Sequenceable
 * @StageModelOnly
 * @deprecated since 9
 * @useinstead ohos.app.ability.UIAbility
 */
export interface CalleeCallBack {
    (indata: rpc.MessageParcel): rpc.Sequenceable;
}

/**
 * The interface of a Caller.
 *
 * @since 9
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @permission N/A
 * @StageModelOnly
 * @deprecated since 9
 * @useinstead ohos.app.ability.UIAbility
 */
export interface Caller {
     /**
     * Notify the server of Sequenceable type data.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @param method The notification event string listened to by the callee.
     * @param data Notification data to the callee.
     * @returns -
     * @StageModelOnly
     */
     call(method: string, data: rpc.Sequenceable): Promise<void>;

    /**
     * Notify the server of Sequenceable type data and return the notification result.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @param method The notification event string listened to by the callee.
     * @param data Notification data to the callee.
     * @returns Returns the callee's notification result data on success, and returns undefined on failure.
     * @StageModelOnly
     */
     callWithResult(method: string, data: rpc.Sequenceable): Promise<rpc.MessageParcel>;

    /**
     * Clear service records.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @returns -
     * @StageModelOnly
     */
     release(): void;

    /**
     * Register death listener notification callback.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @param callback Register a callback function for listening for notifications.
     * @returns -
     * @StageModelOnly
     */
     onRelease(callback: OnReleaseCallBack): void;
 }

 /**
 * The interface of a Callee.
 *
 * @since 9
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @permission N/A
 * @StageModelOnly
 * @deprecated since 9
 * @useinstead ohos.app.ability.UIAbility
 */
export interface Callee {

     /**
     * Register data listener callback.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @param method A string registered to listen for notification events.
     * @param callback Register a callback function that listens for notification events.
     * @returns -
     * @StageModelOnly
     */
     on(method: string, callback: CalleeCallBack): void;

     /**
     * Unregister data listener callback.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @param method A string registered to listen for notification events.
     * @returns -
     * @StageModelOnly
     */
     off(method: string): void;
 }

/**
 * The class of an ability.
 *
 * @since 9
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @permission N/A
 * @StageModelOnly
 * @deprecated since 9
 * @useinstead ohos.app.ability.UIAbility
 */
export default class Ability {
    /**
     * Indicates configuration information about an ability context.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @StageModelOnly
     */
    context: AbilityContext;

    /**
     * Indicates ability launch want.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @StageModelOnly
     */
    launchWant: Want;

    /**
     * Indicates ability last request want.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @StageModelOnly
     */
    lastRequestWant: Want;

    /**
     * Call Service Stub Object.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @StageModelOnly
     */
     callee: Callee;

    /**
     * Called back when an ability is started for initialization.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @param want Indicates the want info of the created ability.
     * @param param Indicates the launch param.
     * @returns -
     * @StageModelOnly
     */
    onCreate(want: Want, param: AbilityConstant.LaunchParam): void;

    /**
     * Called back when an ability window stage is created.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @param windowStage Indicates the created WindowStage.
     * @returns -
     * @StageModelOnly
     */
    onWindowStageCreate(windowStage: window.WindowStage): void;

    /**
     * Called back when an ability window stage is destroyed.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @returns -
     * @StageModelOnly
     */
    onWindowStageDestroy(): void;

    /**
     * Called back when an ability window stage is restored.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @param windowStage window stage to restore
     * @returns -
     * @StageModelOnly
     */
    onWindowStageRestore(windowStage: window.WindowStage): void;

    /**
     * Called back before an ability is destroyed.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @returns -
     * @StageModelOnly
     */
    onDestroy(): void;

    /**
     * Called back when the state of an ability changes to foreground.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @returns -
     * @StageModelOnly
     */
    onForeground(): void;

    /**
     * Called back when the state of an ability changes to background.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @returns -
     * @StageModelOnly
     */
    onBackground(): void;

    /**
     * Called back when an ability prepares to continue.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @param wantParam Indicates the want parameter.
     * @returns 0 if ability agrees to continue and saves data successfully, otherwise errcode.
     * @StageModelOnly
     */
     onContinue(wantParam : {[key: string]: any}): AbilityConstant.OnContinueResult;

    /**
     * Called when the launch mode of an ability is set to singleton.
     * This happens when you re-launch an ability that has been at the top of the ability stack.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @param want Indicates the want info of ability.
     * @param launchParams Indicates the launch parameters.
     * @returns -
     * @StageModelOnly
     */
    onNewWant(want: Want, launchParams: AbilityConstant.LaunchParam): void;

    /**
     * Called when the system configuration is updated.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @param config Indicates the updated configuration.
     * @returns -
     * @StageModelOnly
     */
    onConfigurationUpdated(config: Configuration): void;

    /**
     * Called when dump client information is required.
     * It is recommended that developers don't DUMP sensitive information.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @param params Indicates the params from command.
     * @returns The dump info array.
     * @StageModelOnly
     */
    dump(params: Array<string>): Array<string>;

    /**
     * Called when the system has determined to trim the memory, for example, when the ability is running in the
     * background and there is no enough memory for running as many background processes as possible.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @param level Indicates the memory trim level, which shows the current memory usage status.
     * @returns -
     * @StageModelOnly
     */
     onMemoryLevel(level: AbilityConstant.MemoryLevel): void;

    /**
     * Called back when an ability prepares to save.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @param reason state type when save.
     * @param wantParam Indicates the want parameter.
     * @returns 0 if ability agrees to save data successfully, otherwise errcode.
     * @StageModelOnly
    */
    onSaveState(reason: AbilityConstant.StateType, wantParam : {[key: string]: any}): AbilityConstant.OnSaveResult;
}
