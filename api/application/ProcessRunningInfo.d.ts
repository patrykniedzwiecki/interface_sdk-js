/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

/**
 * The class of an process running information.
 *
 * @deprecated since 9
 * @since 8
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @permission N/A
 */
/**
 * The class of an process running information.
 *
 * @since 9
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @permission N/A
 */
export interface ProcessRunningInfo {
    /**
     * @default process id
     * @deprecated since 9
     * @since 8
     * @syscap SystemCapability.Ability.AbilityRuntime.Mission
     */
    /**
     * @default process id
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     */
     pid: number;

     /**
      * @default user id
      * @deprecated since 9
      * @since 8
      * @syscap SystemCapability.Ability.AbilityRuntime.Mission
      */
     /**
      * @default user id
      * @since 9
      * @syscap SystemCapability.Ability.AbilityRuntime.Core
      */
     uid: number;

     /**
      * @default the name of the process
      * @deprecated since 9
      * @since 8
      * @syscap SystemCapability.Ability.AbilityRuntime.Mission
      */
     /**
      * @default the name of the process
      * @since 9
      * @syscap SystemCapability.Ability.AbilityRuntime.Core
      */
     processName: string;

     /**
      * @default an array of the bundleNames running in the process
      * @deprecated since 9
      * @since 8
      * @syscap SystemCapability.Ability.AbilityRuntime.Mission
      */
     /**
      * @default an array of the bundleNames running in the process
      * @since 9
      * @syscap SystemCapability.Ability.AbilityRuntime.Core
      */
     bundleNames: Array<string>;
}