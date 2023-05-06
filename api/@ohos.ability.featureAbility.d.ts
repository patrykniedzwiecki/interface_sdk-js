/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './@ohos.base';
import { Callback } from './@ohos.base';
import Want from './@ohos.app.ability.Want';
import { StartAbilityParameter } from './ability/startAbilityParameter';
import { AbilityResult } from './ability/abilityResult';
import { AppVersionInfo as _AppVersionInfo } from './app/appVersionInfo';
import { Context as _Context } from './app/context';
import { DataAbilityHelper } from './ability/dataAbilityHelper';
import { ConnectOptions } from './ability/connectOptions';
import { ProcessInfo as _ProcessInfo } from './app/processInfo';
import window from './@ohos.window';

/**
 * A Feature Ability represents an ability with a UI and is designed to interact with users.
 *
 * @namespace featureAbility
 * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
 * @FAModelOnly
 * @since 6
 */
declare namespace featureAbility {
  /**
   * Obtain the want sent from the source ability.
   *
   * @param { AsyncCallback<Want> } callback Indicates the ability to start.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 6
   */
  function getWant(callback: AsyncCallback<Want>): void;

  /**
   * Obtain the want sent from the source ability.
   *
   * @returns { Promise<Want> } The promise form returns the Want result
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 6
   */
  function getWant(): Promise<Want>;

  /**
   * Starts a new ability.
   *
   * @param { StartAbilityParameter } parameter Indicates the ability to start.
   * @param { AsyncCallback<number> } callback Returns the result of starting Ability in the form of callback.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 6
   */
  function startAbility(parameter: StartAbilityParameter, callback: AsyncCallback<number>): void;

  /**
   * Starts a new ability.
   *
   * @param { StartAbilityParameter } parameter Indicates the ability to start.
   * @returns { Promise<number> } The promise form returns the Ability result
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 6
   */
  function startAbility(parameter: StartAbilityParameter): Promise<number>;

  /**
   * Obtains the application context.
   *
   * @returns { Context } Returns the application context.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 6
   */
  function getContext(): Context;

  /**
   * Starts an ability and returns the execution result when the ability is destroyed.
   *
   * @param { StartAbilityParameter } parameter Indicates the ability to start.
   * @param { AsyncCallback<AbilityResult> } callback Returns the result of starting Ability in the form of callback.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 7
   */
  function startAbilityForResult(parameter: StartAbilityParameter, callback: AsyncCallback<AbilityResult>): void;

  /**
   * Starts an ability and returns the execution result when the ability is destroyed.
   *
   * @param { StartAbilityParameter } parameter Indicates the ability to start.
   * @returns { Promise<AbilityResult> } Returns the {@link AbilityResult}.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 7
   */
  function startAbilityForResult(parameter: StartAbilityParameter): Promise<AbilityResult>;

  /**
   * Sets the result code and data to be returned by this Page ability to the caller
   * and destroys this Page ability.
   *
   * @param { AbilityResult } parameter Indicates the result to return.
   * @param { AsyncCallback<void> } callback Return the result of stopping Ability in the form of callback.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 7
   */
  function terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>): void;

  /**
   * Sets the result code and data to be returned by this Page ability to the caller
   * and destroys this Page ability.
   *
   * @param { AbilityResult } parameter Indicates the result to return.
   * @returns { Promise<void> } the promise returned by the function.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 7
   */
  function terminateSelfWithResult(parameter: AbilityResult): Promise<void>;

  /**
   * Destroys this Page ability.
   *
   * @param { AsyncCallback<void> } callback Returns the stop ability result in the form of a callback.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 7
   */
  function terminateSelf(callback: AsyncCallback<void>): void;

  /**
   * Destroys this Page ability.
   *
   * @returns { Promise<void> } the promise returned by the function.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 7
   */
  function terminateSelf(): Promise<void>;

  /**
   * Obtains the dataAbilityHelper.
   *
   * @param { string } uri Indicates the path of the file to open.
   * @returns { DataAbilityHelper } Returns the dataAbilityHelper.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 7
   */
  function acquireDataAbilityHelper(uri: string): DataAbilityHelper;

  /**
   * Checks whether the main window of this ability has window focus.
   *
   * @param { AsyncCallback<boolean> } callback Returns the result in the form of callback.If this ability currently
   *                                            has window focus,return true otherwise,return false.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 7
   */
  function hasWindowFocus(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether the main window of this ability has window focus.
   *
   * @returns { Promise<boolean> } Returns {@code true} if this ability currently has window focus; returns {@code false} otherwise.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 7
   */
  function hasWindowFocus(): Promise<boolean>;

  /**
   * Connects the current ability to an ability using the AbilityInfo.AbilityType.SERVICE template.
   *
   * @param { Want } request The element name of the service ability
   * @param { ConnectOptions } options The remote object instance
   * @returns { number } Returns the number code of the ability connected
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 7
   */
  function connectAbility(request: Want, options: ConnectOptions): number;

  /**
   * The callback interface was connect successfully.
   *
   * @param { number } connection The number code of the ability connected
   * @param { AsyncCallback<void> } callback Returns the disconnection result in the form of callback.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 7
   */
  function disconnectAbility(connection: number, callback: AsyncCallback<void>): void;

  /**
   * The callback interface was connect successfully.
   *
   * @param { number } connection The number code of the ability connected
   * @returns { Promise<void> } the promise returned by the function.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 7
   */
  function disconnectAbility(connection: number): Promise<void>;

  /**
   * Obtains the window corresponding to the current ability.
   *
   * @param { AsyncCallback<window.Window> } callback Returns the window corresponding to the current ability in the form of callback.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 7
   */
  function getWindow(callback: AsyncCallback<window.Window>): void;

  /**
   * Obtains the window corresponding to the current ability.
   *
   * @returns { Promise<window.Window> } Returns the window corresponding to the current ability.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 7
   */
  function getWindow(): Promise<window.Window>;

  /**
   * Obtain the window configuration.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 7
   */
  export enum AbilityWindowConfiguration {
    WINDOW_MODE_UNDEFINED = 0,
    WINDOW_MODE_FULLSCREEN = 1,
    WINDOW_MODE_SPLIT_PRIMARY = 100,
    WINDOW_MODE_SPLIT_SECONDARY = 101,
    WINDOW_MODE_FLOATING = 102
  }

  /**
   * Obtain the window properties.
   *
   * @enum { string }
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 7
   */
  export enum AbilityStartSetting {
    BOUNDS_KEY = 'abilityBounds',
    WINDOW_MODE_KEY = 'windowMode',
    DISPLAY_ID_KEY = 'displayId'
  }

  /**
   * Obtain the errorCode.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 7
   */
  export enum ErrorCode {
    NO_ERROR = 0,
    INVALID_PARAMETER = -1,
    ABILITY_NOT_FOUND = -2,
    PERMISSION_DENY = -3
  }

  /**
   * Indicates the operation type of data.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 7
   */
  export enum DataAbilityOperationType {
    TYPE_INSERT = 1,
    TYPE_UPDATE = 2,
    TYPE_DELETE = 3,
    TYPE_ASSERT = 4
  }

  /**
   * The context of an ability or an application.  It allows access to
   * application-specific resources, request and verification permissions.
   * Can only be obtained through the ability.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @FAModelOnly
   * @since 9
   */
  export type Context = _Context;

  /**
   * Defines an AppVersionInfo object.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 9
   */
  export type AppVersionInfo = _AppVersionInfo;

  /**
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 9
   */
  export type ProcessInfo = _ProcessInfo;
}
export default featureAbility;
