/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(2);
const notifications_module_1 = __webpack_require__(4);
const email_module_1 = __webpack_require__(27);
const sms_module_1 = __webpack_require__(35);
const push_module_1 = __webpack_require__(40);
const shared_module_1 = __webpack_require__(45);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            notifications_module_1.NotificationsModule,
            email_module_1.EmailModule,
            sms_module_1.SmsModule,
            push_module_1.PushModule,
            shared_module_1.SharedModule
        ],
    })
], AppModule);


/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationsModule = void 0;
const common_1 = __webpack_require__(2);
const notifications_controller_1 = __webpack_require__(5);
const notifications_service_1 = __webpack_require__(6);
const email_module_1 = __webpack_require__(27);
const sms_module_1 = __webpack_require__(35);
const push_module_1 = __webpack_require__(40);
let NotificationsModule = class NotificationsModule {
};
exports.NotificationsModule = NotificationsModule;
exports.NotificationsModule = NotificationsModule = __decorate([
    (0, common_1.Module)({
        imports: [email_module_1.EmailModule, sms_module_1.SmsModule, push_module_1.PushModule],
        controllers: [notifications_controller_1.NotificationsController],
        providers: [notifications_service_1.NotificationsService]
    })
], NotificationsModule);


/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationsController = void 0;
const common_1 = __webpack_require__(2);
const notifications_service_1 = __webpack_require__(6);
const create_notification_dto_1 = __webpack_require__(7);
let NotificationsController = class NotificationsController {
    constructor(notificationsService) {
        this.notificationsService = notificationsService;
    }
    create(createNotificationDto) {
        return this.notificationsService.create(createNotificationDto);
    }
};
exports.NotificationsController = NotificationsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_notification_dto_1.CreateNotificationDto !== "undefined" && create_notification_dto_1.CreateNotificationDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], NotificationsController.prototype, "create", null);
exports.NotificationsController = NotificationsController = __decorate([
    (0, common_1.Controller)('notifications'),
    __metadata("design:paramtypes", [typeof (_a = typeof notifications_service_1.NotificationsService !== "undefined" && notifications_service_1.NotificationsService) === "function" ? _a : Object])
], NotificationsController);


/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationsService = void 0;
const common_1 = __webpack_require__(2);
const create_notification_dto_1 = __webpack_require__(7);
const email_service_1 = __webpack_require__(9);
const sms_service_1 = __webpack_require__(18);
const push_service_1 = __webpack_require__(22);
const error_handling_service_1 = __webpack_require__(13);
const logger_service_1 = __webpack_require__(14);
const notification_exceptions_1 = __webpack_require__(26);
let NotificationsService = class NotificationsService {
    constructor(emailService, smsService, pushService, errorHandlingService, logger) {
        this.emailService = emailService;
        this.smsService = smsService;
        this.pushService = pushService;
        this.errorHandlingService = errorHandlingService;
        this.logger = logger;
        this.MODULE_NAME = 'NotificationsService';
    }
    async create(createNotificationDto) {
        const { type, title, message, recipientId } = createNotificationDto;
        this.logger.log(`Processing ${type} notification request`, this.MODULE_NAME, { recipientId, title });
        try {
            let result;
            switch (type) {
                case create_notification_dto_1.NotificationType.EMAIL:
                    result = await this.emailService.sendEmail({
                        to: recipientId,
                        subject: title,
                        text: message,
                    });
                    break;
                case create_notification_dto_1.NotificationType.SMS:
                    result = await this.smsService.sendSms({
                        to: recipientId,
                        message: message,
                    });
                    break;
                case create_notification_dto_1.NotificationType.PUSH:
                    result = await this.pushService.sendPush({
                        token: recipientId,
                        title: title,
                        body: message,
                    });
                    break;
                default:
                    this.logger.error(`Invalid notification type: ${type}`, this.MODULE_NAME, undefined, { recipientId });
                    throw new notification_exceptions_1.NotificationValidationException(`Unsupported notification type: ${type}`);
            }
            this.logger.log(`Successfully sent ${type} notification`, this.MODULE_NAME, { recipientId, result });
            return result;
        }
        catch (error) {
            this.logger.error(`Failed to send ${type} notification`, this.MODULE_NAME, error.stack, { recipientId, error: error.message });
            if (error instanceof notification_exceptions_1.NotificationValidationException) {
                throw error;
            }
            throw new notification_exceptions_1.NotificationProviderException(`Failed to send ${type} notification`, { originalError: error.message });
        }
    }
};
exports.NotificationsService = NotificationsService;
exports.NotificationsService = NotificationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof email_service_1.EmailService !== "undefined" && email_service_1.EmailService) === "function" ? _a : Object, typeof (_b = typeof sms_service_1.SmsService !== "undefined" && sms_service_1.SmsService) === "function" ? _b : Object, typeof (_c = typeof push_service_1.PushService !== "undefined" && push_service_1.PushService) === "function" ? _c : Object, typeof (_d = typeof error_handling_service_1.ErrorHandlingService !== "undefined" && error_handling_service_1.ErrorHandlingService) === "function" ? _d : Object, typeof (_e = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _e : Object])
], NotificationsService);


