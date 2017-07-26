webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.chat\r\n{\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.chat li\r\n{\r\n    margin-bottom: 10px;\r\n    padding-bottom: 5px;\r\n    border-bottom: 1px dotted #B3A9A9;\r\n}\r\n\r\n.chat li.left .chat-body\r\n{\r\n    margin-left: 60px;\r\n}\r\n\r\n.chat li.right .chat-body\r\n{\r\n    margin-right: 60px;\r\n}\r\n\r\n\r\n.chat li .chat-body p\r\n{\r\n    margin: 0;\r\n    color: #777777;\r\n}\r\n\r\n.panel .slidedown .glyphicon, .chat .glyphicon\r\n{\r\n    margin-right: 5px;\r\n}\r\n\r\n.panel-body\r\n{\r\n    overflow-y: scroll;\r\n    height: 250px;\r\n}\r\n\r\n::-webkit-scrollbar-track\r\n{\r\n    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n::-webkit-scrollbar\r\n{\r\n    width: 12px;\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n::-webkit-scrollbar-thumb\r\n{\r\n    box-shadow: inset 0 0 6px rgba(0,0,0,.3);\r\n    background-color: #555;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    A Chat Bot App!\n  </h1>\n  </div>\n    <div>\n       <router-outlet></router-outlet>\n    </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chat_bot_chat_bot_component__ = __webpack_require__("../../../../../src/app/chat-bot/chat-bot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__resource_service__ = __webpack_require__("../../../../../src/app/resource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chat_bot_chat_bot_service__ = __webpack_require__("../../../../../src/app/chat-bot/chat-bot.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__chat_bot_chat_bot_component__["a" /* ChatBotComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                { path: 'chatBot', component: __WEBPACK_IMPORTED_MODULE_7__chat_bot_chat_bot_component__["a" /* ChatBotComponent */] },
                { path: '', redirectTo: 'chatBot', pathMatch: 'full' },
                { path: '**', redirectTo: 'chatBot', pathMatch: 'full' }
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__resource_service__["a" /* ResourceService */],
            __WEBPACK_IMPORTED_MODULE_9__chat_bot_chat_bot_service__["a" /* ChatBotService */],
            { provide: 'API_URL', useValue: '' }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/chat-bot/chat-bot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #edeff2;\r\n  font-family: \"Calibri\", \"Roboto\", sans-serif;\r\n}\r\n\r\n.chat_window {\r\n  position: absolute;\r\n  width: calc(100% - 20px);\r\n  max-width: 800px;\r\n  height: 500px;\r\n  border-radius: 10px;\r\n  background-color: #fff;\r\n  left: 50%;\r\n  top: 50%;\r\n  -webkit-transform: translateX(-50%) translateY(-50%);\r\n          transform: translateX(-50%) translateY(-50%);\r\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\r\n  background-color: #f8f8f8;\r\n  overflow: hidden;\r\n}\r\n\r\n.top_menu {\r\n  background-color: #fff;\r\n  width: 100%;\r\n  padding: 20px 0 15px;\r\n  box-shadow: 0 1px 30px rgba(0, 0, 0, 0.1);\r\n}\r\n.top_menu .buttons {\r\n  margin: 3px 0 0 20px;\r\n  position: absolute;\r\n}\r\n.top_menu .buttons .button {\r\n  width: 16px;\r\n  height: 16px;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  margin-right: 10px;\r\n  position: relative;\r\n}\r\n.top_menu .buttons .button.close {\r\n  background-color: #f5886e;\r\n}\r\n.top_menu .buttons .button.minimize {\r\n  background-color: #fdbf68;\r\n}\r\n.top_menu .buttons .button.maximize {\r\n  background-color: #a3d063;\r\n}\r\n.top_menu .title {\r\n  text-align: center;\r\n  color: #bcbdc0;\r\n  font-size: 20px;\r\n}\r\n\r\n.messages {\r\n  position: relative;\r\n  list-style: none;\r\n  padding: 20px 10px 0 10px;\r\n  margin: 0;\r\n  height: 347px;\r\n  overflow: scroll;\r\n}\r\n.messages .message {\r\n  clear: both;\r\n  overflow: hidden;\r\n  margin-bottom: 20px;\r\n  transition: all 0.5s linear;\r\n  opacity: 0;\r\n}\r\n.messages .message.left .avatar {\r\n  background-color: #f5886e;\r\n  float: left;\r\n}\r\n.messages .message.left .text_wrapper {\r\n  background-color: #ffe6cb;\r\n  margin-left: 20px;\r\n}\r\n.messages .message.left .text_wrapper::after, .messages .message.left .text_wrapper::before {\r\n  right: 100%;\r\n  border-right-color: #ffe6cb;\r\n}\r\n.messages .message.left .text {\r\n  color: #c48843;\r\n}\r\n.messages .message.right .avatar {\r\n  background-color: #fdbf68;\r\n  float: right;\r\n}\r\n.messages .message.right .text_wrapper {\r\n  background-color: #c7eafc;\r\n  margin-right: 20px;\r\n  float: right;\r\n}\r\n.messages .message.right .text_wrapper::after, .messages .message.right .text_wrapper::before {\r\n  left: 100%;\r\n  border-left-color: #c7eafc;\r\n}\r\n.messages .message.right .text {\r\n  color: #45829b;\r\n}\r\n.messages .message.appeared {\r\n  opacity: 1;\r\n}\r\n.messages .message .avatar {\r\n  width: 60px;\r\n  height: 60px;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n}\r\n.messages .message .text_wrapper {\r\n  display: inline-block;\r\n  padding: 20px;\r\n  border-radius: 6px;\r\n  width: calc(100% - 85px);\r\n  min-width: 100px;\r\n  position: relative;\r\n}\r\n.messages .message .text_wrapper::after, .messages .message .text_wrapper:before {\r\n  top: 18px;\r\n  border: solid transparent;\r\n  content: \" \";\r\n  height: 0;\r\n  width: 0;\r\n  position: absolute;\r\n  pointer-events: none;\r\n}\r\n.messages .message .text_wrapper::after {\r\n  border-width: 13px;\r\n  margin-top: 0px;\r\n}\r\n.messages .message .text_wrapper::before {\r\n  border-width: 15px;\r\n  margin-top: -2px;\r\n}\r\n.messages .message .text_wrapper .text {\r\n  font-size: 18px;\r\n  font-weight: 300;\r\n}\r\n\r\n.bottom_wrapper {\r\n  position: relative;\r\n  width: 100%;\r\n  background-color: #fff;\r\n  padding: 20px 20px;\r\n  position: absolute;\r\n  bottom: 0;\r\n}\r\n.bottom_wrapper .message_input_wrapper {\r\n  display: inline-block;\r\n  height: 50px;\r\n  border-radius: 25px;\r\n  border: 1px solid #bcbdc0;\r\n  width: calc(100% - 160px);\r\n  position: relative;\r\n  padding: 0 20px;\r\n}\r\n.bottom_wrapper .message_input_wrapper .message_input {\r\n  border: none;\r\n  height: 100%;\r\n  box-sizing: border-box;\r\n  width: calc(100% - 40px);\r\n  position: absolute;\r\n  outline-width: 0;\r\n  color: gray;\r\n}\r\n.bottom_wrapper .send_message {\r\n  width: 140px;\r\n  height: 50px;\r\n  display: inline-block;\r\n  border-radius: 50px;\r\n  background-color: #a3d063;\r\n  border: 2px solid #a3d063;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  transition: all 0.2s linear;\r\n  text-align: center;\r\n  float: right;\r\n}\r\n.bottom_wrapper .send_message:hover {\r\n  color: #a3d063;\r\n  background-color: #fff;\r\n}\r\n.bottom_wrapper .send_message .text {\r\n  font-size: 18px;\r\n  font-weight: 300;\r\n  display: inline-block;\r\n  line-height: 48px;\r\n}\r\n\r\n.message_template {\r\n  display: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-bot/chat-bot.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"chat_window\">\n     <div class=\"top_menu\">\n         <div class=\"buttons\">\n             </div><div class=\"title\">Are you a man?</div>\n                    </div><ul class=\"messages\">\n                        <li class=\"message appeared {{msg.class}}\" *ngFor='let msg of Messages'>\n                            <div class=\"avatar\" style=\"text-align:center\">{{msg.user}}\n                                </div><div class=\"text_wrapper\">\n                                    <div class=\"text\">{{msg.inputMessage}}</div>\n                                </div></li>\n                                <!-- <li class=\"message right appeared\">\n                                    <div class=\"avatar\">\n                                        </div>\n                                    <div class=\"text_wrapper\">\n                                        <div class=\"text\">Hi Sandy! How are you?</div></div></li> -->\n                                        \n                                       </ul>\n                        <div class=\"bottom_wrapper clearfix\">\n                        <div class=\"message_input_wrapper\">\n                            <input class=\"message_input\" placeholder=\"Type your message here...\" [(ngModel)]='input.inputMessage' (keyup.enter)=\"getMessage()\"/></div>\n                            <div class=\"send_message\"><div class=\"icon\"></div>\n                            <div class=\"text\" (click)='getMessage()'>Send</div>\n                        </div>\n                    </div>\n                </div>\n                            <div class=\"message_template\">\n     <li class=\"message\"><div class=\"avatar\"></div>\n        <div class=\"text_wrapper\"><div class=\"text\">\n            </div>\n    </div>\n    </li>\n</div>"

/***/ }),

