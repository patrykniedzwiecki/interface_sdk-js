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

import { AsyncCallback } from '../../basic'

/**
 * Provides methods for accessing a database result set generated by querying the database.
 *
 * @since 7
 * @deprecated since 9
 * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
 * @import import data_rdb from '@ohos.data.rdb';
 */
export default interface ResultSet {
    /**
     * Obtains the names of all columns in a result set.
     *
     * @note The column names are returned as a string array, in which the strings are in the same order
     * as the columns in the result set.
     * @since 7
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     */
    columnNames: Array<string>;

    /**
     * Obtains the number of columns in the result set.
     *
     * @note The returned number is equal to the length of the string array returned by the
     * columnCount method.
     * @since 7
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     */
    columnCount: number;

    /**
     * Obtains the number of rows in the result set.
     *
     * @note N/A
     * @since 7
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core 
     */
    rowCount: number;

    /**
     * Obtains the current index of the result set.
     *
     * @note The result set index starts from 0.
     * @since 7
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     */
    rowIndex: number;

    /**
     * Checks whether the result set is positioned at the first row.
     *
     * @note N/A
     * @since 7
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     */
    isAtFirstRow: boolean;

    /**
     * Checks whether the result set is positioned at the last row.
     *
     * @note N/A
     * @since 7
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     */
    isAtLastRow: boolean;

    /**
     * Checks whether the result set is positioned after the last row.
     *
     * @note N/A
     * @since 7
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     */
    isEnded: boolean;

    /**
     * Returns whether the cursor is pointing to the position before the first
     * row.
     *
     * @note N/A
     * @since 7
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     */
    isStarted: boolean;

    /**
     * Checks whether the current result set is closed.
     *
     * If the result set is closed by calling the close method, true will be returned.
     *
     * @note N/A
     * @since 7
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     */
    isClosed: boolean;

    /**
     * Obtains the column index based on the specified column name.
     *
     * @note The column name is passed as an input parameter.
     * @since 7
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @param columnName Indicates the name of the specified column in the result set.
     * @return Returns the index of the specified column.
     */
    getColumnIndex(columnName: string): number;

    /**
     * Obtains the column name based on the specified column index.
     *
     * @note The column index is passed as an input parameter.
     * @since 7
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @param columnIndex Indicates the index of the specified column in the result set.
     * @return Returns the name of the specified column.
     */
    getColumnName(columnIndex: number): string;

    /**
     * Go to the specified row of the result set forwards or backwards by an offset relative to its current position.
     * A positive offset indicates moving backwards, and a negative offset indicates moving forwards.
     *
     * @note N/A
     * @since 7
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @param offset Indicates the offset relative to the current position.
     * @return Returns true if the result set is moved successfully and does not go beyond the range;
     * returns false otherwise.
     */
    goTo(offset: number): boolean;

    /**
     * Go to the specified row of the result set.
     *
     * @note N/A
     * @since 7
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @param rowIndex Indicates the index of the specified row, which starts from 0.
     * @return Returns true if the result set is moved successfully; returns false otherwise.
     */
    goToRow(position: number): boolean;

    /**
     * Go to the first row of the result set.
     *
     * @note N/A
     * @since 7
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @return Returns true if the result set is moved successfully;
     * returns false otherwise, for example, if the result set is empty.
     */
    goToFirstRow(): boolean;

    /**
     * Go to the last row of the result set.
     *
     * @note N/A
     * @since 7
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @return Returns true if the result set is moved successfully;
     * returns false otherwise, for example, if the result set is empty.
     */
    goToLastRow(): boolean;

    /**
     * Go to the next row of the result set.
     *
     * @note N/A
     * @since 7
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @return Returns true if the result set is moved successfully;
     * returns false otherwise, for example, if the result set is already in the last row.
     */
    goToNextRow(): boolean;

    /**
     * Go to the previous row of the result set.
     *
     * @note N/A
     * @since 7
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @return Returns true if the result set is moved successfully;
     * returns false otherwise, for example, if the result set is already in the first row.
     */
    goToPreviousRow(): boolean;

    /**
     * Obtains the value of the specified column in the current row as a byte array.
     *
     * @note The implementation class determines whether to throw an exception if the value of the specified column
     * in the current row is null or the specified column is not of the Blob type.
     * @since 7
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @param columnIndex Indicates the specified column index, which starts from 0.
     * @return Returns the value of the specified column as a byte array.
     */
    getBlob(columnIndex: number): Uint8Array;