/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateNotificationDto = exports.NotificationType = void 0;
const class_validator_1 = __webpack_require__(8);
var NotificationType;
(function (NotificationType) {
    NotificationType["EMAIL"] = "email";
    NotificationType["SMS"] = "sms";
    NotificationType["PUSH"] = "push";
})(NotificationType || (exports.NotificationType = NotificationType = {}));
class CreateNotificationDto {
}
exports.CreateNotificationDto = CreateNotificationDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateNotificationDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateNotificationDto.prototype, "message", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(NotificationType),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateNotificationDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateNotificationDto.prototype, "recipientId", void 0);


/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmailService = void 0;
const common_1 = __webpack_require__(2);
const config_1 = __webpack_require__(10);
const nodemailer = __webpack_require__(11);
const email_error_service_1 = __webpack_require__(12);
let EmailService = class EmailService {
    constructor(configService, emailErrorService) {
        this.configService = configService;
        this.emailErrorService = emailErrorService;
    }
    async onModuleInit() {
        try {
            this.emailConfig = this.configService.get('email');
            if (!this.emailConfig?.user || !this.emailConfig?.pass) {
                throw new Error('Email configuration is missing required credentials');
            }
            this.transporter = nodemailer.createTransport({
                service: this.emailConfig.service,
                auth: {
                    user: this.emailConfig.user,
                    pass: this.emailConfig.pass,
                },
            });
        }
        catch (error) {
            this.emailErrorService.handleError(error, 'initialization');
        }
    }
    async sendEmail(emailDto) {
        try {
            const result = await this.transporter.sendMail({
                from: this.emailConfig?.from,
                to: emailDto.to,
                subject: emailDto.subject,
                text: emailDto.text,
                html: emailDto.html,
            });
            return {
                status: 'success',
                messageId: result.messageId,
            };
        }
        catch (error) {
            this.emailErrorService.handleError(error, 'sendEmail');
            throw error;
        }
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof email_error_service_1.EmailErrorService !== "undefined" && email_error_service_1.EmailErrorService) === "function" ? _b : Object])
], EmailService);


/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmailErrorService = void 0;
const common_1 = __webpack_require__(2);
const error_handling_service_1 = __webpack_require__(13);
const email_exceptions_1 = __webpack_require__(16);
let EmailErrorService = class EmailErrorService {
    constructor(errorHandlingService) {
        this.errorHandlingService = errorHandlingService;
    }
    handleError(error, context) {
        if (error instanceof email_exceptions_1.EmailException) {
            this.errorHandlingService.handleError(error, `Email.${context}`);
        }
        else {
            const wrappedError = new email_exceptions_1.EmailException(error.message || 'An unexpected error occurred in email service');
            this.errorHandlingService.handleError(wrappedError, `Email.${context}`);
        }
    }
};
exports.EmailErrorService = EmailErrorService;
exports.EmailErrorService = EmailErrorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof error_handling_service_1.ErrorHandlingService !== "undefined" && error_handling_service_1.ErrorHandlingService) === "function" ? _a : Object])
], EmailErrorService);


