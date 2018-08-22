(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(6);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("./vendor");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(140);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_domain_task__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_domain_task___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_domain_task__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__);



var actionCreators = {
    signUp: function (user) { return function (dispatch, getState) {
        var apiMethodUrl = "https://small-project-api.herokuapp.com/users";
        var apiMethodType = "post";
        var fetchTask = fetch(apiMethodUrl, {
            method: apiMethodType,
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(user)
        })
            .then(function (response) { return response.json(); })
            .then(function (data) {
            if (data.reason || !data.refresh_token) {
                dispatch({ type: 'SIGNUP_VALIDATION_ERROR', errorMessage: data.reason });
            }
            else {
                window.sessionStorage.setItem('userRefreshToken', data.refresh_token);
                window.sessionStorage.setItem('userAccessToken', data.jwt);
                dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_router_redux__["push"])("/ideas"));
                window.location.reload();
            }
        });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_domain_task__["addTask"])(fetchTask);
    }; },
    logIn: function (user) { return function (dispatch, getState) {
        var apiMethodUrl = "https://small-project-api.herokuapp.com/access-tokens";
        var apiMethodType = "post";
        var fetchTask = fetch(apiMethodUrl, {
            method: apiMethodType,
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(user)
        })
            .then(function (response) { return response.json(); })
            .then(function (data) {
            if (data.reason || !data.refresh_token) {
                dispatch({ type: 'LOGIN_VALIDATION_ERROR', errorMessage: data.reason });
            }
            else {
                window.sessionStorage.setItem('userRefreshToken', data.refresh_token);
                window.sessionStorage.setItem('userAccessToken', data.jwt);
                dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_router_redux__["push"])("/ideas"));
                window.location.reload();
            }
        });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_domain_task__["addTask"])(fetchTask);
    }; },
    logOut: function () { return function (dispatch, getState) {
        window.sessionStorage.clear();
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_router_redux__["push"])("/login"));
        window.location.reload();
    }; },
    getCurrentUser: function (willRedirect) { return function (dispatch, getState) {
        var userAccessToken = window.sessionStorage.getItem('userAccessToken');
        if (!userAccessToken) {
            dispatch({ type: 'REQUEST_NO_USER' });
            if (willRedirect === true) {
                dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_router_redux__["push"])("/sign-up"));
                window.location.reload();
            }
        }
        var apiMethodUrl = "https://small-project-api.herokuapp.com/me";
        var apiMethodType = "get";
        var fetchTask = fetch(apiMethodUrl, {
            method: apiMethodType,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'X-Access-Token': userAccessToken
            }
        })
            .then(function (response) { return response.json(); })
            .then(function (data) {
            if (!data.reason && data.email && window.sessionStorage.getItem('userRefreshToken')) {
                var user = {
                    name: data.name,
                    email: data.email,
                    avatarUrl: data.avatar_url
                };
                var refreshToken = window.sessionStorage.getItem('userRefreshToken');
                dispatch({ type: 'REQUEST_USER', user: user, refreshToken: refreshToken });
                if (willRedirect === true) {
                    dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_router_redux__["push"])("/ideas"));
                    window.location.reload();
                }
            }
            else {
                window.sessionStorage.removeItem('userRefreshToken');
                dispatch({ type: 'REQUEST_NO_USER' });
                if (willRedirect === true) {
                    dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_router_redux__["push"])("/sign-up"));
                    window.location.reload();
                }
            }
        });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_domain_task__["addTask"])(fetchTask);
    }; }
};
var emptyUser = { name: '', email: '' };
var unloadedState = { user: emptyUser };
var reducer = function (state, incomingAction) {
    var action = incomingAction;
    switch (action.type) {
        case 'SIGNUP_VALIDATION_ERROR':
            return {
                user: state.user,
                signupValidationErrorMessage: action.errorMessage
            };
        case 'LOGIN_VALIDATION_ERROR':
            return {
                user: state.user,
                loginValidationErrorMessage: action.errorMessage
            };
        case 'REQUEST_NO_USER':
            return {
                user: emptyUser,
                refreshToken: undefined
            };
        case 'REQUEST_USER':
            return {
                user: action.user,
                refreshToken: action.refreshToken
            };
        default:
            var exhaustiveCheck = action;
    }
    return state || unloadedState;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(142);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(141);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_domain_task__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_domain_task___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_domain_task__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var actionCreators = {
    addIdea: function () { return function (dispatch, getState) {
        var ideas = getState().ideas.ideas;
        ideas.unshift(__assign({}, emptyIdea));
        for (var i = 0; i < ideas.length; i++) {
            var idea = ideas[i];
            if (isNaN(parseInt(idea.ideaId))) {
                break;
            }
            idea.ideaId = '' + i;
        }
        dispatch({ type: 'ADD_IDEA' });
    }; },
    editIdea: function (ideaId) { return function (dispatch, getState) {
        var idea = getState().ideas.ideas.find(function (x) { return x.ideaId === ideaId; });
        if (idea) {
            idea.isEditMode = true;
            idea.oldContent = idea.content;
            idea.oldImpact = idea.impact;
            idea.oldEase = idea.ease;
            idea.oldConfidence = idea.confidence;
            idea.oldAverageScore = idea.averageScore;
        }
        dispatch({ type: 'EDIT_IDEA' });
    }; },
    deleteIdea: function (ideaId) { return function (dispatch, getState) {
        var userAccessToken = window.sessionStorage.getItem('userAccessToken');
        if (!userAccessToken) {
            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_router_redux__["push"])("/login"));
            window.location.reload();
        }
        var apiMethodUrl = "https://small-project-api.herokuapp.com/ideas/" + ideaId;
        var apiMethodType = "delete";
        var fetchTask = fetch(apiMethodUrl, {
            method: apiMethodType,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'X-Access-Token': userAccessToken
            }
        })
            .then(function (data) {
            var ideas = getState().ideas.ideas.filter(function (x) { return x.ideaId !== ideaId; });
            dispatch({ type: 'DELETE_IDEA', ideas: ideas });
        });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_domain_task__["addTask"])(fetchTask);
    }; },
    cancelEditIdea: function (ideaId) { return function (dispatch, getState) {
        var ideas = getState().ideas.ideas;
        var idea = ideas.find(function (x) { return x.ideaId === ideaId; });
        if (idea && idea.createdAt) {
            idea.isEditMode = false;
            idea.validationErrorMessage = undefined;
            idea.content = idea.oldContent || '';
            idea.impact = idea.oldImpact || 10;
            idea.ease = idea.oldEase || 10;
            idea.confidence = idea.oldConfidence || 10;
            idea.averageScore = idea.oldAverageScore || 10;
        }
        else {
            ideas = ideas.filter(function (x) { return x.ideaId !== ideaId; });
        }
        dispatch({ type: 'CANCEL_EDIT_IDEA', ideas: ideas });
    }; },
    confirmEditIdea: function (ideaId) { return function (dispatch, getState) {
        var userAccessToken = window.sessionStorage.getItem('userAccessToken');
        if (!userAccessToken) {
            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_router_redux__["push"])("/login"));
            window.location.reload();
        }
        var idea = getState().ideas.ideas.find(function (x) { return x.ideaId === ideaId; });
        if (!idea) {
            dispatch({ type: 'VALIDATION_ERROR' });
        }
        else if (!idea.content || idea.content === '') {
            idea.validationErrorMessage = 'content is required';
            dispatch({ type: 'VALIDATION_ERROR' });
        }
        else {
            var apiMethodUrl = "https://small-project-api.herokuapp.com/ideas";
            var apiMethodType = "post";
            if (idea.createdAt) {
                apiMethodUrl += "/" + ideaId;
                apiMethodType = "put";
            }
            idea.isEditMode = false;
            idea.areActionsVisible = false;
            var fetchTask = fetch(apiMethodUrl, {
                method: apiMethodType,
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'X-Access-Token': userAccessToken
                },
                body: JSON.stringify(idea)
            })
                .then(function (response) { return response.json(); })
                .then(function (data) {
                if (data.reason && idea) {
                    idea.validationErrorMessage = data.reason;
                    idea.isEditMode = true;
                    idea.areActionsVisible = true;
                    dispatch({ type: 'VALIDATION_ERROR' });
                    if (data.reason === 'you can not pass!') {
                        window.sessionStorage.removeItem('userAccessToken');
                        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_router_redux__["push"])("/login"));
                        window.location.reload();
                    }
                }
                else if (data.id && idea) {
                    idea.ideaId = data.id;
                    idea.createdAt = data.created_at;
                    dispatch({ type: 'CONFIRM_EDIT_IDEA' });
                }
                else if (idea) {
                    idea.validationErrorMessage = 'Unknown error';
                    idea.isEditMode = true;
                    idea.areActionsVisible = true;
                    dispatch({ type: 'VALIDATION_ERROR' });
                }
            });
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_domain_task__["addTask"])(fetchTask);
        }
    }; },
    getIdeas: function () { return function (dispatch, getState) {
        dispatch({ type: 'REQUESTING_IDEAS' });
        var userAccessToken = window.sessionStorage.getItem('userAccessToken');
        if (!userAccessToken) {
            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_router_redux__["push"])("/login"));
            window.location.reload();
        }
        var apiMethodUrl = "https://small-project-api.herokuapp.com/ideas";
        var apiMethodType = "get";
        var fetchTask = fetch(apiMethodUrl, {
            method: apiMethodType,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'X-Access-Token': userAccessToken
            }
        })
            .then(function (response) { return response.json(); })
            .then(function (data) {
            if (data.reason) {
                window.sessionStorage.removeItem('userAccessToken');
                dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_router_redux__["push"])("/login"));
                window.location.reload();
            }
            else if (data.length > 0) {
                var ideas = [];
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var i = data_1[_i];
                    var idea = {
                        ideaId: i.id,
                        content: i.content,
                        impact: i.impact,
                        ease: i.ease,
                        confidence: i.confidence,
                        averageScore: Math.round(i.average_score * 10) / 10,
                        createdAt: i.created_at,
                        isEditMode: false,
                        areActionsVisible: false,
                        cancelEditIdeaAction: emptyFunction,
                        confirmEditIdeaAction: emptyFunction,
                        ideaNameChangeAction: emptyFunction,
                        impactScoreChangeAction: emptyFunction,
                        easeScoreChangeAction: emptyFunction,
                        confidenceScoreChangeAction: emptyFunction,
                        mouseOverAction: emptyFunction,
                        mouseLeaveAction: emptyFunction,
                        editIdeaAction: emptyFunction,
                        deleteIdeaAction: emptyFunction
                    };
                    ideas.push(idea);
                }
                dispatch({ type: 'REQUEST_IDEAS', ideas: ideas });
            }
            else {
                dispatch({ type: 'REQUEST_NO_IDEAS' });
            }
        });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_domain_task__["addTask"])(fetchTask);
    }; }
};
var unloadedState = { ideas: [], isLoading: true };
var emptyFunction = function () { };
var emptyIdea = {
    ideaId: '1', content: '', impact: 10, ease: 10, confidence: 10, averageScore: 10, isEditMode: true, areActionsVisible: false,
    cancelEditIdeaAction: emptyFunction, confirmEditIdeaAction: emptyFunction, ideaNameChangeAction: emptyFunction,
    impactScoreChangeAction: emptyFunction, easeScoreChangeAction: emptyFunction, confidenceScoreChangeAction: emptyFunction,
    mouseOverAction: emptyFunction, mouseLeaveAction: emptyFunction, editIdeaAction: emptyFunction, deleteIdeaAction: emptyFunction
};
var reducer = function (state, incomingAction) {
    var action = incomingAction;
    switch (action.type) {
        case 'VALIDATION_ERROR':
            return {
                ideas: state.ideas,
                isLoading: false
            };
        case 'ADD_IDEA':
            return {
                ideas: state.ideas,
                isLoading: false
            };
        case 'EDIT_IDEA':
            return {
                ideas: state.ideas,
                isLoading: false
            };
        case 'DELETE_IDEA':
            return {
                ideas: action.ideas,
                isLoading: false
            };
        case 'CANCEL_EDIT_IDEA':
            return {
                ideas: action.ideas,
                isLoading: false
            };
        case 'CONFIRM_EDIT_IDEA':
            return {
                ideas: state.ideas,
                isLoading: false
            };
        case 'REQUEST_IDEAS':
            return {
                ideas: action.ideas,
                isLoading: false
            };
        case 'REQUEST_NO_IDEAS':
            return {
                ideas: [],
                isLoading: false
            };
        case 'REQUESTING_IDEAS':
            return {
                ideas: state.ideas,
                isLoading: true
            };
        default:
            var exhaustiveCheck = action;
    }
    return state || unloadedState;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(135);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(196);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(25);




function configureStore(history, initialState) {
    // Build middleware. These are functions that can process the actions before they reach the store.
    var windowIfDefined = typeof window === 'undefined' ? null : window;
    // If devTools is installed, connect to it
    var devToolsExtension = windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__;
    var createStoreWithMiddleware = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["compose"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__["routerMiddleware"])(history)), devToolsExtension ? devToolsExtension() : function (next) { return next; })(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"]);
    // Combine all reducers and instantiate the app-wide store instance
    var allReducers = buildRootReducer(__WEBPACK_IMPORTED_MODULE_3__store__["a" /* reducers */]);
    var store = createStoreWithMiddleware(allReducers, initialState);
    // Enable Webpack hot module replacement for reducers
    if (false) {
        module.hot.accept('./store', function () {
            var nextRootReducer = require('./store');
            store.replaceReducer(buildRootReducer(nextRootReducer.reducers));
        });
    }
    return store;
}
function buildRootReducer(allReducers) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])(Object.assign({}, allReducers, { routing: __WEBPACK_IMPORTED_MODULE_2_react_router_redux__["routerReducer"] }));
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Home__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_SignUp__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_IdeasList__ = __webpack_require__(19);







var routes = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */], null,
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: '/', component: __WEBPACK_IMPORTED_MODULE_3__components_Home__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: '/sign-up', component: __WEBPACK_IMPORTED_MODULE_4__components_SignUp__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: '/login', component: __WEBPACK_IMPORTED_MODULE_5__components_Login__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: '/ideas', component: __WEBPACK_IMPORTED_MODULE_6__components_IdeasList__["a" /* default */] }));


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(132);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(137);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(139);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_history__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_history___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_history__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_aspnet_prerendering__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_aspnet_prerendering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_aspnet_prerendering__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__configureStore__ = __webpack_require__(9);









