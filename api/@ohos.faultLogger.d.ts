/*
* Copyright (C) 2021 Huawei Device Co., Ltd.
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

import { AsyncCallback } from "./basic";

/**
 * This module provides the capability to query faultlog data.
 * @namespace FaultLogger
 * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
 * @since 8
 */
declare namespace FaultLogger {
  /**
   * The type of fault type.
   * @enum { number }
   * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
   * @since 8
   */
  enum FaultType {
    /**
     * NO_SPECIFIC log type not distinguished.
     * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
     * @since 8
     */
    NO_SPECIFIC = 0,
    /**
     * CPP_CRASH CPP crash log type.
     * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
     * @since 8
     */
    CPP_CRASH = 2,
    /**
     * JS_CRASH JS crash log type.
     * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
     * @since 8
     */
    JS_CRASH = 3,
    /**
     * APP_FREEZE app feeeze log type.
     * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
     * @since 8
     */
    APP_FREEZE = 4,
  }

  /**
   * Query the result of the current application FaultLog in callback Mode.
   * @param faultType Fault type to query
   * @param callback Faultlog information data callback function
   * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.faultlogger/FaultLogger#query
   */
  function querySelfFaultLog(faultType: FaultType, callback: AsyncCallback<Array<FaultLogInfo>>) : void;

  /**
   * Query the result of the current application FaultLog in return promise mode.
   * @param faultType Fault type to query
   * @returns return faultlog information data by promise
   * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.faultlogger/FaultLogger#query
   */
  function querySelfFaultLog(faultType: FaultType) : Promise<Array<FaultLogInfo>>;

  /**
   * Query the result of the current application FaultLog in callback Mode.
   * @param faultType Fault type to query
   * @param callback Faultlog information data callback function
   * @throws { BusinessError } 401 - the parameter check failed
   * @throws { BusinessError } 801 - the specified SystemCapability name was not found
   * @throws { BusinessError } 10600001 - the service is not running or broken
   * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
   * @since 9
   */
  function query(faultType: FaultType, callback: AsyncCallback<Array<FaultLogInfo>>) : void;

  /**
   * Query the result of the current application FaultLog in return promise mode.
   * @param faultType Fault type to query
   * @returns return faultlog information data by promise
   * @throws { BusinessError } 401 - the parameter check failed
   * @throws { BusinessError } 801 - the specified SystemCapability name was not found
   * @throws { BusinessError } 10600001 - the service is not running or broken
   * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
   * @since 9
   */
  function query(faultType: FaultType) : Promise<Array<FaultLogInfo>>;

  /**
   * FaultLog information data structure.
   * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
   * @since 8
   */
  interface FaultLogInfo {
    /**
     * Process id.
     * @type { number }
     * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
     * @since 8
     */
    pid: number;

    /**
     * User id.
     * @type { number }
     * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
     * @since 8
     */
    uid: number;

    /**
     * Fault type.
     * @type { FaultType }
     * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
     * @since 8
     */
    type: FaultType;

    /**
     * Second level timestamp.
     * @type { number }
     * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
     * @since 8
     */
    timestamp: number;

    /**
     * Fault reason.
     * @type { string }
     * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
     * @since 8
     */
    reason: string;

    /**
     * Fault module.
     * @type { string }
     * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
     * @since 8
     */
    module: string;

    /**
     * Fault summary.
     * @type { string }
     * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
     * @since 8
     */
    summary: string;

    /**
     * Fault log.
     * @type { string }
     * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
     * @since 8
     */
    fullLog: string;
  }
}

export default FaultLogger;
