/*
 * Copyright (C) 2022 Huawei Device Co., Ltd.
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

import {AsyncCallback, Callback} from "./@ohos.base";

/**
 * Provides interfaces to manage ethernet.
 *
 * @since 9
 * @syscap SystemCapability.Communication.NetManager.Ethernet
 */
declare namespace ethernet {
  /**
   * Get the specified network interface information.
   *
   * @param iface Indicates the network interface name.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @systemapi Hide this for inner system use.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error.
   * @throws {BusinessError} 2200001 - Invalid parameter value.
   * @throws {BusinessError} 2200002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2200003 - System internal error.
   * @throws {BusinessError} 2201005 - Device information does not exist.
   */
  function getIfaceConfig(iface: string, callback: AsyncCallback<InterfaceConfiguration>): void;
  function getIfaceConfig(iface: string): Promise<InterfaceConfiguration>;

  /**
   * Set the specified network interface parameters.
   *
   * @param iface Indicates the network interface name of the network parameter.
   * @param ic Indicates the ic. See {@link InterfaceConfiguration}.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @systemapi Hide this for inner system use.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error.
   * @throws {BusinessError} 2200001 - Invalid parameter value.
   * @throws {BusinessError} 2200002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2200003 - System internal error.
   * @throws {BusinessError} 2201004 - Invalid Ethernet profile.
   * @throws {BusinessError} 2201005 - Device information does not exist.
   * @throws {BusinessError} 2201006 - Ethernet device not connected.
   * @throws {BusinessError} 2201007 - Ethernet failed to write user configuration information.
   */
  function setIfaceConfig(iface: string, ic: InterfaceConfiguration, callback: AsyncCallback<void>): void;
  function setIfaceConfig(iface: string, ic: InterfaceConfiguration): Promise<void>;

  /**
   * Check whether the specified network is active.
   *
   * @param iface Indicates the network interface name.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @systemapi Hide this for inner system use.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error.
   * @throws {BusinessError} 2200001 - Invalid parameter value.
   * @throws {BusinessError} 2200002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2200003 - System internal error.
   * @throws {BusinessError} 2201005 - Device information does not exist.
   */
  function isIfaceActive(iface: string, callback: AsyncCallback<number>): void;
  function isIfaceActive(iface: string): Promise<number>;

  /**
   * Gets the names of all active network interfaces.
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @systemapi Hide this for inner system use.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 2200002 - Operation failed. Cannot connect to service.
   * @throws {BusinessError} 2200003 - System internal error.
   */
  function getAllActiveIfaces(callback: AsyncCallback<Array<string>>): void;
  function getAllActiveIfaces(): Promise<Array<string>>;

  /**
   * @systemapi Hide this for inner system use.
   */
  export interface InterfaceConfiguration {
    /**
     * See {@link IPSetMode}
     */
    mode: IPSetMode;
    /**
     * Ethernet connection static configuration IP information.
     * The address value range is 0-255.0-255.0-255.0-255.0-255
     * (DHCP mode does not need to be configured)
     */
    ipAddr: string;

    /**
     * Ethernet connection static configuration route information.
     * The address value range is 0-255.0-255.0-255.0-255.0-255
     * (DHCP mode does not need to be configured)
     */
    route: string;

    /**
     * Ethernet connection static configuration gateway information.
     * The address value range is 0-255.0-255.0-255.0-255.0-255
     * (DHCP mode does not need to be configured)
     */
    gateway: string;

    /**
     * Ethernet connection static configuration netMask information.
     * The address value range is 0-255.0-255.0-255.0-255.0-255
     * (DHCP mode does not need to be configured)
     */
    netMask: string;

    /**
     * The Ethernet connection is configured with the dns service address.
     * The address value range is 0-255.0-255.0-255.0-255.0-255
     * (DHCP mode does not need to be configured, Multiple addresses are separated by ",")
     */
    dnsServers: string;
  }

  /**
   * @systemapi Hide this for inner system use.
   */
  export enum IPSetMode {
    STATIC = 0,
    DHCP = 1
  }
}

export default ethernet;