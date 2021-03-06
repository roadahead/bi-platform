/**
 * Copyright (c) 2014 Baidu, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.baidu.rigel.biplatform.ma.resource;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Value;

/**
 * 
 * @author david.wang
 *
 */
@Resource(name = "ResourceRepository")
public class BaseResource {

    @Value("${biplatform.ma.ser_key}")
    protected String securityKey;
    
    /**
     * 根据产品线信息获取当前产品线加密密钥
     * @param productLine
     * @return String
     */
    protected String getSecurityKey(String productLine) {
        return null;
    }
}
