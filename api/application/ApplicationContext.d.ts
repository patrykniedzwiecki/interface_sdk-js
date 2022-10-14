/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

import { AsyncCallback } from "../basic";
import Context from "./Context";
import AbilityLifecycleCallback from "../@ohos.application.AbilityLifecycleCallback";
import EnvironmentCallback from "../@ohos.application.EnvironmentCallback";
import { ProcessRunningInformation } from "./ProcessRunningInformation";

/**
 * The context of an application. It allows access to application-specific resources.
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 9
 */
export default class ApplicationContext extends Context {
    /**
     * Register ability lifecycle callback.
     * @param { string } type - abilityLifecycle.
     * @param { AbilityLifecycleCallback } callback - The ability lifecycle callback.
     * @returns { number } Returns the number code of the callback.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    on(type: "abilityLifecycle", callback: AbilityLifecycleCallback): number;

    /**
     * Unregister ability lifecycle callback.
     * @param { string } type - abilityLifecycle.
     * @param { number } callbackId - Indicates the number code of the callback.
     * @param { AsyncCallback<void> } callback - The callback of off.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    off(type: "abilityLifecycle", callbackId: number, callback: AsyncCallback<void>): void;

    /**
     * Unregister ability lifecycle callback.
     * @param { string } type - abilityLifecycle.
     * @param { number } callbackId - Indicates the number code of the callback.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    off(type: "abilityLifecycle", callbackId: number): Promise<void>;

    /**
     * Register environment callback.
     * @param { string } type - environment.
     * @param { EnvironmentCallback } callback - The environment callback.
     * @returns { number } Returns the number code of the callback.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    on(type: "environment", callback: EnvironmentCallback): number;

    /**
     * Unregister environment callback.
     * @param { string } type - environment.
     * @param { number } callbackId - Indicates the number code of the callback.
     * @param { AsyncCallback<void> } callback - The callback of unregisterEnvironmentCallback.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    off(type: "environment", callbackId: number, callback: AsyncCallback<void>): void;

    /**
     * Unregister environment callback.
     * @param { string } type - environment.
     * @param { number } callbackId - Indicates the number code of the callback.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    off(type: "environment", callbackId: number): Promise<void>;

    /**
     * Get information about running processes
     * @returns { Promise<Array<ProcessRunningInformation>> } Returns the array of {@link ProcessRunningInformation}.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    getProcessRunningInformation(): Promise<Array<ProcessRunningInformation>>;

    /**
     * Get information about running processes
     * @param { AsyncCallback<Array<ProcessRunningInformation>> } callback - The callback is used to return the array of {@link ProcessRunningInformation}.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    getProcessRunningInformation(callback: AsyncCallback<Array<ProcessRunningInformation>>): void;

    /**
     * Kill processes by self
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    killProcessesBySelf(): Promise<void>;

    /**
     * Kill processes by self
     * @param { AsyncCallback<void> } callback - The callback of killProcessesBySelf.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    killProcessesBySelf(callback: AsyncCallback<void>);
}
