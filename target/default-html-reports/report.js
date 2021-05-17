$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/LoginFunctionality.feature");
formatter.feature({
  "name": "Login functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the main page",
  "keyword": "Given "
});
formatter.match({
  "location": "de.gehalt.step_definitions.Login.the_user_is_on_the_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that only authorized users should be able to login to the application",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "When "
});
formatter.match({
  "location": "de.gehalt.step_definitions.Login.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton class\u003d\"btn primary icon sign-out icon--right primary grow loginsubmitbtn\" type\u003d\"submit\"\u003e...\u003c/button\u003e is not clickable at point (561, 368). Other element would receive the click: \u003ciframe src\u003d\"https://cdn.privacy-mgmt.com/index.html?message_id\u003d414888\u0026amp;consentUUID\u003ddd3bea2b-0c4a-45b4-b773-7f298557a157\u0026amp;requestUUID\u003d8e41be07-1f3a-41ff-a880-9d8c01756df3\u0026amp;preload_message\u003dtrue\" id\u003d\"sp_message_iframe_414888\"\u003e\u003c/iframe\u003e\n  (Session info: chrome\u003d90.0.4430.212)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-8VJMFK9L\u0027, ip: \u0027192.168.213.160\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.212, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\murat\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62022}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: eccc1c0c26910b98727bd30d260277b1\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat de.gehalt.pages.LoginPage.login(LoginPage.java:64)\r\n\tat de.gehalt.step_definitions.Login.user_logs_in_with_valid_credentials(Login.java:29)\r\n\tat ✽.user logs in with valid credentials(file:///C:/Users/murat/IdeaProjects/gehalt/src/test/resources/features/LoginFunctionality.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "\"https://www.gehalt.de/profile\" header text should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "de.gehalt.step_definitions.Login.header_text_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify that users should not able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user logs in with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "\"\u003cerror message\u003e\"  should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "error message"
      ]
    },
    {
      "cells": [
        "fake@mail.de",
        "Password1",
        "Ihre E-Mail-Adresse oder Ihr Passwort sind nicht korrekt"
      ]
    },
    {
      "cells": [
        "fake2@hotmail.com",
        "wrongpass",
        "Ihre E-Mail-Adresse oder Ihr Passwort sind nicht korrekt"
      ]
    },
    {
      "cells": [
        "fake3@mail.com",
        "wrong",
        "Ihre E-Mail-Adresse oder Ihr Passwort sind nicht korrekt"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the main page",
  "keyword": "Given "
});
formatter.match({
  "location": "de.gehalt.step_definitions.Login.the_user_is_on_the_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that users should not able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user logs in with \"fake@mail.de\" and \"Password1\"",
  "keyword": "When "
});
formatter.match({
  "location": "de.gehalt.step_definitions.Login.user_logs_in_with_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton class\u003d\"btn primary icon sign-out icon--right primary grow loginsubmitbtn\" type\u003d\"submit\"\u003e...\u003c/button\u003e is not clickable at point (561, 368). Other element would receive the click: \u003ciframe src\u003d\"https://cdn.privacy-mgmt.com/index.html?message_id\u003d414888\u0026amp;consentUUID\u003d416b7aa5-95c5-4aca-aa78-751effef7597\u0026amp;requestUUID\u003dea65b013-70a0-4c82-8e49-7d562482edc6\u0026amp;preload_message\u003dtrue\" id\u003d\"sp_message_iframe_414888\"\u003e\u003c/iframe\u003e\n  (Session info: chrome\u003d90.0.4430.212)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-8VJMFK9L\u0027, ip: \u0027192.168.213.160\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.212, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\murat\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62054}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 18c0f7ef8a50a5a3f13a66b583414b23\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat de.gehalt.pages.LoginPage.login(LoginPage.java:64)\r\n\tat de.gehalt.step_definitions.Login.user_logs_in_with_and(Login.java:40)\r\n\tat ✽.user logs in with \"fake@mail.de\" and \"Password1\"(file:///C:/Users/murat/IdeaProjects/gehalt/src/test/resources/features/LoginFunctionality.feature:14)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "\"Ihre E-Mail-Adresse oder Ihr Passwort sind nicht korrekt\"  should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "de.gehalt.step_definitions.Login.should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the main page",
  "keyword": "Given "
});
formatter.match({
  "location": "de.gehalt.step_definitions.Login.the_user_is_on_the_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that users should not able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user logs in with \"fake2@hotmail.com\" and \"wrongpass\"",
  "keyword": "When "
});
formatter.match({
  "location": "de.gehalt.step_definitions.Login.user_logs_in_with_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchFrameException: no such frame\n  (Session info: chrome\u003d90.0.4430.212)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-8VJMFK9L\u0027, ip: \u0027192.168.213.160\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.212, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\murat\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62085}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 1d4d929ac65d3b2b026c020b3e029cd4\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:872)\r\n\tat de.gehalt.pages.LoginPage.login(LoginPage.java:49)\r\n\tat de.gehalt.step_definitions.Login.user_logs_in_with_and(Login.java:40)\r\n\tat ✽.user logs in with \"fake2@hotmail.com\" and \"wrongpass\"(file:///C:/Users/murat/IdeaProjects/gehalt/src/test/resources/features/LoginFunctionality.feature:14)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "\"Ihre E-Mail-Adresse oder Ihr Passwort sind nicht korrekt\"  should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "de.gehalt.step_definitions.Login.should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the main page",
  "keyword": "Given "
});
formatter.match({
  "location": "de.gehalt.step_definitions.Login.the_user_is_on_the_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that users should not able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user logs in with \"fake3@mail.com\" and \"wrong\"",
  "keyword": "When "
});
formatter.match({
  "location": "de.gehalt.step_definitions.Login.user_logs_in_with_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton class\u003d\"btn primary icon sign-out icon--right primary grow loginsubmitbtn\" type\u003d\"submit\"\u003e...\u003c/button\u003e is not clickable at point (561, 368). Other element would receive the click: \u003ciframe src\u003d\"https://cdn.privacy-mgmt.com/index.html?message_id\u003d414888\u0026amp;consentUUID\u003dcd7a830a-8ea1-48e7-978f-19e08a70f48d\u0026amp;requestUUID\u003dfe7a1c6d-051e-4e97-a67b-0769675bfa4d\u0026amp;preload_message\u003dtrue\" id\u003d\"sp_message_iframe_414888\"\u003e\u003c/iframe\u003e\n  (Session info: chrome\u003d90.0.4430.212)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-8VJMFK9L\u0027, ip: \u0027192.168.213.160\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.212, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\murat\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62112}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 64bd63abd25439b8afedad6bb1ce0fd6\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat de.gehalt.pages.LoginPage.login(LoginPage.java:64)\r\n\tat de.gehalt.step_definitions.Login.user_logs_in_with_and(Login.java:40)\r\n\tat ✽.user logs in with \"fake3@mail.com\" and \"wrong\"(file:///C:/Users/murat/IdeaProjects/gehalt/src/test/resources/features/LoginFunctionality.feature:14)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "\"Ihre E-Mail-Adresse oder Ihr Passwort sind nicht korrekt\"  should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "de.gehalt.step_definitions.Login.should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png", "screenshot");
formatter.after({
  "status": "passed"
});
});