/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ErrorHandlingService = void 0;
const common_1 = __webpack_require__(2);
const logger_service_1 = __webpack_require__(14);
let ErrorHandlingService = class ErrorHandlingService {
    constructor(logger) {
        this.logger = logger;
    }
    handleError(error, context) {
        const errorResponse = this.formatError(error);
        this.logger.error(`Error in ${context}: ${errorResponse.message}`, error.stack, context);
    }
    formatError(error) {
        return {
            message: error.message || 'An unexpected error occurred',
            code: error.code || 'INTERNAL_ERROR',
            timestamp: new Date().toISOString(),
            details: error.details || null,
        };
    }
    getFormattedError(error) {
        return this.formatError(error);
    }
};
exports.ErrorHandlingService = ErrorHandlingService;
exports.ErrorHandlingService = ErrorHandlingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" ? _a : Object])
], ErrorHandlingService);


/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggerService = void 0;
const common_1 = __webpack_require__(2);
const winston_1 = __webpack_require__(15);
let LoggerService = class LoggerService {
    constructor(logger) {
        this.logger = logger;
    }
    formatMessage(message, module, metadata) {
        return {
            message,
            module,
            metadata,
        };
    }
    log(message, module, metadata) {
        this.logger.info(this.formatMessage(message, module, metadata));
    }
    error(message, module, trace, metadata) {
        this.logger.error(this.formatMessage(message, module, {
            ...metadata,
            trace,
        }));
    }
    warn(message, module, metadata) {
        this.logger.warn(this.formatMessage(message, module, metadata));
    }
    debug(message, module, metadata) {
        this.logger.debug(this.formatMessage(message, module, metadata));
    }
    verbose(message, module, metadata) {
        this.logger.verbose(this.formatMessage(message, module, metadata));
    }
};
exports.LoggerService = LoggerService;
exports.LoggerService = LoggerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof winston_1.Logger !== "undefined" && winston_1.Logger) === "function" ? _a : Object])
], LoggerService);


