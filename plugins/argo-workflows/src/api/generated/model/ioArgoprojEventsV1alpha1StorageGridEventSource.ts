// @ts-nocheck
/**
 * Argo Workflows API
 * Argo Workflows is an open source container-native workflow engine for orchestrating parallel jobs on Kubernetes. For more information, please see https://argoproj.github.io/argo-workflows/
 *
 * The version of the OpenAPI document: VERSION
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { IoArgoprojEventsV1alpha1StorageGridFilter } from './ioArgoprojEventsV1alpha1StorageGridFilter';
import { IoArgoprojEventsV1alpha1WebhookContext } from './ioArgoprojEventsV1alpha1WebhookContext';
import { IoK8sApiCoreV1SecretKeySelector } from './ioK8sApiCoreV1SecretKeySelector';

export class IoArgoprojEventsV1alpha1StorageGridEventSource {
    /**
    * APIURL is the url of the storagegrid api.
    */
    'apiURL'?: string;
    'authToken'?: IoK8sApiCoreV1SecretKeySelector;
    /**
    * Name of the bucket to register notifications for.
    */
    'bucket'?: string;
    'events'?: Array<string>;
    'filter'?: IoArgoprojEventsV1alpha1StorageGridFilter;
    'metadata'?: { [key: string]: string; };
    'region'?: string;
    'topicArn'?: string;
    'webhook'?: IoArgoprojEventsV1alpha1WebhookContext;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "apiURL",
            "baseName": "apiURL",
            "type": "string"
        },
        {
            "name": "authToken",
            "baseName": "authToken",
            "type": "IoK8sApiCoreV1SecretKeySelector"
        },
        {
            "name": "bucket",
            "baseName": "bucket",
            "type": "string"
        },
        {
            "name": "events",
            "baseName": "events",
            "type": "Array<string>"
        },
        {
            "name": "filter",
            "baseName": "filter",
            "type": "IoArgoprojEventsV1alpha1StorageGridFilter"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "string"
        },
        {
            "name": "topicArn",
            "baseName": "topicArn",
            "type": "string"
        },
        {
            "name": "webhook",
            "baseName": "webhook",
            "type": "IoArgoprojEventsV1alpha1WebhookContext"
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojEventsV1alpha1StorageGridEventSource.attributeTypeMap;
    }
}