    /**
     * Obtains the value of the specified column in the current row as string.
     *
     * @note The implementation class determines whether to throw an exception if the value of the specified column
     * in the current row is null or the specified column is not of the string type.
     * @since 7
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @param columnIndex Indicates the specified column index, which starts from 0.
     * @return Returns the value of the specified column as a string.
     */
    getString(columnIndex: number): string;

    /**
     * Obtains the value of the specified column in the current row as long.
     *
     * @note The implementation class determines whether to throw an exception if the value of the specified column
     * in the current row is null, the specified column is not of the integer type.
     * @since 7
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @param columnIndex Indicates the specified column index, which starts from 0.
     * @return Returns the value of the specified column as a long.
     */
    getLong(columnIndex: number): number;

    /**
     * Obtains the value of the specified column in the current row as double.
     *
     * @note The implementation class determines whether to throw an exception if the value of the specified column
     * in the current row is null, the specified column is not of the double type.
     * @since 7
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @param columnIndex Indicates the specified column index, which starts from 0.
     * @return Returns the value of the specified column as a double.
     */
    getDouble(columnIndex: number): number;

    /**
     * Checks whether the value of the specified column in the current row is null.
     *
     * @note N/A
     * @since 7
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @param columnIndex Indicates the specified column index, which starts from 0.
     * @return Returns true if the value of the specified column in the current row is null;
     * returns false otherwise.
     */
    isColumnNull(columnIndex: number): boolean;

    /**
     * Closes the result set.
     *
     * @note Calling this method on the result set will release all of its resources and makes it ineffective.
     * @since 7
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @return Returns true if the result set is closed; returns false otherwise.
     */
    close(): void;
}

/**
 * Provides methods for accessing a database result set generated by querying the database.
 *
 * @since 9
 * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
 * @import import data_rdb from '@ohos.data.rdb';
 */
export default interface ResultSetV9 {
    /**
     * Obtains the names of all columns in a result set.
     *
     * @note The column names are returned as a string array, in which the strings are in the same order
     * as the columns in the result set.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     */
    columnNames: Array<string>;

    /**
     * Obtains the number of columns in the result set.
     *
     * @note The returned number is equal to the length of the string array returned by the
     * columnCount method.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     */
    columnCount: number;

    /**
     * Obtains the number of rows in the result set.
     *
     * @note N/A
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     */
    rowCount: number;

    /**
     * Obtains the current index of the result set.
     *
     * @note The result set index starts from 0.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     */
    rowIndex: number;

    /**
     * Checks whether the result set is positioned at the first row.
     *
     * @note N/A
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     */
    isAtFirstRow: boolean;

    /**
     * Checks whether the result set is positioned at the last row.
     *
     * @note N/A
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     */
    isAtLastRow: boolean;

    /**
     * Checks whether the result set is positioned after the last row.
     *
     * @note N/A
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     */
    isEnded: boolean;

    /**
     * Returns whether the cursor is pointing to the position before the first
     * row.
     *
     * @note N/A
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     */
    isStarted: boolean;

    /**
     * Checks whether the current result set is closed.
     *
     * If the result set is closed by calling the close method, true will be returned.
     *
     * @note N/A
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     */
    isClosed: boolean;

    /**
     * Obtains the column index based on the specified column name.
     *
     * @note The column name is passed as an input parameter.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @param columnName Indicates the name of the specified column in the result set.
     * @return Returns the index of the specified column.
     * @throws {BusinessError} if process failed
     * @errorcode 401 Parameter error.
     */
    getColumnIndex(columnName: string): number;

    /**
     * Obtains the column name based on the specified column index.
     *
     * @note The column index is passed as an input parameter.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @param columnIndex Indicates the index of the specified column in the result set.
     * @return Returns the name of the specified column.
     * @throws {BusinessError} if process failed
     * @errorcode 14800012 The result set is empty or the specified location is invalid.
     * @errorcode 401 Parameter error.
     */
    getColumnName(columnIndex: number): string;

    /**
     * Go to the specified row of the result set forwards or backwards by an offset relative to its current position.
     * A positive offset indicates moving backwards, and a negative offset indicates moving forwards.
     *
     * @note N/A
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @param offset Indicates the offset relative to the current position.
     * @return Returns true if the result set is moved successfully and does not go beyond the range;
     * returns false otherwise.
     * @throws {BusinessError} if process failed
     * @errorcode 14800012 The result set is empty or the specified location is invalid.
     * @errorcode 401 Parameter error.
     */
    goTo(offset: number): boolean;