/***/ "../../../../../src/app/chat-bot/chat-bot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_bot_service__ = __webpack_require__("../../../../../src/app/chat-bot/chat-bot.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBotComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatBotComponent = (function () {
    function ChatBotComponent(chatbotService) {
        this.chatbotService = chatbotService;
        this.input = {
            inputMessage: "",
            sessionID: "2",
            class: "left",
            user: "Me"
        };
        this.Messages = [];
    }
    ChatBotComponent.prototype.getMessage = function () {
        var _this = this;
        console.log(this.input);
        this.Messages.push(Object.assign({}, this.input));
        this.chatbotService.getmessage(this.input)
            .subscribe(function (output) { return _this.doSomething(output); }, function (error) { return _this.errorMessage = error; });
    };
    ChatBotComponent.prototype.doSomething = function (data) {
        var _this = this;
        console.log(data);
        if (data.result) {
            var requestData = {
                inputMessage: data.result.fulfillment.speech,
                sessionID: "2",
                class: "right",
                user: "AI"
            };
            this.Messages.push(requestData);
            var ele = document.getElementsByClassName('messages');
            var eleArray = Array.prototype.slice.call(ele);
            eleArray.map(function (val) {
                setTimeout(function () {
                    val.scrollTop = val.scrollHeight;
                    _this.input.inputMessage = "";
                }, 200);
            });
            console.log("message :" + this.Messages);
        }
    };
    ChatBotComponent.prototype.ngOnInit = function () {
    };
    return ChatBotComponent;
}());
ChatBotComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        // selector: 'app-chat-bot', removing thsi sleector because we are using routing
        template: __webpack_require__("../../../../../src/app/chat-bot/chat-bot.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat-bot/chat-bot.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__chat_bot_service__["a" /* ChatBotService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chat_bot_service__["a" /* ChatBotService */]) === "function" && _a || Object])
], ChatBotComponent);

var _a;
//# sourceMappingURL=chat-bot.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat-bot/chat-bot.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBotService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var ChatBotService = (function () {
    // /api/v1/apiAiCall
    function ChatBotService(_http, apiUrl) {
        this._http = _http;
        this.apiUrl = apiUrl;
    }
    ChatBotService.prototype.getmessage = function (input) {
        var bodyString = JSON.stringify(input); // Stringify payload
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http.post(this.apiUrl + '/api/v1/apiAiCall', bodyString, options)
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); }); //...errors if any
    };
    return ChatBotService;
}());
ChatBotService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])('API_URL')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, String])
], ChatBotService);

var _a;
//# sourceMappingURL=chat-bot.service.js.map

/***/ }),

/***/ "../../../../../src/app/resource.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResourceService = (function () {
    function ResourceService() {
    }
    return ResourceService;
}());
ResourceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ResourceService);

//# sourceMappingURL=resource.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map