/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_aspnet_prerendering__["createServerRenderer"])(function (params) {
    return new Promise(function (resolve, reject) {
        // Prepare Redux store with in-memory history, and dispatch a navigation event
        // corresponding to the incoming URL
        var basename = params.baseUrl.substring(0, params.baseUrl.length - 1); // Remove trailing slash
        var urlAfterBasename = params.url.substring(basename.length);
        var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__configureStore__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_history__["createMemoryHistory"])());
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_router_redux__["replace"])(urlAfterBasename));
        // Prepare an instance of the application and perform an inital render that will
        // cause any async tasks (e.g., data access) to begin
        var routerContext = {};
        var app = (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_redux__["Provider"], { store: store },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["StaticRouter"], { basename: basename, context: routerContext, location: params.location.path, children: __WEBPACK_IMPORTED_MODULE_7__routes__["a" /* routes */] })));
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToString"])(app);
        // If there's a redirection, just send this information back to the host application
        if (routerContext.url) {
            resolve({ redirectUrl: routerContext.url });
            return;
        }
        // Once any async tasks are done, we can perform the final render
        // We also send the redux store state, so the client can continue execution where the server left off
        params.domainTasks.then(function () {
            resolve({
                html: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToString"])(app),
                globals: { initialReduxState: store.getState() }
            });
        }, reject); // Also propagate any errors back into the host application
    });
}));


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var DeleteModal = (function (_super) {
    __extends(DeleteModal, _super);
    function DeleteModal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeleteModal.prototype.render = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { id: 'delete-idea-modal-' + this.props.ideaId, className: 'modal fade', role: 'dialog' },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'modal-dialog modal-sm modal-dialog-centered', role: 'document' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'modal-content' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'modal-header' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", { className: 'modal-title' }, "Are you sure?")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'modal-body' }, "This idea will be permanently deleted."),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'modal-footer' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'close-modal', "data-dismiss": 'modal' }, "Cancel"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'delete-idea', "data-dismiss": 'modal', onClick: function (e) { return _this.props.deleteAction(e, _this.props.ideaId); } }, "Ok")))));
    };
    return DeleteModal;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (DeleteModal);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var GotIdeas = (function (_super) {
    __extends(GotIdeas, _super);
    function GotIdeas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GotIdeas.prototype.render = function () {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'got-ideas' },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'picture' }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'text' }, "Got Ideas?"));
    };
    return GotIdeas;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (GotIdeas);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_User__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.componentDidMount = function () {
        this.props.getCurrentUser(true);
    };
    Home.prototype.render = function () {
        return __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", null);
    };
    return Home;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(function (state) { return state.user; }, __WEBPACK_IMPORTED_MODULE_1__store_User__["a" /* actionCreators */])(Home));


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ScoreControl__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DeleteModal__ = __webpack_require__(15);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var IdeaItem = (function (_super) {
    __extends(IdeaItem, _super);
    function IdeaItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IdeaItem.prototype.render = function () {
        var _this = this;
        var ideaNameElement = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'idea-name' }, this.props.content);
        var impactScoreElement = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'impact-score' }, this.props.impact);
        var easeScoreElement = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'ease-score' }, this.props.ease);
        var confidenceScoreElement = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'confidence-score' }, this.props.confidence);
        var averageScoreElement = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'score-average' }, this.props.averageScore);
        var firstActionElement = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'edit-idea', onClick: function (e) { return _this.props.editIdeaAction(e, _this.props.ideaId); } });
        var secondActionElement = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'delete-idea', "data-toggle": 'modal', "data-target": '#delete-idea-modal-' + this.props.ideaId, "data-backdrop": 'false', "data-keyboard": 'false' });
        if (this.props.isEditMode) {
            ideaNameElement = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { className: 'form-control', type: 'text', required: true, defaultValue: this.props.content, onChange: function (e) { return _this.props.ideaNameChangeAction(e, _this.props.ideaId); } });
            impactScoreElement = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__ScoreControl__["a" /* default */], { ideaId: this.props.ideaId, scoreValue: this.props.impact, scoreChangeAction: this.props.impactScoreChangeAction });
            easeScoreElement = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__ScoreControl__["a" /* default */], { ideaId: this.props.ideaId, scoreValue: this.props.ease, scoreChangeAction: this.props.easeScoreChangeAction });
            confidenceScoreElement = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__ScoreControl__["a" /* default */], { ideaId: this.props.ideaId, scoreValue: this.props.confidence, scoreChangeAction: this.props.confidenceScoreChangeAction });
            firstActionElement = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'confirm-add', onClick: function (e) { return _this.props.confirmEditIdeaAction(e, _this.props.ideaId); } });
            secondActionElement = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'cancel-add', onClick: function (e) { return _this.props.cancelEditIdeaAction(e, _this.props.ideaId); } });
        }
        var validationErrorElement = null;
        if (this.props.validationErrorMessage) {
            validationErrorElement = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: 'form-validation-errors' }, this.props.validationErrorMessage);
        }
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tr", { className: 'idea', onMouseOver: function (e) { return _this.props.mouseOverAction(e, _this.props.ideaId); }, onMouseLeave: function (e) { return _this.props.mouseLeaveAction(e, _this.props.ideaId); } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'dot' }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__DeleteModal__["a" /* default */], { ideaId: this.props.ideaId, deleteAction: this.props.deleteIdeaAction })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null,
                ideaNameElement,
                validationErrorElement),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, impactScoreElement),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, easeScoreElement),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, confidenceScoreElement),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, averageScoreElement),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", { className: 'actions ' + (this.props.isEditMode ? 'editing' : '') },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: this.props.isEditMode || this.props.areActionsVisible ? 'opaque' : 'transparent' },
                    firstActionElement,
                    secondActionElement)));
    };
    return IdeaItem;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (IdeaItem);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_Ideas__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GotIdeas__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__IdeaItem__ = __webpack_require__(18);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var IdeasList = (function (_super) {
    __extends(IdeasList, _super);
    function IdeasList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IdeasList.prototype.componentDidMount = function () {
        this.onCancelEditIdea = this.onCancelEditIdea.bind(this);
        this.onConfirmEditIdea = this.onConfirmEditIdea.bind(this);
        this.onIdeaNameChange = this.onIdeaNameChange.bind(this);
        this.onImpactScoreChange = this.onImpactScoreChange.bind(this);
        this.onEaseScoreChange = this.onEaseScoreChange.bind(this);
        this.onConfidenceScoreChange = this.onConfidenceScoreChange.bind(this);
        this.onMouseOverIdea = this.onMouseOverIdea.bind(this);
        this.onMouseLeaveIdea = this.onMouseLeaveIdea.bind(this);
        this.onEditIdea = this.onEditIdea.bind(this);
        this.onDeleteIdea = this.onDeleteIdea.bind(this);
        this.props.getIdeas();
    };
    IdeasList.prototype.selectIdeaById = function (ideaId) {
        return this.props.ideas.find(function (x) { return x.ideaId === ideaId; });
    };
    IdeasList.prototype.setAverageScore = function (idea) {
        var averageScore = (idea.impact + idea.ease + idea.confidence) / 3.0;
        idea.averageScore = Math.round(averageScore * 10) / 10;
        this.forceUpdate();
    };
    IdeasList.prototype.onAddIdea = function (e) {
        this.props.addIdea();
        this.forceUpdate();
    };
    IdeasList.prototype.onCancelEditIdea = function (e, ideaId) {
        this.props.cancelEditIdea(ideaId);
        this.forceUpdate();
    };
    IdeasList.prototype.onConfirmEditIdea = function (e, ideaId) {
        this.props.confirmEditIdea(ideaId);
        this.forceUpdate();
    };
    IdeasList.prototype.onIdeaNameChange = function (e, ideaId) {
        var idea = this.selectIdeaById(ideaId);
        if (idea) {
            idea.content = e.target.value;
        }
    };
    IdeasList.prototype.onImpactScoreChange = function (e, ideaId) {
        var idea = this.selectIdeaById(ideaId);
        var scoreValue = parseInt(e.target.value);
        if (idea && !isNaN(scoreValue)) {
            idea.impact = scoreValue;
            this.setAverageScore(idea);
        }
    };
    IdeasList.prototype.onEaseScoreChange = function (e, ideaId) {
        var idea = this.selectIdeaById(ideaId);
        var scoreValue = parseInt(e.target.value);
        if (idea && !isNaN(scoreValue)) {
            idea.ease = scoreValue;
            this.setAverageScore(idea);
        }
    };
    IdeasList.prototype.onConfidenceScoreChange = function (e, ideaId) {
        var idea = this.selectIdeaById(ideaId);
        var scoreValue = parseInt(e.target.value);
        if (idea && !isNaN(scoreValue)) {
            idea.confidence = scoreValue;
            this.setAverageScore(idea);
        }
    };
    IdeasList.prototype.onMouseOverIdea = function (e, ideaId) {
        var idea = this.selectIdeaById(ideaId);
        if (idea) {
            idea.areActionsVisible = true;
            this.forceUpdate();
        }
    };
    IdeasList.prototype.onMouseLeaveIdea = function (e, ideaId) {
        var idea = this.selectIdeaById(ideaId);
        if (idea) {
            idea.areActionsVisible = false;
            this.forceUpdate();
        }
    };
    IdeasList.prototype.onEditIdea = function (e, ideaId) {
        this.props.editIdea(ideaId);
        this.forceUpdate();
    };
    IdeasList.prototype.onDeleteIdea = function (e, ideaId) {
        this.props.deleteIdea(ideaId);
        this.forceUpdate();
    };
    IdeasList.prototype.render = function () {
        var _this = this;
        var myIdeasNav = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'my-ideas-nav' },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", null, "My Ideas"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'add-idea-button', onClick: function (e) { return _this.onAddIdea(e); } }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("hr", null));
        var myIdeasElements = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("table", { className: 'ideas-list', cellSpacing: '3' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("thead", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tr", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, "\u00A0"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, "\u00A0"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, "Impact"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, "Ease"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, "Confidence"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("b", null, "Avg.")),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, "\u00A0"))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tbody", null, this.props.ideas.map(function (idea, index) {
                        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__IdeaItem__["a" /* default */], { key: idea.ideaId, ideaId: idea.ideaId, content: idea.content, impact: idea.impact, ease: idea.ease, confidence: idea.confidence, averageScore: idea.averageScore, isEditMode: idea.isEditMode, validationErrorMessage: idea.validationErrorMessage, areActionsVisible: idea.areActionsVisible, cancelEditIdeaAction: _this.onCancelEditIdea, confirmEditIdeaAction: _this.onConfirmEditIdea, ideaNameChangeAction: _this.onIdeaNameChange, impactScoreChangeAction: _this.onImpactScoreChange, easeScoreChangeAction: _this.onEaseScoreChange, confidenceScoreChangeAction: _this.onConfidenceScoreChange, mouseOverAction: _this.onMouseOverIdea, mouseLeaveAction: _this.onMouseLeaveIdea, editIdeaAction: _this.onEditIdea, deleteIdeaAction: _this.onDeleteIdea });
                    })))));
        if (this.props.isLoading) {
            myIdeasElements = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null);
        }
        else if (this.props.ideas.length <= 0) {
            myIdeasElements = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'flex-center full-height' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__GotIdeas__["a" /* default */], null));
        }
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            myIdeasNav,
            myIdeasElements);
    };
    return IdeasList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(function (state) { return state.ideas; }, __WEBPACK_IMPORTED_MODULE_2__store_Ideas__["a" /* actionCreators */])(IdeasList));


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MainNav__ = __webpack_require__(22);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Layout = (function (_super) {
    __extends(Layout, _super);
    function Layout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Layout.prototype.render = function () {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'container' },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'row' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'col-md-3' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__MainNav__["a" /* default */], null)),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'col-md-9' }, this.props.children)));
    };
    return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Layout);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_User__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Login = (function (_super) {
    __extends(Login, _super);
    function Login() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Login.prototype.onEmailChange = function (e) {
        this.props.user.email = e.target.value;
    };
    Login.prototype.onPasswordChange = function (e) {
        this.props.user.password = e.target.value;
    };
    Login.prototype.onFormSubmit = function (e) {
        e.preventDefault();
        this.props.logIn(this.props.user);
    };
    Login.prototype.render = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'flex-center full-height' },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'registration' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "Log In"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { onSubmit: function (e) { return _this.onFormSubmit(e); } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { className: 'form-control', type: 'text', placeholder: 'Email', defaultValue: this.props.user.email, onChange: function (e) { return _this.onEmailChange(e); } }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { className: 'form-control', type: 'password', placeholder: 'Password', defaultValue: this.props.user.password, onChange: function (e) { return _this.onPasswordChange(e); } }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'row flex-center' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'col-md-4' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { type: 'submit' }, "Log In")),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'col-md-8 text-right' },
                            "Don't have an account? ",
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: '/sign-up' }, "Create an account")))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: 'form-validation-errors' }, this.props.loginValidationErrorMessage)));
    };
    return Login;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (state) { return state.user; }, __WEBPACK_IMPORTED_MODULE_1__store_User__["a" /* actionCreators */])(Login));


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_User__ = __webpack_require__(3);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var MainNav = (function (_super) {
    __extends(MainNav, _super);
    function MainNav() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainNav.prototype.componentDidMount = function () {
        this.props.getCurrentUser();
    };
    MainNav.prototype.onLogout = function (e) {
        this.props.logOut();
    };
    MainNav.prototype.render = function () {
        var _this = this;
        var userData = this.props.refreshToken
            ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("hr", null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { className: 'user-avatar', src: this.props.user.avatarUrl }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'user-name' }, this.props.user.name),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'logout', onClick: function (e) { return _this.onLogout(e); } }, "Log out")) : null;
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'main-nav' },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'logo' }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'app-name' }, "The Idea Pool"),
            userData);
    };
    return MainNav;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
var MainNavContainer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(function (state) { return state.user; }, __WEBPACK_IMPORTED_MODULE_2__store_User__["a" /* actionCreators */])(MainNav);
/* harmony default export */ __webpack_exports__["a"] = (MainNavContainer);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ScoreControl = (function (_super) {
    __extends(ScoreControl, _super);
    function ScoreControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScoreControl.prototype.render = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("select", { className: 'form-control', defaultValue: this.props.scoreValue.toString(), onChange: function (e) { return _this.props.scoreChangeAction(e, _this.props.ideaId); } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", null, "1"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", null, "2"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", null, "3"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", null, "4"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", null, "5"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", null, "6"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", null, "7"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", null, "8"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", null, "9"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", null, "10"));
    };
    return ScoreControl;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (ScoreControl);


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_User__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SignUp = (function (_super) {
    __extends(SignUp, _super);
    function SignUp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SignUp.prototype.onNameChange = function (e) {
        this.props.user.name = e.target.value;
    };
    SignUp.prototype.onEmailChange = function (e) {
        this.props.user.email = e.target.value;
    };
    SignUp.prototype.onPasswordChange = function (e) {
        this.props.user.password = e.target.value;
    };
    SignUp.prototype.onFormSubmit = function (e) {
        e.preventDefault();
        this.props.signUp(this.props.user);
    };
    SignUp.prototype.render = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'flex-center full-height' },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'registration' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "Sign Up"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { onSubmit: function (e) { return _this.onFormSubmit(e); } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { name: 'name', className: 'form-control', type: 'text', placeholder: 'Name', defaultValue: this.props.user.name, onChange: function (e) { return _this.onNameChange(e); } }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { name: 'email', className: 'form-control', type: 'text', placeholder: 'Email', defaultValue: this.props.user.email, onChange: function (e) { return _this.onEmailChange(e); } }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { name: 'password', className: 'form-control', type: 'password', placeholder: 'Password', defaultValue: this.props.user.password, onChange: function (e) { return _this.onPasswordChange(e); } }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'row flex-center' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'col-md-4' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { type: 'submit' }, "Sign Up")),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'col-md-8 text-right' },
                            "Already have an account? ",
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: '/login' }, "Log in")))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: 'form-validation-errors' }, this.props.signupValidationErrorMessage)));
    };
    return SignUp;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (state) { return state.user; }, __WEBPACK_IMPORTED_MODULE_1__store_User__["a" /* actionCreators */])(SignUp));


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__User__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Ideas__ = __webpack_require__(6);


// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
var reducers = {
    user: __WEBPACK_IMPORTED_MODULE_0__User__["b" /* reducer */],
    ideas: __WEBPACK_IMPORTED_MODULE_1__Ideas__["b" /* reducer */]
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(143);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(70);

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWY5M2QyY2EyOTQ0NGQ5MjkzMzkiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC9yZWFjdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiLi92ZW5kb3JcIiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL1VzZXIudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItcmVkdXgvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL0lkZWFzLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvZG9tYWluLXRhc2svaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1mZXRjaC9mZXRjaC1ucG0tbm9kZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbmZpZ3VyZVN0b3JlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9yb3V0ZXMudHN4Iiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYXNwbmV0LXByZXJlbmRlcmluZy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9oaXN0b3J5L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9zZXJ2ZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9ib290LXNlcnZlci50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvRGVsZXRlTW9kYWwudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0dvdElkZWFzLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9Ib21lLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9JZGVhSXRlbS50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvSWRlYXNMaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9MYXlvdXQudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0xvZ2luLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9NYWluTmF2LnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9TY29yZUNvbnRyb2wudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL1NpZ25VcC50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL2luZGV4LnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRs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ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMWY5M2QyY2EyOTQ0NGQ5MjkzMzkiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSg2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QvcmVhY3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vdmVuZG9yXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiLi92ZW5kb3JcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxNDApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGFkZFRhc2sgfSBmcm9tIFwiZG9tYWluLXRhc2tcIjtcclxuaW1wb3J0IHsgUm91dGVyQWN0aW9uLCBwdXNoLCByb3V0ZXJBY3Rpb25zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1yZWR1eFwiO1xyXG5pbXBvcnQgeyBBcHBUaHVua0FjdGlvbiB9IGZyb20gXCJDbGllbnRBcHAvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9uLCBSZWR1Y2VyIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCBcImlzb21vcnBoaWMtZmV0Y2hcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNlciB7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdGVtYWlsOiBzdHJpbmc7XHJcblx0cGFzc3dvcmQ/OiBzdHJpbmc7XHJcblx0YXZhdGFyVXJsPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJTdGF0ZSB7XHJcblx0dXNlcjogVXNlcjtcclxuXHRyZWZyZXNoVG9rZW4/OiBzdHJpbmc7XHJcblx0c2lnbnVwVmFsaWRhdGlvbkVycm9yTWVzc2FnZT86IHN0cmluZztcclxuXHRsb2dpblZhbGlkYXRpb25FcnJvck1lc3NhZ2U/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTaWdudXBWYWxpZGF0aW9uRXJyb3JBY3Rpb24ge1xyXG5cdHR5cGU6ICdTSUdOVVBfVkFMSURBVElPTl9FUlJPUic7XHJcblx0ZXJyb3JNZXNzYWdlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBMb2dpblZhbGlkYXRpb25FcnJvckFjdGlvbiB7XHJcblx0dHlwZTogJ0xPR0lOX1ZBTElEQVRJT05fRVJST1InO1xyXG5cdGVycm9yTWVzc2FnZTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUmVxdWVzdE5vVXNlckFjdGlvbiB7XHJcblx0dHlwZTogJ1JFUVVFU1RfTk9fVVNFUic7XHJcbn1cclxuXHJcbmludGVyZmFjZSBSZXF1ZXN0VXNlckFjdGlvbiB7XHJcblx0dHlwZTogJ1JFUVVFU1RfVVNFUic7XHJcblx0dXNlcjogVXNlcjtcclxuXHRyZWZyZXNoVG9rZW46IHN0cmluZztcclxufVxyXG5cclxudHlwZSBLbm93bkFjdGlvbiA9IFNpZ251cFZhbGlkYXRpb25FcnJvckFjdGlvbiB8IExvZ2luVmFsaWRhdGlvbkVycm9yQWN0aW9uIHwgUmVxdWVzdE5vVXNlckFjdGlvbiB8IFJlcXVlc3RVc2VyQWN0aW9uO1xyXG50eXBlIEltcG9ydGVkQWN0aW9uID0gUm91dGVyQWN0aW9uO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbkNyZWF0b3JzID0ge1xyXG5cdHNpZ25VcDogKHVzZXI6IFVzZXIpOiBBcHBUaHVua0FjdGlvbjxhbnk+ID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuXHRcdHZhciBhcGlNZXRob2RVcmwgPSBgaHR0cHM6Ly9zbWFsbC1wcm9qZWN0LWFwaS5oZXJva3VhcHAuY29tL3VzZXJzYDtcclxuXHRcdHZhciBhcGlNZXRob2RUeXBlID0gYHBvc3RgO1xyXG5cdFx0bGV0IGZldGNoVGFzayA9IGZldGNoKGFwaU1ldGhvZFVybCwge1xyXG5cdFx0XHRtZXRob2Q6IGFwaU1ldGhvZFR5cGUsXHJcblx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnXHJcblx0XHRcdH0sXHJcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpXHJcblx0XHR9KVxyXG5cdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpIGFzIFByb21pc2U8YW55PilcclxuXHRcdC50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5yZWFzb24gfHwgIWRhdGEucmVmcmVzaF90b2tlbikge1xyXG5cdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ1NJR05VUF9WQUxJREFUSU9OX0VSUk9SJywgZXJyb3JNZXNzYWdlOiBkYXRhLnJlYXNvbiB9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHR3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndXNlclJlZnJlc2hUb2tlbicsIGRhdGEucmVmcmVzaF90b2tlbik7XHJcblx0XHRcdFx0d2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3VzZXJBY2Nlc3NUb2tlbicsIGRhdGEuand0KTtcclxuXHRcdFx0XHRkaXNwYXRjaChwdXNoKGAvaWRlYXNgKSk7XHJcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRhZGRUYXNrKGZldGNoVGFzayk7XHJcblx0fSxcclxuXHRsb2dJbjogKHVzZXI6IFVzZXIpOiBBcHBUaHVua0FjdGlvbjxhbnk+ID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuXHRcdHZhciBhcGlNZXRob2RVcmwgPSBgaHR0cHM6Ly9zbWFsbC1wcm9qZWN0LWFwaS5oZXJva3VhcHAuY29tL2FjY2Vzcy10b2tlbnNgO1xyXG5cdFx0dmFyIGFwaU1ldGhvZFR5cGUgPSBgcG9zdGA7XHJcblx0XHRsZXQgZmV0Y2hUYXNrID0gZmV0Y2goYXBpTWV0aG9kVXJsLCB7XHJcblx0XHRcdG1ldGhvZDogYXBpTWV0aG9kVHlwZSxcclxuXHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCdcclxuXHRcdFx0fSxcclxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkodXNlcilcclxuXHRcdH0pXHJcblx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkgYXMgUHJvbWlzZTxhbnk+KVxyXG5cdFx0LnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdGlmIChkYXRhLnJlYXNvbiB8fCAhZGF0YS5yZWZyZXNoX3Rva2VuKSB7XHJcblx0XHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnTE9HSU5fVkFMSURBVElPTl9FUlJPUicsIGVycm9yTWVzc2FnZTogZGF0YS5yZWFzb24gfSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0d2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3VzZXJSZWZyZXNoVG9rZW4nLCBkYXRhLnJlZnJlc2hfdG9rZW4pO1xyXG5cdFx0XHRcdHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd1c2VyQWNjZXNzVG9rZW4nLCBkYXRhLmp3dCk7XHJcblx0XHRcdFx0ZGlzcGF0Y2gocHVzaChgL2lkZWFzYCkpO1xyXG5cdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0YWRkVGFzayhmZXRjaFRhc2spO1xyXG5cdH0sXHJcblx0bG9nT3V0OiAoKTogQXBwVGh1bmtBY3Rpb248YW55PiA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcblx0XHR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuY2xlYXIoKTtcclxuXHRcdGRpc3BhdGNoKHB1c2goYC9sb2dpbmApKTtcclxuXHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuXHR9LFxyXG5cdGdldEN1cnJlbnRVc2VyOiAod2lsbFJlZGlyZWN0PzogYm9vbGVhbik6IEFwcFRodW5rQWN0aW9uPGFueT4gPT4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG5cdFx0dmFyIHVzZXJBY2Nlc3NUb2tlbiA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyQWNjZXNzVG9rZW4nKTtcclxuXHRcdGlmICghdXNlckFjY2Vzc1Rva2VuKSB7XHJcblx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ1JFUVVFU1RfTk9fVVNFUicgfSk7XHJcblxyXG5cdFx0XHRpZiAod2lsbFJlZGlyZWN0ID09PSB0cnVlKSB7XHJcblx0XHRcdFx0ZGlzcGF0Y2gocHVzaChgL3NpZ24tdXBgKSk7XHJcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGFwaU1ldGhvZFVybCA9IGBodHRwczovL3NtYWxsLXByb2plY3QtYXBpLmhlcm9rdWFwcC5jb20vbWVgO1xyXG5cdFx0dmFyIGFwaU1ldGhvZFR5cGUgPSBgZ2V0YDsgXHJcblx0XHRsZXQgZmV0Y2hUYXNrID0gZmV0Y2goYXBpTWV0aG9kVXJsLCB7XHJcblx0XHRcdG1ldGhvZDogYXBpTWV0aG9kVHlwZSxcclxuXHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXHJcblx0XHRcdFx0J1gtQWNjZXNzLVRva2VuJzogdXNlckFjY2Vzc1Rva2VuIGFzIHN0cmluZ1xyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpIGFzIFByb21pc2U8YW55PilcclxuXHRcdC50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHRpZiAoIWRhdGEucmVhc29uICYmIGRhdGEuZW1haWwgJiYgd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJSZWZyZXNoVG9rZW4nKSkge1xyXG5cdFx0XHRcdHZhciB1c2VyOiBVc2VyID0ge1xyXG5cdFx0XHRcdFx0bmFtZTogZGF0YS5uYW1lLFxyXG5cdFx0XHRcdFx0ZW1haWw6IGRhdGEuZW1haWwsXHJcblx0XHRcdFx0XHRhdmF0YXJVcmw6IGRhdGEuYXZhdGFyX3VybFxyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdHZhciByZWZyZXNoVG9rZW4gPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlclJlZnJlc2hUb2tlbicpIGFzIHN0cmluZztcclxuXHRcdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdSRVFVRVNUX1VTRVInLCB1c2VyOiB1c2VyLCByZWZyZXNoVG9rZW46IHJlZnJlc2hUb2tlbiB9KTtcclxuXHJcblx0XHRcdFx0aWYgKHdpbGxSZWRpcmVjdCA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRcdFx0ZGlzcGF0Y2gocHVzaChgL2lkZWFzYCkpO1xyXG5cdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlclJlZnJlc2hUb2tlbicpO1xyXG5cdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ1JFUVVFU1RfTk9fVVNFUicgfSk7XHJcblxyXG5cdFx0XHRcdGlmICh3aWxsUmVkaXJlY3QgPT09IHRydWUpIHtcclxuXHRcdFx0XHRcdGRpc3BhdGNoKHB1c2goYC9zaWduLXVwYCkpO1xyXG5cdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0YWRkVGFzayhmZXRjaFRhc2spO1xyXG5cdH1cclxufTtcclxuXHJcbmNvbnN0IGVtcHR5VXNlcjogVXNlciA9IHsgbmFtZTogJycsIGVtYWlsOiAnJyB9XHJcbmNvbnN0IHVubG9hZGVkU3RhdGU6IFVzZXJTdGF0ZSA9IHsgdXNlcjogZW1wdHlVc2VyIH07XHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlcjogUmVkdWNlcjxVc2VyU3RhdGU+ID0gKHN0YXRlOiBVc2VyU3RhdGUsIGluY29taW5nQWN0aW9uOiBBY3Rpb24pID0+IHtcclxuXHRjb25zdCBhY3Rpb24gPSBpbmNvbWluZ0FjdGlvbiBhcyBLbm93bkFjdGlvbjtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlICdTSUdOVVBfVkFMSURBVElPTl9FUlJPUic6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0dXNlcjogc3RhdGUudXNlcixcclxuXHRcdFx0XHRzaWdudXBWYWxpZGF0aW9uRXJyb3JNZXNzYWdlOiBhY3Rpb24uZXJyb3JNZXNzYWdlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlICdMT0dJTl9WQUxJREFUSU9OX0VSUk9SJzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHR1c2VyOiBzdGF0ZS51c2VyLFxyXG5cdFx0XHRcdGxvZ2luVmFsaWRhdGlvbkVycm9yTWVzc2FnZTogYWN0aW9uLmVycm9yTWVzc2FnZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSAnUkVRVUVTVF9OT19VU0VSJzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHR1c2VyOiBlbXB0eVVzZXIsXHJcblx0XHRcdFx0cmVmcmVzaFRva2VuOiB1bmRlZmluZWRcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgJ1JFUVVFU1RfVVNFUic6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0dXNlcjogYWN0aW9uLnVzZXIsXHJcblx0XHRcdFx0cmVmcmVzaFRva2VuOiBhY3Rpb24ucmVmcmVzaFRva2VuXHJcblx0XHRcdH07XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRjb25zdCBleGhhdXN0aXZlQ2hlY2s6IG5ldmVyID0gYWN0aW9uO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHN0YXRlIHx8IHVubG9hZGVkU3RhdGU7XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3N0b3JlL1VzZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxNDIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItcmVkdXgvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDE0MSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFJvdXRlckFjdGlvbiwgcHVzaCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItcmVkdXhcIjtcclxuaW1wb3J0IHsgQXBwVGh1bmtBY3Rpb24gfSBmcm9tIFwiQ2xpZW50QXBwL3N0b3JlXCI7XHJcbmltcG9ydCB7IFJlZHVjZXIsIEFjdGlvbiB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBhZGRUYXNrIH0gZnJvbSBcImRvbWFpbi10YXNrXCI7XHJcbmltcG9ydCBcImlzb21vcnBoaWMtZmV0Y2hcIjtcclxuaW1wb3J0IHsgSWRlYSB9IGZyb20gXCIuL0lkZWFcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSWRlYXNTdGF0ZSB7XHJcblx0aWRlYXM6IElkZWFbXTtcclxuXHRpc0xvYWRpbmc6IGJvb2xlYW47XHJcbn1cclxuXHJcbmludGVyZmFjZSBWYWxpZGF0aW9uRXJyb3JBY3Rpb24ge1xyXG5cdHR5cGU6ICdWQUxJREFUSU9OX0VSUk9SJztcclxufVxyXG5cclxuaW50ZXJmYWNlIEFkZElkZWFBY3Rpb24ge1xyXG5cdHR5cGU6ICdBRERfSURFQSc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBFZGl0SWRlYUFjdGlvbiB7XHJcblx0dHlwZTogJ0VESVRfSURFQSc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBEZWxldGVJZGVhQWN0aW9uIHtcclxuXHR0eXBlOiAnREVMRVRFX0lERUEnO1xyXG5cdGlkZWFzOiBJZGVhW107XHJcbn1cclxuXHJcbmludGVyZmFjZSBDYW5jZWxFZGl0SWRlYUFjdGlvbiB7XHJcblx0dHlwZTogJ0NBTkNFTF9FRElUX0lERUEnO1xyXG5cdGlkZWFzOiBJZGVhW107XHJcbn1cclxuXHJcbmludGVyZmFjZSBDb25maXJtRWRpdElkZWFBY3Rpb24ge1xyXG5cdHR5cGU6ICdDT05GSVJNX0VESVRfSURFQSc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBSZXF1ZXN0SWRlYXNBY3Rpb24ge1xyXG5cdHR5cGU6ICdSRVFVRVNUX0lERUFTJztcclxuXHRpZGVhczogSWRlYVtdO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUmVxdWVzdE5vSWRlYXNBY3Rpb24ge1xyXG5cdHR5cGU6ICdSRVFVRVNUX05PX0lERUFTJztcclxufVxyXG5cclxuaW50ZXJmYWNlIFJlcXVlc3RpbmdJZGVhc0FjdGlvbiB7XHJcblx0dHlwZTogJ1JFUVVFU1RJTkdfSURFQVMnO1xyXG59XHJcblxyXG50eXBlIEtub3duQWN0aW9uID0gVmFsaWRhdGlvbkVycm9yQWN0aW9uIHwgQWRkSWRlYUFjdGlvbiB8IEVkaXRJZGVhQWN0aW9uIHwgRGVsZXRlSWRlYUFjdGlvbiB8IENhbmNlbEVkaXRJZGVhQWN0aW9uIHwgQ29uZmlybUVkaXRJZGVhQWN0aW9uIHwgUmVxdWVzdElkZWFzQWN0aW9uIHwgUmVxdWVzdE5vSWRlYXNBY3Rpb24gfCBSZXF1ZXN0aW5nSWRlYXNBY3Rpb247XHJcbnR5cGUgSW1wb3J0ZWRBY3Rpb24gPSBSb3V0ZXJBY3Rpb247XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcblx0YWRkSWRlYTogKCk6IEFwcFRodW5rQWN0aW9uPEtub3duQWN0aW9uPiA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcblx0XHR2YXIgaWRlYXMgPSBnZXRTdGF0ZSgpLmlkZWFzLmlkZWFzO1xyXG5cdFx0aWRlYXMudW5zaGlmdCh7IC4uLmVtcHR5SWRlYSB9KTtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaWRlYXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkZWEgPSBpZGVhc1tpXTtcclxuXHRcdFx0aWYgKGlzTmFOKHBhcnNlSW50KGlkZWEuaWRlYUlkKSkpIHtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWRlYS5pZGVhSWQgPSAnJyArIGk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiAnQUREX0lERUEnIH0pO1xyXG5cdH0sXHJcblx0ZWRpdElkZWE6IChpZGVhSWQ6IHN0cmluZyk6IEFwcFRodW5rQWN0aW9uPEtub3duQWN0aW9uPiA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcblx0XHR2YXIgaWRlYSA9IGdldFN0YXRlKCkuaWRlYXMuaWRlYXMuZmluZCh4ID0+IHguaWRlYUlkID09PSBpZGVhSWQpO1xyXG5cdFx0aWYgKGlkZWEpIHtcclxuXHRcdFx0aWRlYS5pc0VkaXRNb2RlID0gdHJ1ZTtcclxuXHRcdFx0aWRlYS5vbGRDb250ZW50ID0gaWRlYS5jb250ZW50O1xyXG5cdFx0XHRpZGVhLm9sZEltcGFjdCA9IGlkZWEuaW1wYWN0O1xyXG5cdFx0XHRpZGVhLm9sZEVhc2UgPSBpZGVhLmVhc2U7XHJcblx0XHRcdGlkZWEub2xkQ29uZmlkZW5jZSA9IGlkZWEuY29uZmlkZW5jZTtcclxuXHRcdFx0aWRlYS5vbGRBdmVyYWdlU2NvcmUgPSBpZGVhLmF2ZXJhZ2VTY29yZTtcclxuXHRcdH1cclxuXHJcblx0XHRkaXNwYXRjaCh7IHR5cGU6ICdFRElUX0lERUEnIH0pO1xyXG5cdH0sXHJcblx0ZGVsZXRlSWRlYTogKGlkZWFJZDogc3RyaW5nKTogQXBwVGh1bmtBY3Rpb248YW55PiA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcblx0XHR2YXIgdXNlckFjY2Vzc1Rva2VuID0gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJBY2Nlc3NUb2tlbicpO1xyXG5cdFx0aWYgKCF1c2VyQWNjZXNzVG9rZW4pIHtcclxuXHRcdFx0ZGlzcGF0Y2gocHVzaChgL2xvZ2luYCkpO1xyXG5cdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGFwaU1ldGhvZFVybCA9IGBodHRwczovL3NtYWxsLXByb2plY3QtYXBpLmhlcm9rdWFwcC5jb20vaWRlYXMvJHtpZGVhSWR9YDtcclxuXHRcdHZhciBhcGlNZXRob2RUeXBlID0gYGRlbGV0ZWA7XHJcblx0XHRsZXQgZmV0Y2hUYXNrID0gZmV0Y2goYXBpTWV0aG9kVXJsLCB7XHJcblx0XHRcdG1ldGhvZDogYXBpTWV0aG9kVHlwZSxcclxuXHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXHJcblx0XHRcdFx0J1gtQWNjZXNzLVRva2VuJzogdXNlckFjY2Vzc1Rva2VuIGFzIHN0cmluZ1xyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdFx0LnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdHZhciBpZGVhcyA9IGdldFN0YXRlKCkuaWRlYXMuaWRlYXMuZmlsdGVyKHggPT4geC5pZGVhSWQgIT09IGlkZWFJZCk7XHJcblx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ0RFTEVURV9JREVBJywgaWRlYXM6IGlkZWFzIH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0YWRkVGFzayhmZXRjaFRhc2spO1xyXG5cdH0sXHJcblx0Y2FuY2VsRWRpdElkZWE6IChpZGVhSWQ6IHN0cmluZyk6IEFwcFRodW5rQWN0aW9uPEtub3duQWN0aW9uPiA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcblx0XHR2YXIgaWRlYXMgPSBnZXRTdGF0ZSgpLmlkZWFzLmlkZWFzO1xyXG5cdFx0dmFyIGlkZWEgPSBpZGVhcy5maW5kKHggPT4geC5pZGVhSWQgPT09IGlkZWFJZCk7XHJcblx0XHRpZiAoaWRlYSAmJiBpZGVhLmNyZWF0ZWRBdCkge1xyXG5cdFx0XHRpZGVhLmlzRWRpdE1vZGUgPSBmYWxzZTtcclxuXHRcdFx0aWRlYS52YWxpZGF0aW9uRXJyb3JNZXNzYWdlID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRpZGVhLmNvbnRlbnQgPSBpZGVhLm9sZENvbnRlbnQgfHwgJyc7XHJcblx0XHRcdGlkZWEuaW1wYWN0ID0gaWRlYS5vbGRJbXBhY3QgfHwgMTA7XHJcblx0XHRcdGlkZWEuZWFzZSA9IGlkZWEub2xkRWFzZSB8fCAxMDtcclxuXHRcdFx0aWRlYS5jb25maWRlbmNlID0gaWRlYS5vbGRDb25maWRlbmNlIHx8IDEwO1xyXG5cdFx0XHRpZGVhLmF2ZXJhZ2VTY29yZSA9IGlkZWEub2xkQXZlcmFnZVNjb3JlIHx8IDEwO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGlkZWFzID0gaWRlYXMuZmlsdGVyKHggPT4geC5pZGVhSWQgIT09IGlkZWFJZCk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiAnQ0FOQ0VMX0VESVRfSURFQScsIGlkZWFzOiBpZGVhcyB9KTtcclxuXHR9LFxyXG5cdGNvbmZpcm1FZGl0SWRlYTogKGlkZWFJZDogc3RyaW5nKTogQXBwVGh1bmtBY3Rpb248YW55PiA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcblx0XHR2YXIgdXNlckFjY2Vzc1Rva2VuID0gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJBY2Nlc3NUb2tlbicpO1xyXG5cdFx0aWYgKCF1c2VyQWNjZXNzVG9rZW4pIHtcclxuXHRcdFx0ZGlzcGF0Y2gocHVzaChgL2xvZ2luYCkpO1xyXG5cdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGlkZWEgPSBnZXRTdGF0ZSgpLmlkZWFzLmlkZWFzLmZpbmQoeCA9PiB4LmlkZWFJZCA9PT0gaWRlYUlkKTtcclxuXHRcdGlmICghaWRlYSkge1xyXG5cdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdWQUxJREFUSU9OX0VSUk9SJyB9KTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKCFpZGVhLmNvbnRlbnQgfHwgaWRlYS5jb250ZW50ID09PSAnJykge1xyXG5cdFx0XHRpZGVhLnZhbGlkYXRpb25FcnJvck1lc3NhZ2UgPSAnY29udGVudCBpcyByZXF1aXJlZCc7XHJcblx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ1ZBTElEQVRJT05fRVJST1InIH0pO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHZhciBhcGlNZXRob2RVcmwgPSBgaHR0cHM6Ly9zbWFsbC1wcm9qZWN0LWFwaS5oZXJva3VhcHAuY29tL2lkZWFzYDtcclxuXHRcdFx0dmFyIGFwaU1ldGhvZFR5cGUgPSBgcG9zdGA7XHJcblx0XHRcdGlmIChpZGVhLmNyZWF0ZWRBdCkge1xyXG5cdFx0XHRcdGFwaU1ldGhvZFVybCArPSBgLyR7aWRlYUlkfWA7XHJcblx0XHRcdFx0YXBpTWV0aG9kVHlwZSA9IGBwdXRgO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZGVhLmlzRWRpdE1vZGUgPSBmYWxzZTtcclxuXHRcdFx0aWRlYS5hcmVBY3Rpb25zVmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0bGV0IGZldGNoVGFzayA9IGZldGNoKGFwaU1ldGhvZFVybCwge1xyXG5cdFx0XHRcdG1ldGhvZDogYXBpTWV0aG9kVHlwZSxcclxuXHRcdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLFxyXG5cdFx0XHRcdFx0J1gtQWNjZXNzLVRva2VuJzogdXNlckFjY2Vzc1Rva2VuIGFzIHN0cmluZ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoaWRlYSlcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpIGFzIFByb21pc2U8YW55PilcclxuXHRcdFx0LnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdFx0aWYgKGRhdGEucmVhc29uICYmIGlkZWEpIHtcclxuXHRcdFx0XHRcdGlkZWEudmFsaWRhdGlvbkVycm9yTWVzc2FnZSA9IGRhdGEucmVhc29uO1xyXG5cdFx0XHRcdFx0aWRlYS5pc0VkaXRNb2RlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGlkZWEuYXJlQWN0aW9uc1Zpc2libGUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnVkFMSURBVElPTl9FUlJPUicgfSk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGRhdGEucmVhc29uID09PSAneW91IGNhbiBub3QgcGFzcyEnKSB7XHJcblx0XHRcdFx0XHRcdHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyQWNjZXNzVG9rZW4nKTtcclxuXHRcdFx0XHRcdFx0ZGlzcGF0Y2gocHVzaChgL2xvZ2luYCkpO1xyXG5cdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKGRhdGEuaWQgJiYgaWRlYSkge1xyXG5cdFx0XHRcdFx0aWRlYS5pZGVhSWQgPSBkYXRhLmlkO1xyXG5cdFx0XHRcdFx0aWRlYS5jcmVhdGVkQXQgPSBkYXRhLmNyZWF0ZWRfYXQ7XHJcblx0XHRcdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdDT05GSVJNX0VESVRfSURFQScgfSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKGlkZWEpIHtcclxuXHRcdFx0XHRcdGlkZWEudmFsaWRhdGlvbkVycm9yTWVzc2FnZSA9ICdVbmtub3duIGVycm9yJztcclxuXHRcdFx0XHRcdGlkZWEuaXNFZGl0TW9kZSA9IHRydWU7XHJcblx0XHRcdFx0XHRpZGVhLmFyZUFjdGlvbnNWaXNpYmxlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ1ZBTElEQVRJT05fRVJST1InIH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdGFkZFRhc2soZmV0Y2hUYXNrKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdGdldElkZWFzOiAoKTogQXBwVGh1bmtBY3Rpb248YW55PiA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcblx0XHRkaXNwYXRjaCh7IHR5cGU6ICdSRVFVRVNUSU5HX0lERUFTJyB9KTtcclxuXHJcblx0XHR2YXIgdXNlckFjY2Vzc1Rva2VuID0gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJBY2Nlc3NUb2tlbicpO1xyXG5cdFx0aWYgKCF1c2VyQWNjZXNzVG9rZW4pIHtcclxuXHRcdFx0ZGlzcGF0Y2gocHVzaChgL2xvZ2luYCkpO1xyXG5cdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGFwaU1ldGhvZFVybCA9IGBodHRwczovL3NtYWxsLXByb2plY3QtYXBpLmhlcm9rdWFwcC5jb20vaWRlYXNgO1xyXG5cdFx0dmFyIGFwaU1ldGhvZFR5cGUgPSBgZ2V0YDtcclxuXHRcdGxldCBmZXRjaFRhc2sgPSBmZXRjaChhcGlNZXRob2RVcmwsIHtcclxuXHRcdFx0bWV0aG9kOiBhcGlNZXRob2RUeXBlLFxyXG5cdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04JyxcclxuXHRcdFx0XHQnWC1BY2Nlc3MtVG9rZW4nOiB1c2VyQWNjZXNzVG9rZW4gYXMgc3RyaW5nXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkgYXMgUHJvbWlzZTxhbnk+KVxyXG5cdFx0LnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdGlmIChkYXRhLnJlYXNvbikge1xyXG5cdFx0XHRcdHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyQWNjZXNzVG9rZW4nKTtcclxuXHRcdFx0XHRkaXNwYXRjaChwdXNoKGAvbG9naW5gKSk7XHJcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdHZhciBpZGVhczogSWRlYVtdID0gW107XHJcblx0XHRcdFx0Zm9yIChsZXQgaSBvZiBkYXRhKSB7XHJcblx0XHRcdFx0XHR2YXIgaWRlYTogSWRlYSA9IHtcclxuXHRcdFx0XHRcdFx0aWRlYUlkOiBpLmlkLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OiBpLmNvbnRlbnQsXHJcblx0XHRcdFx0XHRcdGltcGFjdDogaS5pbXBhY3QsXHJcblx0XHRcdFx0XHRcdGVhc2U6IGkuZWFzZSxcclxuXHRcdFx0XHRcdFx0Y29uZmlkZW5jZTogaS5jb25maWRlbmNlLFxyXG5cdFx0XHRcdFx0XHRhdmVyYWdlU2NvcmU6IE1hdGgucm91bmQoaS5hdmVyYWdlX3Njb3JlICogMTApIC8gMTAsXHJcblx0XHRcdFx0XHRcdGNyZWF0ZWRBdDogaS5jcmVhdGVkX2F0LFxyXG5cdFx0XHRcdFx0XHRpc0VkaXRNb2RlOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0YXJlQWN0aW9uc1Zpc2libGU6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRjYW5jZWxFZGl0SWRlYUFjdGlvbjogZW1wdHlGdW5jdGlvbixcclxuXHRcdFx0XHRcdFx0Y29uZmlybUVkaXRJZGVhQWN0aW9uOiBlbXB0eUZ1bmN0aW9uLFxyXG5cdFx0XHRcdFx0XHRpZGVhTmFtZUNoYW5nZUFjdGlvbjogZW1wdHlGdW5jdGlvbixcclxuXHRcdFx0XHRcdFx0aW1wYWN0U2NvcmVDaGFuZ2VBY3Rpb246IGVtcHR5RnVuY3Rpb24sXHJcblx0XHRcdFx0XHRcdGVhc2VTY29yZUNoYW5nZUFjdGlvbjogZW1wdHlGdW5jdGlvbixcclxuXHRcdFx0XHRcdFx0Y29uZmlkZW5jZVNjb3JlQ2hhbmdlQWN0aW9uOiBlbXB0eUZ1bmN0aW9uLFxyXG5cdFx0XHRcdFx0XHRtb3VzZU92ZXJBY3Rpb246IGVtcHR5RnVuY3Rpb24sXHJcblx0XHRcdFx0XHRcdG1vdXNlTGVhdmVBY3Rpb246IGVtcHR5RnVuY3Rpb24sXHJcblx0XHRcdFx0XHRcdGVkaXRJZGVhQWN0aW9uOiBlbXB0eUZ1bmN0aW9uLFxyXG5cdFx0XHRcdFx0XHRkZWxldGVJZGVhQWN0aW9uOiBlbXB0eUZ1bmN0aW9uXHJcblx0XHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRcdGlkZWFzLnB1c2goaWRlYSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ1JFUVVFU1RfSURFQVMnLCBpZGVhczogaWRlYXMgfSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnUkVRVUVTVF9OT19JREVBUycgfSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdGFkZFRhc2soZmV0Y2hUYXNrKTtcclxuXHR9XHJcbn07XHJcblxyXG5jb25zdCB1bmxvYWRlZFN0YXRlOiBJZGVhc1N0YXRlID0geyBpZGVhczogW10sIGlzTG9hZGluZzogdHJ1ZSB9O1xyXG5jb25zdCBlbXB0eUZ1bmN0aW9uOiBGdW5jdGlvbiA9IGZ1bmN0aW9uICgpIHsgfTtcclxuY29uc3QgZW1wdHlJZGVhOiBJZGVhID0ge1xyXG5cdGlkZWFJZDogJzEnLCBjb250ZW50OiAnJywgaW1wYWN0OiAxMCwgZWFzZTogMTAsIGNvbmZpZGVuY2U6IDEwLCBhdmVyYWdlU2NvcmU6IDEwLCBpc0VkaXRNb2RlOiB0cnVlLCBhcmVBY3Rpb25zVmlzaWJsZTogZmFsc2UsXHJcblx0Y2FuY2VsRWRpdElkZWFBY3Rpb246IGVtcHR5RnVuY3Rpb24sIGNvbmZpcm1FZGl0SWRlYUFjdGlvbjogZW1wdHlGdW5jdGlvbiwgaWRlYU5hbWVDaGFuZ2VBY3Rpb246IGVtcHR5RnVuY3Rpb24sXHJcblx0aW1wYWN0U2NvcmVDaGFuZ2VBY3Rpb246IGVtcHR5RnVuY3Rpb24sIGVhc2VTY29yZUNoYW5nZUFjdGlvbjogZW1wdHlGdW5jdGlvbiwgY29uZmlkZW5jZVNjb3JlQ2hhbmdlQWN0aW9uOiBlbXB0eUZ1bmN0aW9uLFxyXG5cdG1vdXNlT3ZlckFjdGlvbjogZW1wdHlGdW5jdGlvbiwgbW91c2VMZWF2ZUFjdGlvbjogZW1wdHlGdW5jdGlvbiwgZWRpdElkZWFBY3Rpb246IGVtcHR5RnVuY3Rpb24sIGRlbGV0ZUlkZWFBY3Rpb246IGVtcHR5RnVuY3Rpb25cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyOiBSZWR1Y2VyPElkZWFzU3RhdGU+ID0gKHN0YXRlOiBJZGVhc1N0YXRlLCBpbmNvbWluZ0FjdGlvbjogQWN0aW9uKSA9PiB7XHJcblx0Y29uc3QgYWN0aW9uID0gaW5jb21pbmdBY3Rpb24gYXMgS25vd25BY3Rpb247XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSAnVkFMSURBVElPTl9FUlJPUic6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0aWRlYXM6IHN0YXRlLmlkZWFzLFxyXG5cdFx0XHRcdGlzTG9hZGluZzogZmFsc2VcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgJ0FERF9JREVBJzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRpZGVhczogc3RhdGUuaWRlYXMsXHJcblx0XHRcdFx0aXNMb2FkaW5nOiBmYWxzZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSAnRURJVF9JREVBJzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRpZGVhczogc3RhdGUuaWRlYXMsXHJcblx0XHRcdFx0aXNMb2FkaW5nOiBmYWxzZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSAnREVMRVRFX0lERUEnOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGlkZWFzOiBhY3Rpb24uaWRlYXMsXHJcblx0XHRcdFx0aXNMb2FkaW5nOiBmYWxzZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSAnQ0FOQ0VMX0VESVRfSURFQSc6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0aWRlYXM6IGFjdGlvbi5pZGVhcyxcclxuXHRcdFx0XHRpc0xvYWRpbmc6IGZhbHNlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlICdDT05GSVJNX0VESVRfSURFQSc6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0aWRlYXM6IHN0YXRlLmlkZWFzLFxyXG5cdFx0XHRcdGlzTG9hZGluZzogZmFsc2VcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgJ1JFUVVFU1RfSURFQVMnOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGlkZWFzOiBhY3Rpb24uaWRlYXMsXHJcblx0XHRcdFx0aXNMb2FkaW5nOiBmYWxzZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSAnUkVRVUVTVF9OT19JREVBUyc6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0aWRlYXM6IFtdLFxyXG5cdFx0XHRcdGlzTG9hZGluZzogZmFsc2VcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgJ1JFUVVFU1RJTkdfSURFQVMnOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGlkZWFzOiBzdGF0ZS5pZGVhcyxcclxuXHRcdFx0XHRpc0xvYWRpbmc6IHRydWVcclxuXHRcdFx0fTtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdGNvbnN0IGV4aGF1c3RpdmVDaGVjazogbmV2ZXIgPSBhY3Rpb247XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gc3RhdGUgfHwgdW5sb2FkZWRTdGF0ZTtcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvc3RvcmUvSWRlYXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxMzUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9kb21haW4tdGFzay9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMTk2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1mZXRjaC9mZXRjaC1ucG0tbm9kZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY29tYmluZVJlZHVjZXJzLCBHZW5lcmljU3RvcmVFbmhhbmNlciwgU3RvcmUsIFN0b3JlRW5oYW5jZXJTdG9yZUNyZWF0b3IsIFJlZHVjZXJzTWFwT2JqZWN0IH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgeyByb3V0ZXJSZWR1Y2VyLCByb3V0ZXJNaWRkbGV3YXJlIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcclxuaW1wb3J0ICogYXMgU3RvcmVNb2R1bGUgZnJvbSAnLi9zdG9yZSc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUsIHJlZHVjZXJzIH0gZnJvbSAnLi9zdG9yZSc7XHJcbmltcG9ydCB7IEhpc3RvcnkgfSBmcm9tICdoaXN0b3J5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKGhpc3Rvcnk6IEhpc3RvcnksIGluaXRpYWxTdGF0ZT86IEFwcGxpY2F0aW9uU3RhdGUpIHtcclxuICAgIC8vIEJ1aWxkIG1pZGRsZXdhcmUuIFRoZXNlIGFyZSBmdW5jdGlvbnMgdGhhdCBjYW4gcHJvY2VzcyB0aGUgYWN0aW9ucyBiZWZvcmUgdGhleSByZWFjaCB0aGUgc3RvcmUuXHJcbiAgICBjb25zdCB3aW5kb3dJZkRlZmluZWQgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiB3aW5kb3cgYXMgYW55O1xyXG4gICAgLy8gSWYgZGV2VG9vbHMgaXMgaW5zdGFsbGVkLCBjb25uZWN0IHRvIGl0XHJcbiAgICBjb25zdCBkZXZUb29sc0V4dGVuc2lvbiA9IHdpbmRvd0lmRGVmaW5lZCAmJiB3aW5kb3dJZkRlZmluZWQuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyBhcyAoKSA9PiBHZW5lcmljU3RvcmVFbmhhbmNlcjtcclxuICAgIGNvbnN0IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUgPSBjb21wb3NlKFxyXG4gICAgICAgIGFwcGx5TWlkZGxld2FyZSh0aHVuaywgcm91dGVyTWlkZGxld2FyZShoaXN0b3J5KSksXHJcbiAgICAgICAgZGV2VG9vbHNFeHRlbnNpb24gPyBkZXZUb29sc0V4dGVuc2lvbigpIDogPFM+KG5leHQ6IFN0b3JlRW5oYW5jZXJTdG9yZUNyZWF0b3I8Uz4pID0+IG5leHRcclxuICAgICkoY3JlYXRlU3RvcmUpO1xyXG5cclxuICAgIC8vIENvbWJpbmUgYWxsIHJlZHVjZXJzIGFuZCBpbnN0YW50aWF0ZSB0aGUgYXBwLXdpZGUgc3RvcmUgaW5zdGFuY2VcclxuICAgIGNvbnN0IGFsbFJlZHVjZXJzID0gYnVpbGRSb290UmVkdWNlcihyZWR1Y2Vycyk7XHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUoYWxsUmVkdWNlcnMsIGluaXRpYWxTdGF0ZSkgYXMgU3RvcmU8QXBwbGljYXRpb25TdGF0ZT47XHJcblxyXG4gICAgLy8gRW5hYmxlIFdlYnBhY2sgaG90IG1vZHVsZSByZXBsYWNlbWVudCBmb3IgcmVkdWNlcnNcclxuICAgIGlmIChtb2R1bGUuaG90KSB7XHJcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vc3RvcmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRSb290UmVkdWNlciA9IHJlcXVpcmU8dHlwZW9mIFN0b3JlTW9kdWxlPignLi9zdG9yZScpO1xyXG4gICAgICAgICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcihidWlsZFJvb3RSZWR1Y2VyKG5leHRSb290UmVkdWNlci5yZWR1Y2VycykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdG9yZTtcclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRSb290UmVkdWNlcihhbGxSZWR1Y2VyczogUmVkdWNlcnNNYXBPYmplY3QpIHtcclxuICAgIHJldHVybiBjb21iaW5lUmVkdWNlcnM8QXBwbGljYXRpb25TdGF0ZT4oT2JqZWN0LmFzc2lnbih7fSwgYWxsUmVkdWNlcnMsIHsgcm91dGluZzogcm91dGVyUmVkdWNlciB9KSk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbmZpZ3VyZVN0b3JlLnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgTGF5b3V0Q29udGFpbmVyIGZyb20gJy4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XHJcbmltcG9ydCBTaWduVXAgZnJvbSAnLi9jb21wb25lbnRzL1NpZ25VcCc7XHJcbmltcG9ydCBMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvTG9naW4nO1xyXG5pbXBvcnQgSWRlYXNMaXN0IGZyb20gJy4vY29tcG9uZW50cy9JZGVhc0xpc3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IDxMYXlvdXRDb250YWluZXI+XHJcbiAgICA8Um91dGUgZXhhY3QgcGF0aD0nLycgY29tcG9uZW50PXsgSG9tZSBhcyBhbnkgfSAvPlxyXG5cdDxSb3V0ZSBleGFjdCBwYXRoPScvc2lnbi11cCcgY29tcG9uZW50PXsgU2lnblVwIGFzIGFueSB9IC8+XHJcbiAgICA8Um91dGUgZXhhY3QgcGF0aD0nL2xvZ2luJyBjb21wb25lbnQ9eyBMb2dpbiBhcyBhbnkgfSAvPlxyXG4gICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy9pZGVhcycgY29tcG9uZW50PXsgSWRlYXNMaXN0IGFzIGFueSB9IC8+XHJcbjwvTGF5b3V0Q29udGFpbmVyPjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3JvdXRlcy50c3giLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxMzIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hc3BuZXQtcHJlcmVuZGVyaW5nL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMTM3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDEzOSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9zZXJ2ZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgcmVwbGFjZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XHJcbmltcG9ydCB7IGNyZWF0ZU1lbW9yeUhpc3RvcnkgfSBmcm9tICdoaXN0b3J5JztcclxuaW1wb3J0IHsgY3JlYXRlU2VydmVyUmVuZGVyZXIsIFJlbmRlclJlc3VsdCB9IGZyb20gJ2FzcG5ldC1wcmVyZW5kZXJpbmcnO1xyXG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICcuL3JvdXRlcyc7XHJcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuL2NvbmZpZ3VyZVN0b3JlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNlcnZlclJlbmRlcmVyKHBhcmFtcyA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8UmVuZGVyUmVzdWx0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgLy8gUHJlcGFyZSBSZWR1eCBzdG9yZSB3aXRoIGluLW1lbW9yeSBoaXN0b3J5LCBhbmQgZGlzcGF0Y2ggYSBuYXZpZ2F0aW9uIGV2ZW50XHJcbiAgICAgICAgLy8gY29ycmVzcG9uZGluZyB0byB0aGUgaW5jb21pbmcgVVJMXHJcbiAgICAgICAgY29uc3QgYmFzZW5hbWUgPSBwYXJhbXMuYmFzZVVybC5zdWJzdHJpbmcoMCwgcGFyYW1zLmJhc2VVcmwubGVuZ3RoIC0gMSk7IC8vIFJlbW92ZSB0cmFpbGluZyBzbGFzaFxyXG4gICAgICAgIGNvbnN0IHVybEFmdGVyQmFzZW5hbWUgPSBwYXJhbXMudXJsLnN1YnN0cmluZyhiYXNlbmFtZS5sZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoY3JlYXRlTWVtb3J5SGlzdG9yeSgpKTtcclxuICAgICAgICBzdG9yZS5kaXNwYXRjaChyZXBsYWNlKHVybEFmdGVyQmFzZW5hbWUpKTtcclxuXHJcbiAgICAgICAgLy8gUHJlcGFyZSBhbiBpbnN0YW5jZSBvZiB0aGUgYXBwbGljYXRpb24gYW5kIHBlcmZvcm0gYW4gaW5pdGFsIHJlbmRlciB0aGF0IHdpbGxcclxuICAgICAgICAvLyBjYXVzZSBhbnkgYXN5bmMgdGFza3MgKGUuZy4sIGRhdGEgYWNjZXNzKSB0byBiZWdpblxyXG4gICAgICAgIGNvbnN0IHJvdXRlckNvbnRleHQ6IGFueSA9IHt9O1xyXG4gICAgICAgIGNvbnN0IGFwcCA9IChcclxuICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXsgc3RvcmUgfT5cclxuICAgICAgICAgICAgICAgIDxTdGF0aWNSb3V0ZXIgYmFzZW5hbWU9eyBiYXNlbmFtZSB9IGNvbnRleHQ9eyByb3V0ZXJDb250ZXh0IH0gbG9jYXRpb249eyBwYXJhbXMubG9jYXRpb24ucGF0aCB9IGNoaWxkcmVuPXsgcm91dGVzIH0gLz5cclxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgICApO1xyXG4gICAgICAgIHJlbmRlclRvU3RyaW5nKGFwcCk7XHJcblxyXG4gICAgICAgIC8vIElmIHRoZXJlJ3MgYSByZWRpcmVjdGlvbiwganVzdCBzZW5kIHRoaXMgaW5mb3JtYXRpb24gYmFjayB0byB0aGUgaG9zdCBhcHBsaWNhdGlvblxyXG4gICAgICAgIGlmIChyb3V0ZXJDb250ZXh0LnVybCkge1xyXG4gICAgICAgICAgICByZXNvbHZlKHsgcmVkaXJlY3RVcmw6IHJvdXRlckNvbnRleHQudXJsIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE9uY2UgYW55IGFzeW5jIHRhc2tzIGFyZSBkb25lLCB3ZSBjYW4gcGVyZm9ybSB0aGUgZmluYWwgcmVuZGVyXHJcbiAgICAgICAgLy8gV2UgYWxzbyBzZW5kIHRoZSByZWR1eCBzdG9yZSBzdGF0ZSwgc28gdGhlIGNsaWVudCBjYW4gY29udGludWUgZXhlY3V0aW9uIHdoZXJlIHRoZSBzZXJ2ZXIgbGVmdCBvZmZcclxuICAgICAgICBwYXJhbXMuZG9tYWluVGFza3MudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgICAgICAgaHRtbDogcmVuZGVyVG9TdHJpbmcoYXBwKSxcclxuICAgICAgICAgICAgICAgIGdsb2JhbHM6IHsgaW5pdGlhbFJlZHV4U3RhdGU6IHN0b3JlLmdldFN0YXRlKCkgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCByZWplY3QpOyAvLyBBbHNvIHByb3BhZ2F0ZSBhbnkgZXJyb3JzIGJhY2sgaW50byB0aGUgaG9zdCBhcHBsaWNhdGlvblxyXG4gICAgfSk7XHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYm9vdC1zZXJ2ZXIudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIE1vZGFsIGZyb20gJy4uL3N0b3JlL01vZGFsJztcclxuXHJcbnR5cGUgTW9kYWxQcm9wcyA9XHJcblx0TW9kYWwuTW9kYWxcclxuXHQmIHR5cGVvZiBNb2RhbC5hY3Rpb25DcmVhdG9ycztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlbGV0ZU1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PE1vZGFsUHJvcHMsIHt9PiB7XHJcblx0cHVibGljIHJlbmRlcigpIHtcclxuXHRcdHJldHVybiA8ZGl2IGlkPXsnZGVsZXRlLWlkZWEtbW9kYWwtJyArIHRoaXMucHJvcHMuaWRlYUlkfSBjbGFzc05hbWU9J21vZGFsIGZhZGUnIHJvbGU9J2RpYWxvZyc+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1kaWFsb2cgbW9kYWwtc20gbW9kYWwtZGlhbG9nLWNlbnRlcmVkJyByb2xlPSdkb2N1bWVudCc+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21vZGFsLWNvbnRlbnQnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21vZGFsLWhlYWRlcic+XHJcblx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J21vZGFsLXRpdGxlJz5cclxuXHRcdFx0XHRcdFx0XHRBcmUgeW91IHN1cmU/XHJcblx0XHRcdFx0XHRcdDwvaDI+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1ib2R5Jz5cclxuXHRcdFx0XHRcdFx0VGhpcyBpZGVhIHdpbGwgYmUgcGVybWFuZW50bHkgZGVsZXRlZC5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21vZGFsLWZvb3Rlcic+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjbG9zZS1tb2RhbCcgZGF0YS1kaXNtaXNzPSdtb2RhbCc+Q2FuY2VsPC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkZWxldGUtaWRlYScgZGF0YS1kaXNtaXNzPSdtb2RhbCcgb25DbGljaz17KGUpID0+IHRoaXMucHJvcHMuZGVsZXRlQWN0aW9uKGUsIHRoaXMucHJvcHMuaWRlYUlkKX0+T2s8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PjtcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9EZWxldGVNb2RhbC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHb3RJZGVhcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwge30+IHtcclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9J2dvdC1pZGVhcyc+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwaWN0dXJlJz48L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3RleHQnPlxyXG5cdFx0XHRcdEdvdCBJZGVhcz9cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvR290SWRlYXMudHN4IiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcbmltcG9ydCAqIGFzIFVzZXJTdGF0ZSBmcm9tICcuLi9zdG9yZS9Vc2VyJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG50eXBlIFVzZXJQcm9wcyA9XHJcblx0VXNlclN0YXRlLlVzZXJTdGF0ZVxyXG5cdCYgdHlwZW9mIFVzZXJTdGF0ZS5hY3Rpb25DcmVhdG9ycztcclxuXHJcbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VXNlclByb3BzLCB7fT4ge1xyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0dGhpcy5wcm9wcy5nZXRDdXJyZW50VXNlcih0cnVlKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gPGRpdj48L2Rpdj47XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG5cdChzdGF0ZTogQXBwbGljYXRpb25TdGF0ZSkgPT4gc3RhdGUudXNlcixcclxuXHRVc2VyU3RhdGUuYWN0aW9uQ3JlYXRvcnNcclxuKShIb21lKSBhcyB0eXBlb2YgSG9tZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9Ib21lLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2NvcmVDb250cm9sIGZyb20gXCIuL1Njb3JlQ29udHJvbFwiO1xyXG5pbXBvcnQgRGVsZXRlTW9kYWwgZnJvbSAnLi9EZWxldGVNb2RhbCc7XHJcbmltcG9ydCAqIGFzIElkZWEgZnJvbSAnLi4vc3RvcmUvSWRlYSc7XHJcbmltcG9ydCB7IENoYW5nZUV2ZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG50eXBlIElkZWFQcm9wcyA9XHJcblx0SWRlYS5JZGVhXHJcblx0JiB0eXBlb2YgSWRlYS5hY3Rpb25DcmVhdG9ycztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElkZWFJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElkZWFQcm9wcywge30+IHtcclxuXHRwdWJsaWMgcmVuZGVyKCkge1xyXG5cdFx0dmFyIGlkZWFOYW1lRWxlbWVudCA9IDxkaXYgY2xhc3NOYW1lPSdpZGVhLW5hbWUnPnt0aGlzLnByb3BzLmNvbnRlbnR9PC9kaXY+O1xyXG5cdFx0dmFyIGltcGFjdFNjb3JlRWxlbWVudCA9IDxkaXYgY2xhc3NOYW1lPSdpbXBhY3Qtc2NvcmUnPnt0aGlzLnByb3BzLmltcGFjdH08L2Rpdj47XHJcblx0XHR2YXIgZWFzZVNjb3JlRWxlbWVudCA9IDxkaXYgY2xhc3NOYW1lPSdlYXNlLXNjb3JlJz57dGhpcy5wcm9wcy5lYXNlfTwvZGl2PjtcclxuXHRcdHZhciBjb25maWRlbmNlU2NvcmVFbGVtZW50ID0gPGRpdiBjbGFzc05hbWU9J2NvbmZpZGVuY2Utc2NvcmUnPnt0aGlzLnByb3BzLmNvbmZpZGVuY2V9PC9kaXY+O1xyXG5cdFx0dmFyIGF2ZXJhZ2VTY29yZUVsZW1lbnQgPSA8ZGl2IGNsYXNzTmFtZT0nc2NvcmUtYXZlcmFnZSc+e3RoaXMucHJvcHMuYXZlcmFnZVNjb3JlfTwvZGl2PjtcclxuXHRcdHZhciBmaXJzdEFjdGlvbkVsZW1lbnQgPSA8ZGl2IGNsYXNzTmFtZT0nZWRpdC1pZGVhJ1xyXG5cdFx0XHRvbkNsaWNrPXsoZSkgPT4gdGhpcy5wcm9wcy5lZGl0SWRlYUFjdGlvbihlLCB0aGlzLnByb3BzLmlkZWFJZCl9PjwvZGl2PjtcclxuXHRcdHZhciBzZWNvbmRBY3Rpb25FbGVtZW50ID0gPGRpdiBjbGFzc05hbWU9J2RlbGV0ZS1pZGVhJ1xyXG5cdFx0XHRkYXRhLXRvZ2dsZT0nbW9kYWwnXHJcblx0XHRcdGRhdGEtdGFyZ2V0PXsnI2RlbGV0ZS1pZGVhLW1vZGFsLScgKyB0aGlzLnByb3BzLmlkZWFJZH1cclxuXHRcdFx0ZGF0YS1iYWNrZHJvcD0nZmFsc2UnXHJcblx0XHRcdGRhdGEta2V5Ym9hcmQ9J2ZhbHNlJz48L2Rpdj47XHJcblx0XHRpZiAodGhpcy5wcm9wcy5pc0VkaXRNb2RlKSB7XHJcblx0XHRcdGlkZWFOYW1lRWxlbWVudCA9IDxpbnB1dCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdHlwZT0ndGV4dCcgcmVxdWlyZWQgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLmNvbnRlbnR9IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5wcm9wcy5pZGVhTmFtZUNoYW5nZUFjdGlvbihlLCB0aGlzLnByb3BzLmlkZWFJZCl9IC8+O1xyXG5cdFx0XHRpbXBhY3RTY29yZUVsZW1lbnQgPSA8U2NvcmVDb250cm9sIGlkZWFJZD17dGhpcy5wcm9wcy5pZGVhSWR9IHNjb3JlVmFsdWU9e3RoaXMucHJvcHMuaW1wYWN0fSBzY29yZUNoYW5nZUFjdGlvbj17dGhpcy5wcm9wcy5pbXBhY3RTY29yZUNoYW5nZUFjdGlvbn0gLz47XHJcblx0XHRcdGVhc2VTY29yZUVsZW1lbnQgPSA8U2NvcmVDb250cm9sIGlkZWFJZD17dGhpcy5wcm9wcy5pZGVhSWR9IHNjb3JlVmFsdWU9e3RoaXMucHJvcHMuZWFzZX0gc2NvcmVDaGFuZ2VBY3Rpb249e3RoaXMucHJvcHMuZWFzZVNjb3JlQ2hhbmdlQWN0aW9ufSAvPjtcclxuXHRcdFx0Y29uZmlkZW5jZVNjb3JlRWxlbWVudCA9IDxTY29yZUNvbnRyb2wgaWRlYUlkPXt0aGlzLnByb3BzLmlkZWFJZH0gc2NvcmVWYWx1ZT17dGhpcy5wcm9wcy5jb25maWRlbmNlfSBzY29yZUNoYW5nZUFjdGlvbj17dGhpcy5wcm9wcy5jb25maWRlbmNlU2NvcmVDaGFuZ2VBY3Rpb259IC8+O1xyXG5cdFx0XHRmaXJzdEFjdGlvbkVsZW1lbnQgPSA8ZGl2IGNsYXNzTmFtZT0nY29uZmlybS1hZGQnIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnByb3BzLmNvbmZpcm1FZGl0SWRlYUFjdGlvbihlLCB0aGlzLnByb3BzLmlkZWFJZCl9PjwvZGl2PjtcclxuXHRcdFx0c2Vjb25kQWN0aW9uRWxlbWVudCA9IDxkaXYgY2xhc3NOYW1lPSdjYW5jZWwtYWRkJyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5wcm9wcy5jYW5jZWxFZGl0SWRlYUFjdGlvbihlLCB0aGlzLnByb3BzLmlkZWFJZCl9PjwvZGl2PjtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgdmFsaWRhdGlvbkVycm9yRWxlbWVudCA9IG51bGw7XHJcblx0XHRpZiAodGhpcy5wcm9wcy52YWxpZGF0aW9uRXJyb3JNZXNzYWdlKSB7XHJcblx0XHRcdHZhbGlkYXRpb25FcnJvckVsZW1lbnQgPSA8c3BhbiBjbGFzc05hbWU9J2Zvcm0tdmFsaWRhdGlvbi1lcnJvcnMnPlxyXG5cdFx0XHRcdHt0aGlzLnByb3BzLnZhbGlkYXRpb25FcnJvck1lc3NhZ2V9XHJcblx0XHRcdDwvc3Bhbj47XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIDx0ciBjbGFzc05hbWU9J2lkZWEnXHJcblx0XHRcdG9uTW91c2VPdmVyPXsoZSkgPT4gdGhpcy5wcm9wcy5tb3VzZU92ZXJBY3Rpb24oZSwgdGhpcy5wcm9wcy5pZGVhSWQpfVxyXG5cdFx0XHRvbk1vdXNlTGVhdmU9eyhlKSA9PiB0aGlzLnByb3BzLm1vdXNlTGVhdmVBY3Rpb24oZSwgdGhpcy5wcm9wcy5pZGVhSWQpfT5cclxuXHRcdFx0PHRkPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkb3QnPjwvZGl2PlxyXG5cdFx0XHRcdDxEZWxldGVNb2RhbCBpZGVhSWQ9e3RoaXMucHJvcHMuaWRlYUlkfVxyXG5cdFx0XHRcdFx0ZGVsZXRlQWN0aW9uPXt0aGlzLnByb3BzLmRlbGV0ZUlkZWFBY3Rpb259IC8+XHJcblx0XHRcdDwvdGQ+XHJcblx0XHRcdDx0ZD5cclxuXHRcdFx0XHR7aWRlYU5hbWVFbGVtZW50fVxyXG5cdFx0XHRcdHt2YWxpZGF0aW9uRXJyb3JFbGVtZW50fVxyXG5cdFx0XHQ8L3RkPlxyXG5cdFx0XHQ8dGQ+XHJcblx0XHRcdFx0e2ltcGFjdFNjb3JlRWxlbWVudH1cclxuXHRcdFx0PC90ZD5cclxuXHRcdFx0PHRkPlxyXG5cdFx0XHRcdHtlYXNlU2NvcmVFbGVtZW50fVxyXG5cdFx0XHQ8L3RkPlxyXG5cdFx0XHQ8dGQ+XHJcblx0XHRcdFx0e2NvbmZpZGVuY2VTY29yZUVsZW1lbnR9XHJcblx0XHRcdDwvdGQ+XHJcblx0XHRcdDx0ZD5cclxuXHRcdFx0XHR7YXZlcmFnZVNjb3JlRWxlbWVudH1cclxuXHRcdFx0PC90ZD5cclxuXHRcdFx0PHRkIGNsYXNzTmFtZT17J2FjdGlvbnMgJyArICh0aGlzLnByb3BzLmlzRWRpdE1vZGUgPyAnZWRpdGluZycgOiAnJyl9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgdGhpcy5wcm9wcy5pc0VkaXRNb2RlIHx8IHRoaXMucHJvcHMuYXJlQWN0aW9uc1Zpc2libGUgPyAnb3BhcXVlJyA6ICd0cmFuc3BhcmVudCcgfT5cclxuXHRcdFx0XHRcdHtmaXJzdEFjdGlvbkVsZW1lbnR9XHJcblx0XHRcdFx0XHR7c2Vjb25kQWN0aW9uRWxlbWVudH1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC90ZD5cclxuXHRcdDwvdHI+O1xyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL0lkZWFJdGVtLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gJy4uL3N0b3JlJztcclxuaW1wb3J0ICogYXMgSWRlYXNTdGF0ZSBmcm9tICcuLi9zdG9yZS9JZGVhcyc7XHJcbmltcG9ydCB7IElkZWEgfSBmcm9tICcuLi9zdG9yZS9JZGVhJztcclxuaW1wb3J0IEdvdElkZWFzIGZyb20gJy4vR290SWRlYXMnO1xyXG5pbXBvcnQgSWRlYUl0ZW0gZnJvbSAnLi9JZGVhSXRlbSc7XHJcbmltcG9ydCB7IENoYW5nZUV2ZW50LCBNb3VzZUV2ZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxudHlwZSBJZGVhc1Byb3BzID1cclxuXHRJZGVhc1N0YXRlLklkZWFzU3RhdGVcclxuXHQmIHR5cGVvZiBJZGVhc1N0YXRlLmFjdGlvbkNyZWF0b3JzO1xyXG5cclxuY2xhc3MgSWRlYXNMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElkZWFzUHJvcHMsIHt9PiB7XHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHR0aGlzLm9uQ2FuY2VsRWRpdElkZWEgPSB0aGlzLm9uQ2FuY2VsRWRpdElkZWEuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMub25Db25maXJtRWRpdElkZWEgPSB0aGlzLm9uQ29uZmlybUVkaXRJZGVhLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLm9uSWRlYU5hbWVDaGFuZ2UgPSB0aGlzLm9uSWRlYU5hbWVDaGFuZ2UuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMub25JbXBhY3RTY29yZUNoYW5nZSA9IHRoaXMub25JbXBhY3RTY29yZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5vbkVhc2VTY29yZUNoYW5nZSA9IHRoaXMub25FYXNlU2NvcmVDaGFuZ2UuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMub25Db25maWRlbmNlU2NvcmVDaGFuZ2UgPSB0aGlzLm9uQ29uZmlkZW5jZVNjb3JlQ2hhbmdlLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLm9uTW91c2VPdmVySWRlYSA9IHRoaXMub25Nb3VzZU92ZXJJZGVhLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLm9uTW91c2VMZWF2ZUlkZWEgPSB0aGlzLm9uTW91c2VMZWF2ZUlkZWEuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMub25FZGl0SWRlYSA9IHRoaXMub25FZGl0SWRlYS5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5vbkRlbGV0ZUlkZWEgPSB0aGlzLm9uRGVsZXRlSWRlYS5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5wcm9wcy5nZXRJZGVhcygpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzZWxlY3RJZGVhQnlJZChpZGVhSWQ6IHN0cmluZykge1xyXG5cdFx0cmV0dXJuIHRoaXMucHJvcHMuaWRlYXMuZmluZCh4ID0+IHguaWRlYUlkID09PSBpZGVhSWQpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzZXRBdmVyYWdlU2NvcmUoaWRlYTogSWRlYSkge1xyXG5cdFx0dmFyIGF2ZXJhZ2VTY29yZSA9IChpZGVhLmltcGFjdCArIGlkZWEuZWFzZSArIGlkZWEuY29uZmlkZW5jZSkgLyAzLjA7XHJcblx0XHRpZGVhLmF2ZXJhZ2VTY29yZSA9IE1hdGgucm91bmQoYXZlcmFnZVNjb3JlICogMTApIC8gMTA7XHJcblxyXG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG5cdH1cclxuXHRcclxuXHRwcml2YXRlIG9uQWRkSWRlYShlOiBNb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50Pikge1xyXG5cdFx0dGhpcy5wcm9wcy5hZGRJZGVhKCk7XHJcblxyXG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvbkNhbmNlbEVkaXRJZGVhKGU6IE1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+LCBpZGVhSWQ6IHN0cmluZykge1xyXG5cdFx0dGhpcy5wcm9wcy5jYW5jZWxFZGl0SWRlYShpZGVhSWQpO1xyXG5cclxuXHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb25Db25maXJtRWRpdElkZWEoZTogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4sIGlkZWFJZDogc3RyaW5nKSB7XHJcblx0XHR0aGlzLnByb3BzLmNvbmZpcm1FZGl0SWRlYShpZGVhSWQpO1xyXG5cclxuXHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb25JZGVhTmFtZUNoYW5nZShlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PiwgaWRlYUlkOiBzdHJpbmcpIHtcclxuXHRcdHZhciBpZGVhID0gdGhpcy5zZWxlY3RJZGVhQnlJZChpZGVhSWQpO1xyXG5cdFx0aWYgKGlkZWEpIHtcclxuXHRcdFx0aWRlYS5jb250ZW50ID0gZS50YXJnZXQudmFsdWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG9uSW1wYWN0U2NvcmVDaGFuZ2UoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4sIGlkZWFJZDogc3RyaW5nKSB7XHJcblx0XHR2YXIgaWRlYSA9IHRoaXMuc2VsZWN0SWRlYUJ5SWQoaWRlYUlkKTtcclxuXHRcdHZhciBzY29yZVZhbHVlID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpO1xyXG5cdFx0aWYgKGlkZWEgJiYgIWlzTmFOKHNjb3JlVmFsdWUpKSB7XHJcblx0XHRcdGlkZWEuaW1wYWN0ID0gc2NvcmVWYWx1ZTtcclxuXHRcdFx0dGhpcy5zZXRBdmVyYWdlU2NvcmUoaWRlYSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG9uRWFzZVNjb3JlQ2hhbmdlKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+LCBpZGVhSWQ6IHN0cmluZykge1xyXG5cdFx0dmFyIGlkZWEgPSB0aGlzLnNlbGVjdElkZWFCeUlkKGlkZWFJZCk7XHJcblx0XHR2YXIgc2NvcmVWYWx1ZSA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKTtcclxuXHRcdGlmIChpZGVhICYmICFpc05hTihzY29yZVZhbHVlKSkge1xyXG5cdFx0XHRpZGVhLmVhc2UgPSBzY29yZVZhbHVlO1xyXG5cdFx0XHR0aGlzLnNldEF2ZXJhZ2VTY29yZShpZGVhKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb25Db25maWRlbmNlU2NvcmVDaGFuZ2UoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4sIGlkZWFJZDogc3RyaW5nKSB7XHJcblx0XHR2YXIgaWRlYSA9IHRoaXMuc2VsZWN0SWRlYUJ5SWQoaWRlYUlkKTtcclxuXHRcdHZhciBzY29yZVZhbHVlID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpO1xyXG5cdFx0aWYgKGlkZWEgJiYgIWlzTmFOKHNjb3JlVmFsdWUpKSB7XHJcblx0XHRcdGlkZWEuY29uZmlkZW5jZSA9IHNjb3JlVmFsdWU7XHJcblx0XHRcdHRoaXMuc2V0QXZlcmFnZVNjb3JlKGlkZWEpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvbk1vdXNlT3ZlcklkZWEoZTogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4sIGlkZWFJZDogc3RyaW5nKSB7XHJcblx0XHR2YXIgaWRlYSA9IHRoaXMuc2VsZWN0SWRlYUJ5SWQoaWRlYUlkKTtcclxuXHRcdGlmIChpZGVhKSB7XHJcblx0XHRcdGlkZWEuYXJlQWN0aW9uc1Zpc2libGUgPSB0cnVlO1xyXG5cclxuXHRcdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvbk1vdXNlTGVhdmVJZGVhKGU6IE1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+LCBpZGVhSWQ6IHN0cmluZykge1xyXG5cdFx0dmFyIGlkZWEgPSB0aGlzLnNlbGVjdElkZWFCeUlkKGlkZWFJZCk7XHJcblx0XHRpZiAoaWRlYSkge1xyXG5cdFx0XHRpZGVhLmFyZUFjdGlvbnNWaXNpYmxlID0gZmFsc2U7XHJcblxyXG5cdFx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG9uRWRpdElkZWEoZTogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4sIGlkZWFJZDogc3RyaW5nKSB7XHJcblx0XHR0aGlzLnByb3BzLmVkaXRJZGVhKGlkZWFJZCk7XHJcblxyXG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvbkRlbGV0ZUlkZWEoZTogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4sIGlkZWFJZDogc3RyaW5nKSB7XHJcblx0XHR0aGlzLnByb3BzLmRlbGV0ZUlkZWEoaWRlYUlkKTtcclxuXHJcblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyByZW5kZXIoKSB7XHJcblx0XHR2YXIgbXlJZGVhc05hdiA9IDxkaXYgY2xhc3NOYW1lPSdteS1pZGVhcy1uYXYnPlxyXG5cdFx0XHQ8aDI+TXkgSWRlYXM8L2gyPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYWRkLWlkZWEtYnV0dG9uJyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5vbkFkZElkZWEoZSl9PjwvZGl2PlxyXG5cdFx0XHQ8aHIgLz5cclxuXHRcdDwvZGl2PjtcclxuXHJcblx0XHR2YXIgbXlJZGVhc0VsZW1lbnRzID0gPGRpdj5cclxuXHRcdFx0PGZvcm0+XHJcblx0XHRcdFx0PHRhYmxlIGNsYXNzTmFtZT0naWRlYXMtbGlzdCcgY2VsbFNwYWNpbmc9JzMnPlxyXG5cdFx0XHRcdFx0PHRoZWFkPlxyXG5cdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0PHRkPiZuYnNwOzwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0PHRkPiZuYnNwOzwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0PHRkPkltcGFjdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0PHRkPkVhc2U8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZD5Db25maWRlbmNlPC90ZD5cclxuXHRcdFx0XHRcdFx0XHQ8dGQ+PGI+QXZnLjwvYj48L3RkPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZD4mbmJzcDs8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PC90aGVhZD5cclxuXHRcdFx0XHRcdDx0Ym9keT5cclxuXHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuaWRlYXMubWFwKChpZGVhLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiA8SWRlYUl0ZW0ga2V5PXtpZGVhLmlkZWFJZH1cclxuXHRcdFx0XHRcdFx0XHRcdGlkZWFJZD17aWRlYS5pZGVhSWR9XHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50PXtpZGVhLmNvbnRlbnR9XHJcblx0XHRcdFx0XHRcdFx0XHRpbXBhY3Q9e2lkZWEuaW1wYWN0fVxyXG5cdFx0XHRcdFx0XHRcdFx0ZWFzZT17aWRlYS5lYXNlfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y29uZmlkZW5jZT17aWRlYS5jb25maWRlbmNlfVxyXG5cdFx0XHRcdFx0XHRcdFx0YXZlcmFnZVNjb3JlPXtpZGVhLmF2ZXJhZ2VTY29yZX1cclxuXHRcdFx0XHRcdFx0XHRcdGlzRWRpdE1vZGU9e2lkZWEuaXNFZGl0TW9kZX1cclxuXHRcdFx0XHRcdFx0XHRcdHZhbGlkYXRpb25FcnJvck1lc3NhZ2U9e2lkZWEudmFsaWRhdGlvbkVycm9yTWVzc2FnZX1cclxuXHRcdFx0XHRcdFx0XHRcdGFyZUFjdGlvbnNWaXNpYmxlPXtpZGVhLmFyZUFjdGlvbnNWaXNpYmxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2FuY2VsRWRpdElkZWFBY3Rpb249e3RoaXMub25DYW5jZWxFZGl0SWRlYX1cclxuXHRcdFx0XHRcdFx0XHRcdGNvbmZpcm1FZGl0SWRlYUFjdGlvbj17dGhpcy5vbkNvbmZpcm1FZGl0SWRlYX1cclxuXHRcdFx0XHRcdFx0XHRcdGlkZWFOYW1lQ2hhbmdlQWN0aW9uPXt0aGlzLm9uSWRlYU5hbWVDaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRpbXBhY3RTY29yZUNoYW5nZUFjdGlvbj17dGhpcy5vbkltcGFjdFNjb3JlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0ZWFzZVNjb3JlQ2hhbmdlQWN0aW9uPXt0aGlzLm9uRWFzZVNjb3JlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y29uZmlkZW5jZVNjb3JlQ2hhbmdlQWN0aW9uPXt0aGlzLm9uQ29uZmlkZW5jZVNjb3JlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0bW91c2VPdmVyQWN0aW9uPXt0aGlzLm9uTW91c2VPdmVySWRlYX1cclxuXHRcdFx0XHRcdFx0XHRcdG1vdXNlTGVhdmVBY3Rpb249e3RoaXMub25Nb3VzZUxlYXZlSWRlYX1cclxuXHRcdFx0XHRcdFx0XHRcdGVkaXRJZGVhQWN0aW9uPXt0aGlzLm9uRWRpdElkZWF9XHJcblx0XHRcdFx0XHRcdFx0XHRkZWxldGVJZGVhQWN0aW9uPXt0aGlzLm9uRGVsZXRlSWRlYX1cclxuXHRcdFx0XHRcdFx0XHQvPjtcclxuXHRcdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHQ8L3Rib2R5PlxyXG5cdFx0XHRcdDwvdGFibGU+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvZGl2PjtcclxuXHJcblx0XHRpZiAodGhpcy5wcm9wcy5pc0xvYWRpbmcpIHtcclxuXHRcdFx0bXlJZGVhc0VsZW1lbnRzID0gPGRpdj48L2Rpdj47XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICh0aGlzLnByb3BzLmlkZWFzLmxlbmd0aCA8PSAwKSB7XHJcblx0XHRcdG15SWRlYXNFbGVtZW50cyA9IDxkaXYgY2xhc3NOYW1lPSdmbGV4LWNlbnRlciBmdWxsLWhlaWdodCc+XHJcblx0XHRcdFx0PEdvdElkZWFzIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiA8ZGl2PlxyXG5cdFx0XHR7bXlJZGVhc05hdn1cclxuXHRcdFx0e215SWRlYXNFbGVtZW50c31cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcblx0KHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiBzdGF0ZS5pZGVhcyxcclxuXHRJZGVhc1N0YXRlLmFjdGlvbkNyZWF0b3JzXHJcbikoSWRlYXNMaXN0KSBhcyB0eXBlb2YgSWRlYXNMaXN0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL0lkZWFzTGlzdC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNYWluTmF2Q29udGFpbmVyIGZyb20gJy4vTWFpbk5hdic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIHt9PiB7XHJcblx0cHVibGljIHJlbmRlcigpIHtcclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTMnPlxyXG5cdFx0XHRcdFx0PE1haW5OYXZDb250YWluZXIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtOSc+XHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9MYXlvdXQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzLCBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tICcuLi9zdG9yZSc7XHJcbmltcG9ydCAqIGFzIFVzZXJTdGF0ZSBmcm9tICcuLi9zdG9yZS9Vc2VyJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQ2hhbmdlRXZlbnQsIEZvcm1FdmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbnR5cGUgVXNlclByb3BzID1cclxuXHRVc2VyU3RhdGUuVXNlclN0YXRlXHJcblx0JiB0eXBlb2YgVXNlclN0YXRlLmFjdGlvbkNyZWF0b3JzO1xyXG5cclxuY2xhc3MgTG9naW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VXNlclByb3BzLCB7fT4ge1xyXG5cdHByaXZhdGUgb25FbWFpbENoYW5nZShlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xyXG5cdFx0dGhpcy5wcm9wcy51c2VyLmVtYWlsID0gZS50YXJnZXQudmFsdWU7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG9uUGFzc3dvcmRDaGFuZ2UoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcclxuXHRcdHRoaXMucHJvcHMudXNlci5wYXNzd29yZCA9IGUudGFyZ2V0LnZhbHVlO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvbkZvcm1TdWJtaXQoZTogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHRoaXMucHJvcHMubG9nSW4odGhpcy5wcm9wcy51c2VyKTtcclxuXHR9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nZmxleC1jZW50ZXIgZnVsbC1oZWlnaHQnPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncmVnaXN0cmF0aW9uJz5cclxuXHRcdFx0XHQ8aDE+TG9nIEluPC9oMT5cclxuXHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17KGUpID0+IHRoaXMub25Gb3JtU3VibWl0KGUpfT5cclxuXHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J0VtYWlsJyBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMudXNlci5lbWFpbH0gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uRW1haWxDaGFuZ2UoZSl9IC8+XHJcblx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHR5cGU9J3Bhc3N3b3JkJyBwbGFjZWhvbGRlcj0nUGFzc3dvcmQnIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy51c2VyLnBhc3N3b3JkfSBvbkNoYW5nZT17KGUpID0+IHRoaXMub25QYXNzd29yZENoYW5nZShlKX0gLz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cgZmxleC1jZW50ZXInPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTQnPlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT0nc3VibWl0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdExvZyBJblxyXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC04IHRleHQtcmlnaHQnPlxyXG5cdFx0XHRcdFx0XHRcdERvbid0IGhhdmUgYW4gYWNjb3VudD8gPGEgaHJlZj0nL3NpZ24tdXAnPkNyZWF0ZSBhbiBhY2NvdW50PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2Zvcm0tdmFsaWRhdGlvbi1lcnJvcnMnPnt0aGlzLnByb3BzLmxvZ2luVmFsaWRhdGlvbkVycm9yTWVzc2FnZX08L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuXHQoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLnVzZXIsXHJcblx0VXNlclN0YXRlLmFjdGlvbkNyZWF0b3JzXHJcbikoTG9naW4pIGFzIHR5cGVvZiBMb2dpbjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvTG9naW4udHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSAnLi4vc3RvcmUnO1xyXG5pbXBvcnQgKiBhcyBVc2VyU3RhdGUgZnJvbSAnLi4vc3RvcmUvVXNlcic7XHJcblxyXG50eXBlIFVzZXJQcm9wcyA9XHJcblx0VXNlclN0YXRlLlVzZXJTdGF0ZVxyXG5cdCYgdHlwZW9mIFVzZXJTdGF0ZS5hY3Rpb25DcmVhdG9ycztcclxuXHJcbmNsYXNzIE1haW5OYXYgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VXNlclByb3BzLCB7fT4ge1xyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0dGhpcy5wcm9wcy5nZXRDdXJyZW50VXNlcigpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvbkxvZ291dChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50Pikge1xyXG5cdFx0dGhpcy5wcm9wcy5sb2dPdXQoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKSB7XHJcblx0XHR2YXIgdXNlckRhdGEgPSB0aGlzLnByb3BzLnJlZnJlc2hUb2tlblxyXG5cdFx0XHQ/IDxkaXY+XHJcblx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0PGltZyBjbGFzc05hbWU9J3VzZXItYXZhdGFyJyBzcmM9e3RoaXMucHJvcHMudXNlci5hdmF0YXJVcmx9IC8+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3VzZXItbmFtZSc+XHJcblx0XHRcdFx0XHR7dGhpcy5wcm9wcy51c2VyLm5hbWV9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2xvZ291dCcgb25DbGljaz17KGUpID0+IHRoaXMub25Mb2dvdXQoZSl9PlxyXG5cdFx0XHRcdFx0TG9nIG91dFxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj4gOiBudWxsO1xyXG5cclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nbWFpbi1uYXYnPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbG9nbyc+PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdhcHAtbmFtZSc+XHJcblx0XHRcdFx0VGhlIElkZWEgUG9vbFxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0eyB1c2VyRGF0YSB9XHJcblx0XHQ8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IE1haW5OYXZDb250YWluZXIgPSBjb25uZWN0KFxyXG5cdChzdGF0ZTogQXBwbGljYXRpb25TdGF0ZSkgPT4gc3RhdGUudXNlcixcclxuXHRVc2VyU3RhdGUuYWN0aW9uQ3JlYXRvcnNcclxuKShNYWluTmF2KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5OYXZDb250YWluZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvTWFpbk5hdi50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgU2NvcmUgZnJvbSAnLi4vc3RvcmUvU2NvcmUnO1xyXG5cclxudHlwZSBTY29yZVByb3BzID1cclxuXHRTY29yZS5TY29yZVxyXG5cdCYgdHlwZW9mIFNjb3JlLmFjdGlvbkNyZWF0b3JzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmVDb250cm9sIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFNjb3JlUHJvcHMsIHt9PiB7XHJcblx0cHVibGljIHJlbmRlcigpIHtcclxuXHRcdHJldHVybiA8c2VsZWN0IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMuc2NvcmVWYWx1ZS50b1N0cmluZygpfSBvbkNoYW5nZT17KGUpID0+IHRoaXMucHJvcHMuc2NvcmVDaGFuZ2VBY3Rpb24oZSwgdGhpcy5wcm9wcy5pZGVhSWQpfT5cclxuXHRcdFx0PG9wdGlvbj4xPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24+Mjwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uPjM8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbj40PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24+NTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uPjY8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbj43PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24+ODwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uPjk8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbj4xMDwvb3B0aW9uPlxyXG5cdFx0PC9zZWxlY3Q+O1xyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL1Njb3JlQ29udHJvbC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMsIE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0ICogYXMgVXNlclN0YXRlIGZyb20gJy4uL3N0b3JlL1VzZXInO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSAnLi4vc3RvcmUnO1xyXG5pbXBvcnQgeyBGb3JtRXZlbnQsIENoYW5nZUV2ZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxudHlwZSBVc2VyUHJvcHMgPVxyXG5cdFVzZXJTdGF0ZS5Vc2VyU3RhdGVcclxuXHQmIHR5cGVvZiBVc2VyU3RhdGUuYWN0aW9uQ3JlYXRvcnM7XHJcblxyXG5jbGFzcyBTaWduVXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VXNlclByb3BzLCB7fT4ge1xyXG5cdHByaXZhdGUgb25OYW1lQ2hhbmdlKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcblx0XHR0aGlzLnByb3BzLnVzZXIubmFtZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvbkVtYWlsQ2hhbmdlKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcblx0XHR0aGlzLnByb3BzLnVzZXIuZW1haWwgPSBlLnRhcmdldC52YWx1ZTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb25QYXNzd29yZENoYW5nZShlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xyXG5cdFx0dGhpcy5wcm9wcy51c2VyLnBhc3N3b3JkID0gZS50YXJnZXQudmFsdWU7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG9uRm9ybVN1Ym1pdChlOiBGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pikge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dGhpcy5wcm9wcy5zaWduVXAodGhpcy5wcm9wcy51c2VyKTtcclxuXHR9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nZmxleC1jZW50ZXIgZnVsbC1oZWlnaHQnPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncmVnaXN0cmF0aW9uJz5cclxuXHRcdFx0XHQ8aDE+U2lnbiBVcDwvaDE+XHJcblx0XHRcdFx0PGZvcm0gb25TdWJtaXQ9eyhlKSA9PiB0aGlzLm9uRm9ybVN1Ym1pdChlKX0+XHJcblx0XHRcdFx0XHQ8aW5wdXQgbmFtZT0nbmFtZScgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdOYW1lJyBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMudXNlci5uYW1lfSBvbkNoYW5nZT17KGUpID0+IHRoaXMub25OYW1lQ2hhbmdlKGUpfSAvPlxyXG5cdFx0XHRcdFx0PGlucHV0IG5hbWU9J2VtYWlsJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J0VtYWlsJyBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMudXNlci5lbWFpbH0gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uRW1haWxDaGFuZ2UoZSl9IC8+XHJcblx0XHRcdFx0XHQ8aW5wdXQgbmFtZT0ncGFzc3dvcmQnIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyB0eXBlPSdwYXNzd29yZCcgcGxhY2Vob2xkZXI9J1Bhc3N3b3JkJyBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMudXNlci5wYXNzd29yZH0gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uUGFzc3dvcmRDaGFuZ2UoZSl9IC8+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93IGZsZXgtY2VudGVyJz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC00Jz5cclxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+XHJcblx0XHRcdFx0XHRcdFx0XHRTaWduIFVwXHJcblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTggdGV4dC1yaWdodCc+XHJcblx0XHRcdFx0XHRcdFx0QWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/IDxhIGhyZWY9Jy9sb2dpbic+TG9nIGluPC9hPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2Zvcm0tdmFsaWRhdGlvbi1lcnJvcnMnPnt0aGlzLnByb3BzLnNpZ251cFZhbGlkYXRpb25FcnJvck1lc3NhZ2V9PC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcblx0KHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiBzdGF0ZS51c2VyLFxyXG5cdFVzZXJTdGF0ZS5hY3Rpb25DcmVhdG9yc1xyXG4pKFNpZ25VcCkgYXMgdHlwZW9mIFNpZ25VcDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvU2lnblVwLnRzeCIsImltcG9ydCAqIGFzIFVzZXIgZnJvbSAnLi9Vc2VyJztcclxuaW1wb3J0ICogYXMgSWRlYXMgZnJvbSAnLi9JZGVhcyc7XHJcblxyXG4vLyBUaGUgdG9wLWxldmVsIHN0YXRlIG9iamVjdFxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcGxpY2F0aW9uU3RhdGUge1xyXG5cdHVzZXI6IFVzZXIuVXNlclN0YXRlO1xyXG5cdGlkZWFzOiBJZGVhcy5JZGVhc1N0YXRlO1xyXG59XHJcblxyXG4vLyBXaGVuZXZlciBhbiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCwgUmVkdXggd2lsbCB1cGRhdGUgZWFjaCB0b3AtbGV2ZWwgYXBwbGljYXRpb24gc3RhdGUgcHJvcGVydHkgdXNpbmdcclxuLy8gdGhlIHJlZHVjZXIgd2l0aCB0aGUgbWF0Y2hpbmcgbmFtZS4gSXQncyBpbXBvcnRhbnQgdGhhdCB0aGUgbmFtZXMgbWF0Y2ggZXhhY3RseSwgYW5kIHRoYXQgdGhlIHJlZHVjZXJcclxuLy8gYWN0cyBvbiB0aGUgY29ycmVzcG9uZGluZyBBcHBsaWNhdGlvblN0YXRlIHByb3BlcnR5IHR5cGUuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VycyA9IHtcclxuXHR1c2VyOiBVc2VyLnJlZHVjZXIsXHJcblx0aWRlYXM6IElkZWFzLnJlZHVjZXJcclxufTtcclxuXHJcbi8vIFRoaXMgdHlwZSBjYW4gYmUgdXNlZCBhcyBhIGhpbnQgb24gYWN0aW9uIGNyZWF0b3JzIHNvIHRoYXQgaXRzICdkaXNwYXRjaCcgYW5kICdnZXRTdGF0ZScgcGFyYW1zIGFyZVxyXG4vLyBjb3JyZWN0bHkgdHlwZWQgdG8gbWF0Y2ggeW91ciBzdG9yZS5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBUaHVua0FjdGlvbjxUQWN0aW9uPiB7XHJcbiAgICAoZGlzcGF0Y2g6IChhY3Rpb246IFRBY3Rpb24pID0+IHZvaWQsIGdldFN0YXRlOiAoKSA9PiBBcHBsaWNhdGlvblN0YXRlKTogdm9pZDtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvc3RvcmUvaW5kZXgudHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxNDMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC10aHVuay9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSg3MCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=