/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = require("winston");

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmailTemplateException = exports.EmailValidationException = exports.EmailDeliveryException = exports.EmailException = void 0;
const common_1 = __webpack_require__(2);
const notification_exceptions_1 = __webpack_require__(17);
class EmailException extends notification_exceptions_1.BaseException {
    constructor(message, code = 'EMAIL_ERROR') {
        super(message, code, common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.EmailException = EmailException;
class EmailDeliveryException extends EmailException {
    constructor(message) {
        super(message, 'EMAIL_DELIVERY_ERROR');
    }
}
exports.EmailDeliveryException = EmailDeliveryException;
class EmailValidationException extends EmailException {
    constructor(message) {
        super(message, 'EMAIL_VALIDATION_ERROR');
    }
}
exports.EmailValidationException = EmailValidationException;
class EmailTemplateException extends EmailException {
    constructor(message) {
        super(message, 'EMAIL_TEMPLATE_ERROR');
    }
}
exports.EmailTemplateException = EmailTemplateException;


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UnauthorizedException = exports.ConfigurationException = exports.ValidationException = exports.BaseException = void 0;
const common_1 = __webpack_require__(2);
class BaseException extends common_1.HttpException {
    constructor(message, code, status = common_1.HttpStatus.BAD_REQUEST) {
        super({
            message,
            code,
            timestamp: new Date().toISOString(),
        }, status);
    }
}
exports.BaseException = BaseException;
class ValidationException extends BaseException {
    constructor(message) {
        super(message, 'VALIDATION_ERROR', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.ValidationException = ValidationException;
class ConfigurationException extends BaseException {
    constructor(message) {
        super(message, 'CONFIGURATION_ERROR', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
exports.ConfigurationException = ConfigurationException;
class UnauthorizedException extends BaseException {
    constructor(message) {
        super(message, 'UNAUTHORIZED', common_1.HttpStatus.UNAUTHORIZED);
    }
}
exports.UnauthorizedException = UnauthorizedException;


/***/ }),
/* 18 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SmsService = void 0;
const common_1 = __webpack_require__(2);
const config_1 = __webpack_require__(10);
const twilio_1 = __webpack_require__(19);
const sms_error_service_1 = __webpack_require__(20);
let SmsService = class SmsService {
    constructor(configService, smsErrorService) {
        this.configService = configService;
        this.smsErrorService = smsErrorService;
    }
    async onModuleInit() {
        try {
            this.smsConfig = this.configService.get('sms');
            if (!this.smsConfig?.accountSid || !this.smsConfig?.authToken) {
                throw new Error('SMS configuration is missing required credentials');
            }
            this.twilioClient = new twilio_1.Twilio(this.smsConfig.accountSid, this.smsConfig.authToken);
        }
        catch (error) {
            this.smsErrorService.handleError(error, 'initialization');
        }
    }
    async sendSms(smsDto) {
        try {
            const message = await this.twilioClient.messages.create({
                body: smsDto.message,
                to: smsDto.to,
                from: this.smsConfig?.fromNumber,
            });
            return {
                status: 'success',
                messageId: message.sid,
            };
        }
        catch (error) {
            this.smsErrorService.handleError(error, 'sendSms');
            throw error;
        }
    }
};
exports.SmsService = SmsService;
exports.SmsService = SmsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof sms_error_service_1.SmsErrorService !== "undefined" && sms_error_service_1.SmsErrorService) === "function" ? _b : Object])
], SmsService);


/***/ }),
/* 19 */
/***/ ((module) => {

module.exports = require("twilio");

/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SmsErrorService = void 0;
const common_1 = __webpack_require__(2);
const error_handling_service_1 = __webpack_require__(13);
const sms_exceptions_1 = __webpack_require__(21);
let SmsErrorService = class SmsErrorService {
    constructor(errorHandlingService) {
        this.errorHandlingService = errorHandlingService;
    }
    handleError(error, context) {
        if (error instanceof sms_exceptions_1.SmsException) {
            this.errorHandlingService.handleError(error, `SMS.${context}`);
        }
        else {
            const wrappedError = new sms_exceptions_1.SmsException(error.message || 'An unexpected error occurred in SMS service');
            this.errorHandlingService.handleError(wrappedError, `SMS.${context}`);
        }
    }
};
exports.SmsErrorService = SmsErrorService;
exports.SmsErrorService = SmsErrorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof error_handling_service_1.ErrorHandlingService !== "undefined" && error_handling_service_1.ErrorHandlingService) === "function" ? _a : Object])
], SmsErrorService);


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SmsProviderException = exports.SmsValidationException = exports.SmsDeliveryException = exports.SmsException = void 0;
const common_1 = __webpack_require__(2);
const notification_exceptions_1 = __webpack_require__(17);
class SmsException extends notification_exceptions_1.BaseException {
    constructor(message, code = 'SMS_ERROR') {
        super(message, code, common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.SmsException = SmsException;
class SmsDeliveryException extends SmsException {
    constructor(message) {
        super(message, 'SMS_DELIVERY_ERROR');
    }
}
exports.SmsDeliveryException = SmsDeliveryException;
class SmsValidationException extends SmsException {
    constructor(message) {
        super(message, 'SMS_VALIDATION_ERROR');
    }
}
exports.SmsValidationException = SmsValidationException;
class SmsProviderException extends SmsException {
    constructor(message) {
        super(message, 'SMS_PROVIDER_ERROR');
    }
}
exports.SmsProviderException = SmsProviderException;


/***/ }),
/* 22 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PushService = void 0;
const common_1 = __webpack_require__(2);
const config_1 = __webpack_require__(10);
const admin = __webpack_require__(23);
const push_error_service_1 = __webpack_require__(24);
let PushService = class PushService {
    constructor(configService, pushErrorService) {
        this.configService = configService;
        this.pushErrorService = pushErrorService;
    }
    async onModuleInit() {
        try {
            const pushConfig = this.configService.get('push');
            if (!pushConfig?.projectId || !pushConfig?.privateKey || !pushConfig?.clientEmail) {
                throw new Error('Push configuration is missing required credentials');
            }
            this.firebaseApp = admin.initializeApp({
                credential: admin.credential.cert({
                    projectId: pushConfig.projectId,
                    privateKey: pushConfig.privateKey,
                    clientEmail: pushConfig.clientEmail,
                }),
            });
        }
        catch (error) {
            this.pushErrorService.handleError(error, 'initialization');
        }
    }
    async onModuleDestroy() {
        if (this.firebaseApp) {
            await this.firebaseApp.delete();
        }
    }
    async sendPush(pushDto) {
        try {
            const message = {
                token: pushDto.token,
                notification: {
                    title: pushDto.title,
                    body: pushDto.body,
                },
                data: pushDto.data,
            };
            const response = await this.firebaseApp.messaging().send(message);
            return {
                status: 'success',
                messageId: response,
            };
        }
        catch (error) {
            this.pushErrorService.handleError(error, 'sendPush');
            throw error;
        }
    }
};
exports.PushService = PushService;
exports.PushService = PushService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof push_error_service_1.PushErrorService !== "undefined" && push_error_service_1.PushErrorService) === "function" ? _b : Object])
], PushService);


/***/ }),
/* 23 */
/***/ ((module) => {

module.exports = require("firebase-admin");

/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PushErrorService = void 0;
const common_1 = __webpack_require__(2);
const error_handling_service_1 = __webpack_require__(13);
const push_exceptions_1 = __webpack_require__(25);
let PushErrorService = class PushErrorService {
    constructor(errorHandlingService) {
        this.errorHandlingService = errorHandlingService;
    }
    handleError(error, context) {
        if (error instanceof push_exceptions_1.PushException) {
            this.errorHandlingService.handleError(error, `Push.${context}`);
        }
        else {
            const wrappedError = new push_exceptions_1.PushException(error.message || 'An unexpected error occurred in push notification service');
            this.errorHandlingService.handleError(wrappedError, `Push.${context}`);
        }
    }
};
exports.PushErrorService = PushErrorService;
exports.PushErrorService = PushErrorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof error_handling_service_1.ErrorHandlingService !== "undefined" && error_handling_service_1.ErrorHandlingService) === "function" ? _a : Object])
], PushErrorService);


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PushProviderException = exports.PushTokenException = exports.PushDeliveryException = exports.PushException = void 0;
const common_1 = __webpack_require__(2);
const notification_exceptions_1 = __webpack_require__(17);
class PushException extends notification_exceptions_1.BaseException {
    constructor(message, code = 'PUSH_ERROR') {
        super(message, code, common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.PushException = PushException;
class PushDeliveryException extends PushException {
    constructor(message) {
        super(message, 'PUSH_DELIVERY_ERROR');
    }
}
exports.PushDeliveryException = PushDeliveryException;
class PushTokenException extends PushException {
    constructor(message) {
        super(message, 'PUSH_TOKEN_ERROR');
    }
}
exports.PushTokenException = PushTokenException;
class PushProviderException extends PushException {
    constructor(message) {
        super(message, 'PUSH_PROVIDER_ERROR');
    }
}
exports.PushProviderException = PushProviderException;


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationProviderException = exports.NotificationValidationException = exports.NotificationException = void 0;
const common_1 = __webpack_require__(2);
const notification_exceptions_1 = __webpack_require__(17);
class NotificationException extends notification_exceptions_1.BaseException {
    constructor(message, code = 'NOTIFICATION_ERROR') {
        super(message, code, common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.NotificationException = NotificationException;
class NotificationValidationException extends NotificationException {
    constructor(message) {
        super(message, 'NOTIFICATION_VALIDATION_ERROR');
    }
}
exports.NotificationValidationException = NotificationValidationException;
class NotificationProviderException extends NotificationException {
    constructor(message, details) {
        super(message, 'NOTIFICATION_PROVIDER_ERROR');
    }
}
exports.NotificationProviderException = NotificationProviderException;


/***/ }),
/* 27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmailModule = void 0;
const common_1 = __webpack_require__(2);
const config_1 = __webpack_require__(10);
const email_service_1 = __webpack_require__(9);
const email_controller_1 = __webpack_require__(28);
const email_error_service_1 = __webpack_require__(12);
const email_config_1 = __webpack_require__(30);
const config_validator_1 = __webpack_require__(31);
const email_config_schema_1 = __webpack_require__(33);
const path_1 = __webpack_require__(34);
let EmailModule = class EmailModule {
};
exports.EmailModule = EmailModule;
exports.EmailModule = EmailModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forFeature(email_config_1.default),
            config_1.ConfigModule.forRoot({
                envFilePath: (0, path_1.join)(__dirname, 'config', 'env', '.env.email'),
                validate: (config) => (0, config_validator_1.validateConfig)(config, email_config_schema_1.EmailConfigSchema),
                validationOptions: {
                    allowUnknown: true,
                    abortEarly: true,
                },
            }),
        ],
        controllers: [email_controller_1.EmailController],
        providers: [email_service_1.EmailService, email_error_service_1.EmailErrorService],
        exports: [email_service_1.EmailService],
    })
], EmailModule);


/***/ }),
/* 28 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmailController = void 0;
const common_1 = __webpack_require__(2);
const email_service_1 = __webpack_require__(9);
const send_email_dto_1 = __webpack_require__(29);
let EmailController = class EmailController {
    constructor(emailService) {
        this.emailService = emailService;
    }
    async sendEmail(sendEmailDto) {
        return this.emailService.sendEmail(sendEmailDto);
    }
};
exports.EmailController = EmailController;
__decorate([
    (0, common_1.Post)('send'),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof send_email_dto_1.SendEmailDto !== "undefined" && send_email_dto_1.SendEmailDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], EmailController.prototype, "sendEmail", null);
exports.EmailController = EmailController = __decorate([
    (0, common_1.Controller)('email'),
    __metadata("design:paramtypes", [typeof (_a = typeof email_service_1.EmailService !== "undefined" && email_service_1.EmailService) === "function" ? _a : Object])
], EmailController);


/***/ }),
/* 29 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SendEmailDto = void 0;
const class_validator_1 = __webpack_require__(8);
class SendEmailDto {
}
exports.SendEmailDto = SendEmailDto;
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SendEmailDto.prototype, "to", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SendEmailDto.prototype, "subject", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SendEmailDto.prototype, "text", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SendEmailDto.prototype, "html", void 0);


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const config_1 = __webpack_require__(10);
exports["default"] = (0, config_1.registerAs)('email', () => ({
    service: process.env.EMAIL_SERVICE || 'gmail',
    user: process.env.EMAIL_SERVICE_USER,
    pass: process.env.EMAIL_SERVICE_PASS,
    from: process.env.EMAIL_FROM || process.env.EMAIL_SERVICE_USER,
}));


/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateConfig = validateConfig;
const class_transformer_1 = __webpack_require__(32);
const class_validator_1 = __webpack_require__(8);
function validateConfig(config, ValidationClass) {
    const validatedConfig = (0, class_transformer_1.plainToInstance)(ValidationClass, config, {
        enableImplicitConversion: true,
    });
    const errors = (0, class_validator_1.validateSync)(validatedConfig, {
        skipMissingProperties: false,
    });
    if (errors.length > 0) {
        throw new Error(errors.toString());
    }
    return validatedConfig;
}


/***/ }),
/* 32 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 33 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmailConfigSchema = void 0;
const class_validator_1 = __webpack_require__(8);
class EmailConfigSchema {
}
exports.EmailConfigSchema = EmailConfigSchema;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], EmailConfigSchema.prototype, "service", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], EmailConfigSchema.prototype, "user", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], EmailConfigSchema.prototype, "pass", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EmailConfigSchema.prototype, "from", void 0);


/***/ }),
/* 34 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 35 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SmsModule = void 0;
const common_1 = __webpack_require__(2);
const config_1 = __webpack_require__(10);
const sms_service_1 = __webpack_require__(18);
const sms_controller_1 = __webpack_require__(36);
const sms_error_service_1 = __webpack_require__(20);
const sms_config_1 = __webpack_require__(38);
const config_validator_1 = __webpack_require__(31);
const sms_config_schema_1 = __webpack_require__(39);
const path_1 = __webpack_require__(34);
let SmsModule = class SmsModule {
};
exports.SmsModule = SmsModule;
exports.SmsModule = SmsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forFeature(sms_config_1.default),
            config_1.ConfigModule.forRoot({
                envFilePath: (0, path_1.join)(__dirname, 'config', 'env', '.env.sms'),
                validate: (config) => (0, config_validator_1.validateConfig)(config, sms_config_schema_1.SmsConfigSchema),
                validationOptions: {
                    allowUnknown: true,
                    abortEarly: true,
                },
            }),
        ],
        controllers: [sms_controller_1.SmsController],
        providers: [sms_service_1.SmsService, sms_error_service_1.SmsErrorService],
        exports: [sms_service_1.SmsService],
    })
], SmsModule);


/***/ }),
/* 36 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SmsController = void 0;
const common_1 = __webpack_require__(2);
const sms_service_1 = __webpack_require__(18);
const send_sms_dto_1 = __webpack_require__(37);
let SmsController = class SmsController {
    constructor(smsService) {
        this.smsService = smsService;
    }
    async sendSms(sendSmsDto) {
        return this.smsService.sendSms(sendSmsDto);
    }
};
exports.SmsController = SmsController;
__decorate([
    (0, common_1.Post)('send'),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof send_sms_dto_1.SendSmsDto !== "undefined" && send_sms_dto_1.SendSmsDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], SmsController.prototype, "sendSms", null);
exports.SmsController = SmsController = __decorate([
    (0, common_1.Controller)('sms'),
    __metadata("design:paramtypes", [typeof (_a = typeof sms_service_1.SmsService !== "undefined" && sms_service_1.SmsService) === "function" ? _a : Object])
], SmsController);


/***/ }),
/* 37 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SendSmsDto = void 0;
const class_validator_1 = __webpack_require__(8);
class SendSmsDto {
}
exports.SendSmsDto = SendSmsDto;
__decorate([
    (0, class_validator_1.IsPhoneNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SendSmsDto.prototype, "to", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SendSmsDto.prototype, "message", void 0);


/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const config_1 = __webpack_require__(10);
exports["default"] = (0, config_1.registerAs)('sms', () => ({
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    authToken: process.env.TWILIO_AUTH_TOKEN,
    fromNumber: process.env.TWILIO_FROM_NUMBER,
}));


/***/ }),
/* 39 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SmsConfigSchema = void 0;
const class_validator_1 = __webpack_require__(8);
class SmsConfigSchema {
}
exports.SmsConfigSchema = SmsConfigSchema;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SmsConfigSchema.prototype, "accountSid", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SmsConfigSchema.prototype, "authToken", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SmsConfigSchema.prototype, "fromNumber", void 0);


/***/ }),
/* 40 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PushModule = void 0;
const common_1 = __webpack_require__(2);
const config_1 = __webpack_require__(10);
const push_service_1 = __webpack_require__(22);
const push_controller_1 = __webpack_require__(41);
const push_error_service_1 = __webpack_require__(24);
const push_config_1 = __webpack_require__(43);
const config_validator_1 = __webpack_require__(31);
const push_config_schema_1 = __webpack_require__(44);
const path_1 = __webpack_require__(34);
let PushModule = class PushModule {
};
exports.PushModule = PushModule;
exports.PushModule = PushModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forFeature(push_config_1.default),
            config_1.ConfigModule.forRoot({
                envFilePath: (0, path_1.join)(__dirname, 'config', 'env', '.env.push'),
                validate: (config) => (0, config_validator_1.validateConfig)(config, push_config_schema_1.PushConfigSchema),
                validationOptions: {
                    allowUnknown: true,
                    abortEarly: true,
                },
            }),
        ],
        controllers: [push_controller_1.PushController],
        providers: [push_service_1.PushService, push_error_service_1.PushErrorService],
        exports: [push_service_1.PushService],
    })
], PushModule);


/***/ }),
/* 41 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PushController = void 0;
const common_1 = __webpack_require__(2);
const push_service_1 = __webpack_require__(22);
const send_push_dto_1 = __webpack_require__(42);
let PushController = class PushController {
    constructor(pushService) {
        this.pushService = pushService;
    }
    async sendPush(sendPushDto) {
        return this.pushService.sendPush(sendPushDto);
    }
};
exports.PushController = PushController;
__decorate([
    (0, common_1.Post)('send'),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof send_push_dto_1.SendPushDto !== "undefined" && send_push_dto_1.SendPushDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], PushController.prototype, "sendPush", null);
exports.PushController = PushController = __decorate([
    (0, common_1.Controller)('push'),
    __metadata("design:paramtypes", [typeof (_a = typeof push_service_1.PushService !== "undefined" && push_service_1.PushService) === "function" ? _a : Object])
], PushController);


/***/ }),
/* 42 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SendPushDto = void 0;
const class_validator_1 = __webpack_require__(8);
class SendPushDto {
}
exports.SendPushDto = SendPushDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SendPushDto.prototype, "token", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SendPushDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SendPushDto.prototype, "body", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_a = typeof Record !== "undefined" && Record) === "function" ? _a : Object)
], SendPushDto.prototype, "data", void 0);


/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const config_1 = __webpack_require__(10);
exports["default"] = (0, config_1.registerAs)('push', () => ({
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
}));


/***/ }),
/* 44 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PushConfigSchema = void 0;
const class_validator_1 = __webpack_require__(8);
class PushConfigSchema {
}
exports.PushConfigSchema = PushConfigSchema;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PushConfigSchema.prototype, "projectId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PushConfigSchema.prototype, "privateKey", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PushConfigSchema.prototype, "clientEmail", void 0);


/***/ }),
/* 45 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SharedModule = void 0;
const common_1 = __webpack_require__(2);
const nest_winston_1 = __webpack_require__(46);
const error_handling_service_1 = __webpack_require__(13);
const logger_service_1 = __webpack_require__(14);
const logger_config_1 = __webpack_require__(47);
const global_exception_filter_1 = __webpack_require__(48);
const core_1 = __webpack_require__(1);
let SharedModule = class SharedModule {
};
exports.SharedModule = SharedModule;
exports.SharedModule = SharedModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            nest_winston_1.WinstonModule.forRoot(logger_config_1.loggerConfig),
        ],
        providers: [
            error_handling_service_1.ErrorHandlingService,
            {
                provide: logger_service_1.LoggerService,
                useFactory: (logger) => new logger_service_1.LoggerService(logger),
                inject: ['winston'],
            },
            {
                provide: core_1.APP_FILTER,
                useClass: global_exception_filter_1.GlobalExceptionFilter,
            },
        ],
        exports: [error_handling_service_1.ErrorHandlingService, logger_service_1.LoggerService],
    })
], SharedModule);


/***/ }),
/* 46 */
/***/ ((module) => {

module.exports = require("nest-winston");

/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loggerConfig = void 0;
const winston = __webpack_require__(15);
const nest_winston_1 = __webpack_require__(46);
exports.loggerConfig = {
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(winston.format.timestamp(), winston.format.ms(), nest_winston_1.utilities.format.nestLike('NotificationService', {
                prettyPrint: true,
                colors: true,
            })),
        }),
        new winston.transports.File({
            filename: 'logs/error.log',
            level: 'error',
            format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
        }),
        new winston.transports.File({
            filename: 'logs/combined.log',
            format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
        }),
    ],
    format: winston.format.combine(winston.format.timestamp(), winston.format.json(), winston.format.printf((info) => {
        return JSON.stringify({
            timestamp: info.timestamp,
            level: info.level,
            module: info.module || 'NotificationService',
            message: info.message,
            ...(info.metadata || {})
        });
    })),
};