    /**
     * Go to the specified row of the result set.
     *
     * @note N/A
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @param rowIndex Indicates the index of the specified row, which starts from 0.
     * @return Returns true if the result set is moved successfully; returns false otherwise.
     * @throws {BusinessError} if process failed
     * @errorcode 14800012 The result set is empty or the specified location is invalid.
     * @errorcode 401 Parameter error.
     */
    goToRow(position: number): boolean;

    /**
     * Go to the first row of the result set.
     *
     * @note N/A
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @return Returns true if the result set is moved successfully;
     * returns false otherwise, for example, if the result set is empty.
     * @throws {BusinessError} if process failed
     * @errorcode 14800012 The result set is empty or the specified location is invalid.
     */
    goToFirstRow(): boolean;

    /**
     * Go to the last row of the result set.
     *
     * @note N/A
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @return Returns true if the result set is moved successfully;
     * returns false otherwise, for example, if the result set is empty.
     * @throws {BusinessError} if process failed
     * @errorcode 14800012 The result set is empty or the specified location is invalid.
     */
    goToLastRow(): boolean;

    /**
     * Go to the next row of the result set.
     *
     * @note N/A
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @return Returns true if the result set is moved successfully;
     * returns false otherwise, for example, if the result set is already in the last row.
     * @throws {BusinessError} if process failed
     * @errorcode 14800012 The result set is empty or the specified location is invalid.
     */
    goToNextRow(): boolean;

    /**
     * Go to the previous row of the result set.
     *
     * @note N/A
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @return Returns true if the result set is moved successfully;
     * returns false otherwise, for example, if the result set is already in the first row.
     * @throws {BusinessError} if process failed
     * @errorcode 14800012 The result set is empty or the specified location is invalid.
     */
    goToPreviousRow(): boolean;

    /**
     * Obtains the value of the specified column in the current row as a byte array.
     *
     * @note The implementation class determines whether to throw an exception if the value of the specified column
     * in the current row is null or the specified column is not of the Blob type.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @param columnIndex Indicates the specified column index, which starts from 0.
     * @return Returns the value of the specified column as a byte array.
     * @throws {BusinessError} if process failed
     * @errorcode 14800013 The column value is null or the column type is incompatible.
     * @errorcode 401 Parameter error.
     */
    getBlob(columnIndex: number): Uint8Array;

    /**
     * Obtains the value of the specified column in the current row as string.
     *
     * @note The implementation class determines whether to throw an exception if the value of the specified column
     * in the current row is null or the specified column is not of the string type.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @param columnIndex Indicates the specified column index, which starts from 0.
     * @return Returns the value of the specified column as a string.
     * @throws {BusinessError} if process failed
     * @errorcode 14800013 The column value is null or the column type is incompatible.
     * @errorcode 401 Parameter error.
     */
    getString(columnIndex: number): string;

    /**
     * Obtains the value of the specified column in the current row as long.
     *
     * @note The implementation class determines whether to throw an exception if the value of the specified column
     * in the current row is null, the specified column is not of the integer type.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @param columnIndex Indicates the specified column index, which starts from 0.
     * @return Returns the value of the specified column as a long.
     * @throws {BusinessError} if process failed
     * @errorcode 14800013 The column value is null or the column type is incompatible.
     * @errorcode 401 Parameter error.
     */
    getLong(columnIndex: number): number;

    /**
     * Obtains the value of the specified column in the current row as double.
     *
     * @note The implementation class determines whether to throw an exception if the value of the specified column
     * in the current row is null, the specified column is not of the double type.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @param columnIndex Indicates the specified column index, which starts from 0.
     * @return Returns the value of the specified column as a double.
     * @throws {BusinessError} if process failed
     * @errorcode 14800013 The column value is null or the column type is incompatible.
     * @errorcode 401 Parameter error.
     */
    getDouble(columnIndex: number): number;

    /**
     * Checks whether the value of the specified column in the current row is null.
     *
     * @note N/A
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @param columnIndex Indicates the specified column index, which starts from 0.
     * @return Returns true if the value of the specified column in the current row is null;
     * returns false otherwise.
     * @throws {BusinessError} if process failed
     * @errorcode 14800013 The column value is null or the column type is incompatible.
     * @errorcode 401 Parameter error.
     */
    isColumnNull(columnIndex: number): boolean;

    /**
     * Closes the result set.
     *
     * @note Calling this method on the result set will release all of its resources and makes it ineffective.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @return Returns true if the result set is closed; returns false otherwise.
     * @throws {BusinessError} if process failed
     * @errorcode 14800012 The result set is empty or the specified location is invalid.
     */
    close(): void;
}