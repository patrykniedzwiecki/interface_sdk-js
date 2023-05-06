/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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

import ConfigurationConstant from './@ohos.app.ability.ConfigurationConstant';

/**
 * configuration item.
 *
 * @typedef Configuration
 * @syscap SystemCapability.Ability.AbilityBase
 * @crossplatform
 * @since 9
 */
export interface Configuration {
  /**
   * Indicates the current language of the application.
   *
   * @type { ?string }
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 9
   */
  language?: string;

  /**
   * Indicates the current colorMode of the application.
   *
   * @type { ?ConfigurationConstant.ColorMode }
   * @syscap SystemCapability.Ability.AbilityBase
   * @crossplatform
   * @since 9
   */
  colorMode?: ConfigurationConstant.ColorMode;

  /**
   * Indicates the screen direction of the current device.
   *
   * @type { ?ConfigurationConstant.Direction }
   * @syscap SystemCapability.Ability.AbilityBase
   * @crossplatform
   * @since 9
   */
  direction?: ConfigurationConstant.Direction;

  /**
   * Indicates the screen density of the current device.
   *
   * @type { ?ConfigurationConstant.ScreenDensity }
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 9
   */
  screenDensity?: ConfigurationConstant.ScreenDensity;

  /**
   * Indicates the displayId of the current device.
   *
   * @type { ?number }
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 9
   */
  displayId?: number;

  /**
   * Indicates whether a pointer type device has connected.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 9
   */
  hasPointerDevice?: boolean;
}