/***/ }),
/* 48 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlobalExceptionFilter = void 0;
const common_1 = __webpack_require__(2);
const error_handling_service_1 = __webpack_require__(13);
let GlobalExceptionFilter = class GlobalExceptionFilter {
    constructor(errorHandlingService) {
        this.errorHandlingService = errorHandlingService;
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        this.errorHandlingService.handleError(exception, 'GlobalExceptionFilter');
        const status = exception instanceof common_1.HttpException
            ? exception.getStatus()
            : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        const errorResponse = exception instanceof common_1.HttpException
            ? exception.getResponse()
            : this.errorHandlingService.getFormattedError(exception);
        response.status(status).json(errorResponse);
    }
};
exports.GlobalExceptionFilter = GlobalExceptionFilter;
exports.GlobalExceptionFilter = GlobalExceptionFilter = __decorate([
    (0, common_1.Catch)(),
    __metadata("design:paramtypes", [typeof (_a = typeof error_handling_service_1.ErrorHandlingService !== "undefined" && error_handling_service_1.ErrorHandlingService) === "function" ? _a : Object])
], GlobalExceptionFilter);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const app_module_1 = __webpack_require__(3);
const global_exception_filter_1 = __webpack_require__(48);
const error_handling_service_1 = __webpack_require__(13);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const errorHandlingService = app.get(error_handling_service_1.ErrorHandlingService);
    app.useGlobalFilters(new global_exception_filter_1.GlobalExceptionFilter(errorHandlingService));
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
        exceptionFactory: (errors) => {
            const messages = errors.map(error => ({
                field: error.property,
                message: Object.values(error.constraints || {}).join(', '),
            }));
            return new Error(JSON.stringify(messages));
        },
    }));
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

})();

/******/ })()
;