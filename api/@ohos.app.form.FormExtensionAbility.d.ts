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

import formBindingData from './@ohos.app.form.formBindingData';
import formInfo from "./@ohos.app.form.formInfo";
import FormExtensionContext from "./application/FormExtensionContext";
import Want from './@ohos.app.ability.Want';
import { Configuration } from './@ohos.app.ability.Configuration';

/**
 * class of form extension.
 * @syscap SystemCapability.Ability.Form
 * @StageModelOnly
 * @since 9
 */
export default class FormExtensionAbility {
  /**
   * Indicates form extension context.
   * @type { FormExtensionContext }
   * @syscap SystemCapability.Ability.Form
   * @StageModelOnly
   * @since 9
   */
  context: FormExtensionContext;

  /**
   * Called to return a {@link formBindingData#FormBindingData} object.
   * @param { Want } want - Indicates the detailed information for creating a {@link formBindingData#FormBindingData}.
   *                        The {@code Want} object must include the form ID, form name, and grid style of the form.
   *                        Such form information must be managed as persistent data for further form
   *                        acquisition, update, and deletion.
   * @returns { formBindingData.FormBindingData } Returns the created {@link formBindingData#FormBindingData} object.
   * @syscap SystemCapability.Ability.Form
   * @StageModelOnly
   * @since 9
   */
  onAddForm(want: Want): formBindingData.FormBindingData;

  /**
   * Called when the form provider is notified that a temporary form is successfully converted to a normal form.
   * @param { string } formId - Indicates the ID of the form.
   * @syscap SystemCapability.Ability.Form
   * @StageModelOnly
   * @since 9
   */
  onCastToNormalForm(formId: string): void;

  /**
   * Called to notify the form provider to update a specified form.
   * @param { string } formId - Indicates the ID of the form to update.
   * @syscap SystemCapability.Ability.Form
   * @StageModelOnly
   * @since 9
   */
  onUpdateForm(formId: string): void;

  /**
   * Called when the form provider receives form events from the system.
   * @param { { [key: string]: number } } newStatus - Indicates the form events occurred. The key in the {@code Map}
   *        object indicates the form ID, and the value indicates the event type, which can be either
   *        {@link formInfo#VisibilityType#FORM_VISIBLE} or {@link formInfo#VisibilityType#FORM_INVISIBLE}.
   *        {@link formInfo#VisibilityType#FORM_VISIBLE} means that the form becomes visible, and
   *        {@link formInfo#VisibilityType#FORM_INVISIBLE} means that the form becomes invisible.
   * @syscap SystemCapability.Ability.Form
   * @StageModelOnly
   * @since 9
   */
  onChangeFormVisibility(newStatus: { [key: string]: number }): void;

  /**
   * Called when a specified message event defined by the form provider is triggered. This method is valid only for
   * JS forms.
   * @param { string } formId - Indicates the ID of the form on which the message event is triggered, which is
   *                            provided by the client to the form provider.
   * @param { string } message - Indicates the value of the {@code params} field of the message event. This parameter
   *                             is used to identify the specific component on which the event is triggered.
   * @syscap SystemCapability.Ability.Form
   * @StageModelOnly
   * @since 9
   */
  onFormEvent(formId: string, message: string): void;

  /**
   * Called to notify the form provider that a specified form has been destroyed. Override this method if
   * you want your application, as the form provider, to be notified of form deletion.
   * @param { string } formId - Indicates the ID of the destroyed form.
   * @syscap SystemCapability.Ability.Form
   * @StageModelOnly
   * @since 9
   */
  onRemoveForm(formId: string): void;

  /**
   * Called when the system configuration is updated.
   * @param { Configuration } newConfig - Indicates the system configuration, such as language and color mode.
   * @syscap SystemCapability.Ability.Form
   * @StageModelOnly
   * @since 9
   */
  onConfigurationUpdate(newConfig: Configuration): void;

  /**
   * Called to return a {@link FormState} object.
   * <p>You must override this callback if you want this ability to return the actual form state. Otherwise,
   * this method returns {@link FormState#DEFAULT} by default.</p>
   * @param { Want } want - Indicates the description of the form for which the {@link formInfo#FormState}
   *                        is obtained. The description covers the bundle name, ability name, module name,
   *                        form name, and form dimensions.
   * @returns { formInfo.FormState } Returns the {@link formInfo#FormState} object.
   * @syscap SystemCapability.Ability.Form
   * @StageModelOnly
   * @since 9
   */
  onAcquireFormState?(want: Want): formInfo.FormState;

  /**
   * Called when the system shares the form.
   * @param { string } formId - Indicates the ID of the form.
   * @returns { { [key: string]: Object } } Returns the wantParams object.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @StageModelOnly
   * @since 9
   */
  onShareForm?(formId: string): { [key: string]: Object };

  /**
   * Called when the system acquire the form data.
   * @param { string } formId - Indicates the ID of the form.
   * @returns { { [key: string]: Object } } Returns the wantParams object.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  onAcquireFormData?(formId: string): { [key: string]: Object };
}
