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

import { AppProcessState } from "./appprocessstate"

/**
 * @name This class saves process information about an application
 * @since 6
 * @SysCap appexecfwk
 * @import N/A
 * @permission N/A
 * @devices phone
 * @testapi
 */

 export interface ProcessInfo {
    /**
     * The name of the current process
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap appexecfwk
     */
     processName: string;

    /**
     * The id of the current process
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap appexecfwk
     */
     pid: number;

    /**
     * Obtains the state of the current applicaiton process
     *
     * @default -
     * @devices phone, tablet
     * @since 6
     * @SysCap appexecfwk
     */
     appProcessState: AppProcessState;
}