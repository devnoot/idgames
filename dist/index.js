"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = exports.latestFiles = exports.latestVotes = exports.getContents = exports.getFiles = exports.getDirs = exports.getParentDir = exports.get = exports.about = exports.dbPing = exports.ping = void 0;
const axios_1 = __importDefault(require("axios"));
const types_1 = require("./types");
const defaultBaseUrl = new URL('https://doomworld.com/idgames/api/api.php');
const defaultOutputType = 'json';
const ping = ({ baseUrl = defaultBaseUrl, outputType = defaultOutputType } = {}) => __awaiter(void 0, void 0, void 0, function* () {
    const url = new URL(baseUrl);
    url.searchParams.set('action', types_1.Commands.ping);
    url.searchParams.set('out', outputType);
    const res = yield axios_1.default.get(url.toString());
    return yield res.data;
});
exports.ping = ping;
const dbPing = ({ baseUrl = defaultBaseUrl, outputType = defaultOutputType } = {}) => __awaiter(void 0, void 0, void 0, function* () {
    const url = new URL(baseUrl);
    url.searchParams.set('action', types_1.Commands.dbping);
    url.searchParams.set('out', outputType);
    const res = yield axios_1.default.get(url.toString());
    return yield res.data;
});
exports.dbPing = dbPing;
const about = ({ baseUrl = defaultBaseUrl, outputType = defaultOutputType } = {}) => __awaiter(void 0, void 0, void 0, function* () {
    const url = new URL(baseUrl);
    url.searchParams.set('action', types_1.Commands.about);
    url.searchParams.set('out', outputType);
    const res = yield axios_1.default.get(url.toString());
    return yield res.data;
});
exports.about = about;
const get = ({ baseUrl = defaultBaseUrl, outputType = defaultOutputType, id = undefined, file = undefined, }) => __awaiter(void 0, void 0, void 0, function* () {
    const url = new URL(baseUrl);
    url.searchParams.set('action', types_1.Commands.get);
    url.searchParams.set('out', outputType);
    if (id)
        url.searchParams.set('id', id);
    if (file)
        url.searchParams.set('file', file);
    const res = yield axios_1.default.get(url.toString());
    return yield res.data;
});
exports.get = get;
const getParentDir = ({ baseUrl = defaultBaseUrl, outputType = defaultOutputType, id = undefined, name = undefined, }) => __awaiter(void 0, void 0, void 0, function* () {
    const url = new URL(baseUrl);
    url.searchParams.set('action', types_1.Commands.get);
    url.searchParams.set('out', outputType);
    if (id)
        url.searchParams.set('id', id);
    if (name)
        url.searchParams.set('name', name);
    const res = yield axios_1.default.get(url.toString());
    return yield res.data;
});
exports.getParentDir = getParentDir;
const getDirs = ({ baseUrl = defaultBaseUrl, outputType = defaultOutputType, id = undefined, name = undefined, }) => __awaiter(void 0, void 0, void 0, function* () {
    const url = new URL(baseUrl);
    url.searchParams.set('action', types_1.Commands.get);
    url.searchParams.set('out', outputType);
    if (id)
        url.searchParams.set('id', id);
    if (name)
        url.searchParams.set('name', name);
    const res = yield axios_1.default.get(url.toString());
    return yield res.data;
});
exports.getDirs = getDirs;
const getFiles = ({ baseUrl = defaultBaseUrl, outputType = defaultOutputType, id = undefined, name = undefined, }) => __awaiter(void 0, void 0, void 0, function* () {
    const url = new URL(baseUrl);
    url.searchParams.set('action', types_1.Commands.get);
    url.searchParams.set('out', outputType);
    if (id)
        url.searchParams.set('id', id);
    if (name)
        url.searchParams.set('name', name);
    const res = yield axios_1.default.get(url.toString());
    return yield res.data;
});
exports.getFiles = getFiles;
const getContents = ({ baseUrl = defaultBaseUrl, outputType = defaultOutputType, id = undefined, name = undefined, }) => __awaiter(void 0, void 0, void 0, function* () {
    const url = new URL(baseUrl);
    url.searchParams.set('action', types_1.Commands.get);
    url.searchParams.set('out', outputType);
    if (id)
        url.searchParams.set('id', id);
    if (name)
        url.searchParams.set('name', name);
    const res = yield axios_1.default.get(url.toString());
    return yield res.data;
});
exports.getContents = getContents;
const latestVotes = ({ baseUrl = defaultBaseUrl, outputType = defaultOutputType, limit = undefined, }) => __awaiter(void 0, void 0, void 0, function* () {
    const url = new URL(baseUrl);
    url.searchParams.set('action', types_1.Commands.latestvotes);
    url.searchParams.set('out', outputType);
    if (limit)
        url.searchParams.set('limit', limit);
    const res = yield axios_1.default.get(url.toString());
    return yield res.data;
});
exports.latestVotes = latestVotes;
const latestFiles = ({ baseUrl = defaultBaseUrl, outputType = defaultOutputType, limit = undefined, startid = 0, }) => __awaiter(void 0, void 0, void 0, function* () {
    const url = new URL(baseUrl);
    url.searchParams.set('action', types_1.Commands.latestfiles);
    url.searchParams.set('out', outputType);
    if (limit)
        url.searchParams.set('limit', limit);
    if (startid)
        url.searchParams.set('startid', String(startid));
    const res = yield axios_1.default.get(url.toString());
    return yield res.data;
});
exports.latestFiles = latestFiles;
const search = ({ baseUrl = defaultBaseUrl, outputType = defaultOutputType, query = undefined, type = undefined, sort = undefined, dir = undefined, }) => __awaiter(void 0, void 0, void 0, function* () {
    const url = new URL(baseUrl);
    url.searchParams.set('action', types_1.Commands.search);
    url.searchParams.set('out', outputType);
    if (query)
        url.searchParams.set('query', query);
    if (type)
        url.searchParams.set('type', type);
    if (sort)
        url.searchParams.set('sort', sort);
    if (dir)
        url.searchParams.set('dir', dir);
    const res = yield axios_1.default.get(url.toString());
    return yield res.data;
});
exports.search = search;
//# sourceMappingURL=index.js.map