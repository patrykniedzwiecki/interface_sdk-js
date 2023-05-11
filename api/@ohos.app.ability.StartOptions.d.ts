/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * StartOptions is the basic communication component of the system.
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @StageModelOnly
 * @since 9
 */
export default class StartOptions {
  /**
   * The type of {@link ohos.app.ability.AbilityConstant#WindowMode}
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 9
   */
  windowMode?: number;

  /**
   * displayId
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  displayId?: number;
}