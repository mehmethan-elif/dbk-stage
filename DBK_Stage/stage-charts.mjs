var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __esm = (fn, res, err2) => function __init() {
  if (err2) throw err2[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e) {
    throw err2 = [e], e;
  }
};
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "node_modules/react/cjs/react.development.js"(exports, module) {
    "use strict";
    (function() {
      function defineDeprecationWarning(methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              info[0],
              info[1]
            );
          }
        });
      }
      function getIteratorFn(maybeIterable) {
        if (null === maybeIterable || "object" !== typeof maybeIterable)
          return null;
        maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
        return "function" === typeof maybeIterable ? maybeIterable : null;
      }
      function warnNoop(publicInstance, callerName) {
        publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
        var warningKey = publicInstance + "." + callerName;
        didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          callerName,
          publicInstance
        ), didWarnStateUpdateForUnmountedComponent[warningKey] = true);
      }
      function Component(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      function ComponentDummy() {
      }
      function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      function noop() {
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        try {
          testStringCoercion(value);
          var JSCompiler_inline_result = false;
        } catch (e) {
          JSCompiler_inline_result = true;
        }
        if (JSCompiler_inline_result) {
          JSCompiler_inline_result = console;
          var JSCompiler_temp_const = JSCompiler_inline_result.error;
          var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          JSCompiler_temp_const.call(
            JSCompiler_inline_result,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            JSCompiler_inline_result$jscomp$0
          );
          return testStringCoercion(value);
        }
      }
      function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type)
          return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
          case REACT_ACTIVITY_TYPE:
            return "Activity";
        }
        if ("object" === typeof type)
          switch ("number" === typeof type.tag && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), type.$$typeof) {
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_CONTEXT_TYPE:
              return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
              return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
              var innerType = type.render;
              type = type.displayName;
              type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
              return type;
            case REACT_MEMO_TYPE:
              return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
              innerType = type._payload;
              type = type._init;
              try {
                return getComponentNameFromType(type(innerType));
              } catch (x2) {
              }
          }
        return null;
      }
      function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE)
          return "<...>";
        try {
          var name = getComponentNameFromType(type);
          return name ? "<" + name + ">" : "<...>";
        } catch (x2) {
          return "<...>";
        }
      }
      function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
      }
      function UnknownOwner() {
        return Error("react-stack-top-frame");
      }
      function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config, "key").get;
          if (getter && getter.isReactWarning) return false;
        }
        return void 0 !== config.key;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
          specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
        }
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
      function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
      }
      function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          props,
          _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
          enumerable: false,
          get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: null
        });
        Object.defineProperty(type, "_debugStack", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
      }
      function cloneAndReplaceKey(oldElement, newKey) {
        newKey = ReactElement(
          oldElement.type,
          newKey,
          oldElement.props,
          oldElement._owner,
          oldElement._debugStack,
          oldElement._debugTask
        );
        oldElement._store && (newKey._store.validated = oldElement._store.validated);
        return newKey;
      }
      function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
      }
      function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function escape2(key) {
        var escaperLookup = { "=": "=0", ":": "=2" };
        return "$" + key.replace(/[=:]/g, function(match) {
          return escaperLookup[match];
        });
      }
      function getElementKey(element2, index) {
        return "object" === typeof element2 && null !== element2 && null != element2.key ? (checkKeyStringCoercion(element2.key), escape2("" + element2.key)) : index.toString(36);
      }
      function resolveThenable(thenable) {
        switch (thenable.status) {
          case "fulfilled":
            return thenable.value;
          case "rejected":
            throw thenable.reason;
          default:
            switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(
              function(fulfilledValue) {
                "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
              },
              function(error) {
                "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
              }
            )), thenable.status) {
              case "fulfilled":
                return thenable.value;
              case "rejected":
                throw thenable.reason;
            }
        }
        throw thenable;
      }
      function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if ("undefined" === type || "boolean" === type) children = null;
        var invokeCallback = false;
        if (null === children) invokeCallback = true;
        else
          switch (type) {
            case "bigint":
            case "string":
            case "number":
              invokeCallback = true;
              break;
            case "object":
              switch (children.$$typeof) {
                case REACT_ELEMENT_TYPE:
                case REACT_PORTAL_TYPE:
                  invokeCallback = true;
                  break;
                case REACT_LAZY_TYPE:
                  return invokeCallback = children._init, mapIntoArray(
                    invokeCallback(children._payload),
                    array,
                    escapedPrefix,
                    nameSoFar,
                    callback
                  );
              }
          }
        if (invokeCallback) {
          invokeCallback = children;
          callback = callback(invokeCallback);
          var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
          isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
            return c;
          })) : null != callback && (isValidElement(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(
            callback,
            escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(
              userProvidedKeyEscapeRegex,
              "$&/"
            ) + "/") + childKey
          ), "" !== nameSoFar && null != invokeCallback && isValidElement(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
          return 1;
        }
        invokeCallback = 0;
        childKey = "" === nameSoFar ? "." : nameSoFar + ":";
        if (isArrayImpl(children))
          for (var i2 = 0; i2 < children.length; i2++)
            nameSoFar = children[i2], type = childKey + getElementKey(nameSoFar, i2), invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            );
        else if (i2 = getIteratorFn(children), "function" === typeof i2)
          for (i2 === children.entries && (didWarnAboutMaps || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), didWarnAboutMaps = true), children = i2.call(children), i2 = 0; !(nameSoFar = children.next()).done; )
            nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i2++), invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            );
        else if ("object" === type) {
          if ("function" === typeof children.then)
            return mapIntoArray(
              resolveThenable(children),
              array,
              escapedPrefix,
              nameSoFar,
              callback
            );
          array = String(children);
          throw Error(
            "Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return invokeCallback;
      }
      function mapChildren(children, func, context) {
        if (null == children) return children;
        var result = [], count = 0;
        mapIntoArray(children, result, "", "", function(child) {
          return func.call(context, child, count++);
        });
        return result;
      }
      function lazyInitializer(payload) {
        if (-1 === payload._status) {
          var ioInfo = payload._ioInfo;
          null != ioInfo && (ioInfo.start = ioInfo.end = performance.now());
          ioInfo = payload._result;
          var thenable = ioInfo();
          thenable.then(
            function(moduleObject) {
              if (0 === payload._status || -1 === payload._status) {
                payload._status = 1;
                payload._result = moduleObject;
                var _ioInfo = payload._ioInfo;
                null != _ioInfo && (_ioInfo.end = performance.now());
                void 0 === thenable.status && (thenable.status = "fulfilled", thenable.value = moduleObject);
              }
            },
            function(error) {
              if (0 === payload._status || -1 === payload._status) {
                payload._status = 2;
                payload._result = error;
                var _ioInfo2 = payload._ioInfo;
                null != _ioInfo2 && (_ioInfo2.end = performance.now());
                void 0 === thenable.status && (thenable.status = "rejected", thenable.reason = error);
              }
            }
          );
          ioInfo = payload._ioInfo;
          if (null != ioInfo) {
            ioInfo.value = thenable;
            var displayName = thenable.displayName;
            "string" === typeof displayName && (ioInfo.name = displayName);
          }
          -1 === payload._status && (payload._status = 0, payload._result = thenable);
        }
        if (1 === payload._status)
          return ioInfo = payload._result, void 0 === ioInfo && console.error(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
            ioInfo
          ), "default" in ioInfo || console.error(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
            ioInfo
          ), ioInfo.default;
        throw payload._result;
      }
      function resolveDispatcher() {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error(
          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
        );
        return dispatcher;
      }
      function releaseAsyncTransition() {
        ReactSharedInternals.asyncTransitions--;
      }
      function enqueueTask(task) {
        if (null === enqueueTaskImpl)
          try {
            var requireString = ("require" + Math.random()).slice(0, 7);
            enqueueTaskImpl = (module && module[requireString]).call(
              module,
              "timers"
            ).setImmediate;
          } catch (_err) {
            enqueueTaskImpl = function(callback) {
              false === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = true, "undefined" === typeof MessageChannel && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var channel = new MessageChannel();
              channel.port1.onmessage = callback;
              channel.port2.postMessage(void 0);
            };
          }
        return enqueueTaskImpl(task);
      }
      function aggregateErrors(errors) {
        return 1 < errors.length && "function" === typeof AggregateError ? new AggregateError(errors) : errors[0];
      }
      function popActScope(prevActQueue, prevActScopeDepth) {
        prevActScopeDepth !== actScopeDepth - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        );
        actScopeDepth = prevActScopeDepth;
      }
      function recursivelyFlushAsyncActWork(returnValue, resolve2, reject) {
        var queue = ReactSharedInternals.actQueue;
        if (null !== queue)
          if (0 !== queue.length)
            try {
              flushActQueue(queue);
              enqueueTask(function() {
                return recursivelyFlushAsyncActWork(returnValue, resolve2, reject);
              });
              return;
            } catch (error) {
              ReactSharedInternals.thrownErrors.push(error);
            }
          else ReactSharedInternals.actQueue = null;
        0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve2(returnValue);
      }
      function flushActQueue(queue) {
        if (!isFlushing) {
          isFlushing = true;
          var i2 = 0;
          try {
            for (; i2 < queue.length; i2++) {
              var callback = queue[i2];
              do {
                ReactSharedInternals.didUsePromise = false;
                var continuation = callback(false);
                if (null !== continuation) {
                  if (ReactSharedInternals.didUsePromise) {
                    queue[i2] = callback;
                    queue.splice(0, i2);
                    return;
                  }
                  callback = continuation;
                } else break;
              } while (1);
            }
            queue.length = 0;
          } catch (error) {
            queue.splice(0, i2 + 1), ReactSharedInternals.thrownErrors.push(error);
          } finally {
            isFlushing = false;
          }
        }
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo"), REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = /* @__PURE__ */ Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
        isMounted: function() {
          return false;
        },
        enqueueForceUpdate: function(publicInstance) {
          warnNoop(publicInstance, "forceUpdate");
        },
        enqueueReplaceState: function(publicInstance) {
          warnNoop(publicInstance, "replaceState");
        },
        enqueueSetState: function(publicInstance) {
          warnNoop(publicInstance, "setState");
        }
      }, assign = Object.assign, emptyObject = {};
      Object.freeze(emptyObject);
      Component.prototype.isReactComponent = {};
      Component.prototype.setState = function(partialState, callback) {
        if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, partialState, callback, "setState");
      };
      Component.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
      };
      var deprecatedAPIs = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (fnName in deprecatedAPIs)
        deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
      ComponentDummy.prototype = Component.prototype;
      deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
      deprecatedAPIs.constructor = PureComponent;
      assign(deprecatedAPIs, Component.prototype);
      deprecatedAPIs.isPureReactComponent = true;
      var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE = /* @__PURE__ */ Symbol.for("react.client.reference"), ReactSharedInternals = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        asyncTransitions: 0,
        isBatchingLegacy: false,
        didScheduleLegacyUpdate: false,
        didUsePromise: false,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, hasOwnProperty = Object.prototype.hasOwnProperty, createTask = console.createTask ? console.createTask : function() {
        return null;
      };
      deprecatedAPIs = {
        react_stack_bottom_frame: function(callStackForError) {
          return callStackForError();
        }
      };
      var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
      var didWarnAboutElementRef = {};
      var unknownOwnerDebugStack = deprecatedAPIs.react_stack_bottom_frame.bind(
        deprecatedAPIs,
        UnknownOwner
      )();
      var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
      var didWarnAboutMaps = false, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
        if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
          var event = new window.ErrorEvent("error", {
            bubbles: true,
            cancelable: true,
            message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
            error
          });
          if (!window.dispatchEvent(event)) return;
        } else if ("object" === typeof process && "function" === typeof process.emit) {
          process.emit("uncaughtException", error);
          return;
        }
        console.error(error);
      }, didWarnAboutMessageChannel = false, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = false, isFlushing = false, queueSeveralMicrotasks = "function" === typeof queueMicrotask ? function(callback) {
        queueMicrotask(function() {
          return queueMicrotask(callback);
        });
      } : enqueueTask;
      deprecatedAPIs = Object.freeze({
        __proto__: null,
        c: function(size) {
          return resolveDispatcher().useMemoCache(size);
        }
      });
      var fnName = {
        map: mapChildren,
        forEach: function(children, forEachFunc, forEachContext) {
          mapChildren(
            children,
            function() {
              forEachFunc.apply(this, arguments);
            },
            forEachContext
          );
        },
        count: function(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        },
        toArray: function(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        },
        only: function(children) {
          if (!isValidElement(children))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return children;
        }
      };
      exports.Activity = REACT_ACTIVITY_TYPE;
      exports.Children = fnName;
      exports.Component = Component;
      exports.Fragment = REACT_FRAGMENT_TYPE;
      exports.Profiler = REACT_PROFILER_TYPE;
      exports.PureComponent = PureComponent;
      exports.StrictMode = REACT_STRICT_MODE_TYPE;
      exports.Suspense = REACT_SUSPENSE_TYPE;
      exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
      exports.__COMPILER_RUNTIME = deprecatedAPIs;
      exports.act = function(callback) {
        var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
        actScopeDepth++;
        var queue = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [], didAwaitActCall = false;
        try {
          var result = callback();
        } catch (error) {
          ReactSharedInternals.thrownErrors.push(error);
        }
        if (0 < ReactSharedInternals.thrownErrors.length)
          throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        if (null !== result && "object" === typeof result && "function" === typeof result.then) {
          var thenable = result;
          queueSeveralMicrotasks(function() {
            didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          });
          return {
            then: function(resolve2, reject) {
              didAwaitActCall = true;
              thenable.then(
                function(returnValue) {
                  popActScope(prevActQueue, prevActScopeDepth);
                  if (0 === prevActScopeDepth) {
                    try {
                      flushActQueue(queue), enqueueTask(function() {
                        return recursivelyFlushAsyncActWork(
                          returnValue,
                          resolve2,
                          reject
                        );
                      });
                    } catch (error$0) {
                      ReactSharedInternals.thrownErrors.push(error$0);
                    }
                    if (0 < ReactSharedInternals.thrownErrors.length) {
                      var _thrownError = aggregateErrors(
                        ReactSharedInternals.thrownErrors
                      );
                      ReactSharedInternals.thrownErrors.length = 0;
                      reject(_thrownError);
                    }
                  } else resolve2(returnValue);
                },
                function(error) {
                  popActScope(prevActQueue, prevActScopeDepth);
                  0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(
                    ReactSharedInternals.thrownErrors
                  ), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
                }
              );
            }
          };
        }
        var returnValue$jscomp$0 = result;
        popActScope(prevActQueue, prevActScopeDepth);
        0 === prevActScopeDepth && (flushActQueue(queue), 0 !== queue.length && queueSeveralMicrotasks(function() {
          didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), ReactSharedInternals.actQueue = null);
        if (0 < ReactSharedInternals.thrownErrors.length)
          throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        return {
          then: function(resolve2, reject) {
            didAwaitActCall = true;
            0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
              return recursivelyFlushAsyncActWork(
                returnValue$jscomp$0,
                resolve2,
                reject
              );
            })) : resolve2(returnValue$jscomp$0);
          }
        };
      };
      exports.cache = function(fn) {
        return function() {
          return fn.apply(null, arguments);
        };
      };
      exports.cacheSignal = function() {
        return null;
      };
      exports.captureOwnerStack = function() {
        var getCurrentStack = ReactSharedInternals.getCurrentStack;
        return null === getCurrentStack ? null : getCurrentStack();
      };
      exports.cloneElement = function(element2, config, children) {
        if (null === element2 || void 0 === element2)
          throw Error(
            "The argument must be a React element, but you passed " + element2 + "."
          );
        var props = assign({}, element2.props), key = element2.key, owner = element2._owner;
        if (null != config) {
          var JSCompiler_inline_result;
          a: {
            if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(
              config,
              "ref"
            ).get) && JSCompiler_inline_result.isReactWarning) {
              JSCompiler_inline_result = false;
              break a;
            }
            JSCompiler_inline_result = void 0 !== config.ref;
          }
          JSCompiler_inline_result && (owner = getOwner());
          hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
          for (propName in config)
            !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
        }
        var propName = arguments.length - 2;
        if (1 === propName) props.children = children;
        else if (1 < propName) {
          JSCompiler_inline_result = Array(propName);
          for (var i2 = 0; i2 < propName; i2++)
            JSCompiler_inline_result[i2] = arguments[i2 + 2];
          props.children = JSCompiler_inline_result;
        }
        props = ReactElement(
          element2.type,
          key,
          props,
          owner,
          element2._debugStack,
          element2._debugTask
        );
        for (key = 2; key < arguments.length; key++)
          validateChildKeys(arguments[key]);
        return props;
      };
      exports.createContext = function(defaultValue) {
        defaultValue = {
          $$typeof: REACT_CONTEXT_TYPE,
          _currentValue: defaultValue,
          _currentValue2: defaultValue,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        };
        defaultValue.Provider = defaultValue;
        defaultValue.Consumer = {
          $$typeof: REACT_CONSUMER_TYPE,
          _context: defaultValue
        };
        defaultValue._currentRenderer = null;
        defaultValue._currentRenderer2 = null;
        return defaultValue;
      };
      exports.createElement = function(type, config, children) {
        for (var i2 = 2; i2 < arguments.length; i2++)
          validateChildKeys(arguments[i2]);
        i2 = {};
        var key = null;
        if (null != config)
          for (propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = true, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key), config)
            hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i2[propName] = config[propName]);
        var childrenLength = arguments.length - 2;
        if (1 === childrenLength) i2.children = children;
        else if (1 < childrenLength) {
          for (var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++)
            childArray[_i] = arguments[_i + 2];
          Object.freeze && Object.freeze(childArray);
          i2.children = childArray;
        }
        if (type && type.defaultProps)
          for (propName in childrenLength = type.defaultProps, childrenLength)
            void 0 === i2[propName] && (i2[propName] = childrenLength[propName]);
        key && defineKeyPropWarningGetter(
          i2,
          "function" === typeof type ? type.displayName || type.name || "Unknown" : type
        );
        var propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return ReactElement(
          type,
          key,
          i2,
          getOwner(),
          propName ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
          propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask
        );
      };
      exports.createRef = function() {
        var refObject = { current: null };
        Object.seal(refObject);
        return refObject;
      };
      exports.forwardRef = function(render) {
        null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : "function" !== typeof render ? console.error(
          "forwardRef requires a render function but was given %s.",
          null === render ? "null" : typeof render
        ) : 0 !== render.length && 2 !== render.length && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        );
        null != render && null != render.defaultProps && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render }, ownName;
        Object.defineProperty(elementType, "displayName", {
          enumerable: false,
          configurable: true,
          get: function() {
            return ownName;
          },
          set: function(name) {
            ownName = name;
            render.name || render.displayName || (Object.defineProperty(render, "name", { value: name }), render.displayName = name);
          }
        });
        return elementType;
      };
      exports.isValidElement = isValidElement;
      exports.lazy = function(ctor) {
        ctor = { _status: -1, _result: ctor };
        var lazyType = {
          $$typeof: REACT_LAZY_TYPE,
          _payload: ctor,
          _init: lazyInitializer
        }, ioInfo = {
          name: "lazy",
          start: -1,
          end: -1,
          value: null,
          owner: null,
          debugStack: Error("react-stack-top-frame"),
          debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        ctor._ioInfo = ioInfo;
        lazyType._debugInfo = [{ awaited: ioInfo }];
        return lazyType;
      };
      exports.memo = function(type, compare) {
        null == type && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          null === type ? "null" : typeof type
        );
        compare = {
          $$typeof: REACT_MEMO_TYPE,
          type,
          compare: void 0 === compare ? null : compare
        };
        var ownName;
        Object.defineProperty(compare, "displayName", {
          enumerable: false,
          configurable: true,
          get: function() {
            return ownName;
          },
          set: function(name) {
            ownName = name;
            type.name || type.displayName || (Object.defineProperty(type, "name", { value: name }), type.displayName = name);
          }
        });
        return compare;
      };
      exports.startTransition = function(scope) {
        var prevTransition = ReactSharedInternals.T, currentTransition = {};
        currentTransition._updatedFibers = /* @__PURE__ */ new Set();
        ReactSharedInternals.T = currentTransition;
        try {
          var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
          null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
          "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && (ReactSharedInternals.asyncTransitions++, returnValue.then(releaseAsyncTransition, releaseAsyncTransition), returnValue.then(noop, reportGlobalError));
        } catch (error) {
          reportGlobalError(error);
        } finally {
          null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), null !== prevTransition && null !== currentTransition.types && (null !== prevTransition.types && prevTransition.types !== currentTransition.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
        }
      };
      exports.unstable_useCacheRefresh = function() {
        return resolveDispatcher().useCacheRefresh();
      };
      exports.use = function(usable) {
        return resolveDispatcher().use(usable);
      };
      exports.useActionState = function(action, initialState, permalink) {
        return resolveDispatcher().useActionState(
          action,
          initialState,
          permalink
        );
      };
      exports.useCallback = function(callback, deps) {
        return resolveDispatcher().useCallback(callback, deps);
      };
      exports.useContext = function(Context) {
        var dispatcher = resolveDispatcher();
        Context.$$typeof === REACT_CONSUMER_TYPE && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        );
        return dispatcher.useContext(Context);
      };
      exports.useDebugValue = function(value, formatterFn) {
        return resolveDispatcher().useDebugValue(value, formatterFn);
      };
      exports.useDeferredValue = function(value, initialValue) {
        return resolveDispatcher().useDeferredValue(value, initialValue);
      };
      exports.useEffect = function(create2, deps) {
        null == create2 && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useEffect(create2, deps);
      };
      exports.useEffectEvent = function(callback) {
        return resolveDispatcher().useEffectEvent(callback);
      };
      exports.useId = function() {
        return resolveDispatcher().useId();
      };
      exports.useImperativeHandle = function(ref, create2, deps) {
        return resolveDispatcher().useImperativeHandle(ref, create2, deps);
      };
      exports.useInsertionEffect = function(create2, deps) {
        null == create2 && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useInsertionEffect(create2, deps);
      };
      exports.useLayoutEffect = function(create2, deps) {
        null == create2 && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useLayoutEffect(create2, deps);
      };
      exports.useMemo = function(create2, deps) {
        return resolveDispatcher().useMemo(create2, deps);
      };
      exports.useOptimistic = function(passthrough, reducer) {
        return resolveDispatcher().useOptimistic(passthrough, reducer);
      };
      exports.useReducer = function(reducer, initialArg, init) {
        return resolveDispatcher().useReducer(reducer, initialArg, init);
      };
      exports.useRef = function(initialValue) {
        return resolveDispatcher().useRef(initialValue);
      };
      exports.useState = function(initialState) {
        return resolveDispatcher().useState(initialState);
      };
      exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
        return resolveDispatcher().useSyncExternalStore(
          subscribe,
          getSnapshot,
          getServerSnapshot
        );
      };
      exports.useTransition = function() {
        return resolveDispatcher().useTransition();
      };
      exports.version = "19.2.8";
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_development();
    }
  }
});

// node_modules/@capacitor/core/dist/index.js
var ExceptionCode, CapacitorException, getPlatformId, createCapacitor, initCapacitorGlobal, Capacitor, registerPlugin, WebPlugin, encode, decode, CapacitorCookiesPluginWeb, CapacitorCookies, readBlobAsBase64, normalizeHttpHeaders, buildUrlParams, buildRequestInit, CapacitorHttpPluginWeb, CapacitorHttp, SystemBarsStyle, SystemBarType, SystemBarsPluginWeb, SystemBars;
var init_dist = __esm({
  "node_modules/@capacitor/core/dist/index.js"() {
    (function(ExceptionCode2) {
      ExceptionCode2["Unimplemented"] = "UNIMPLEMENTED";
      ExceptionCode2["Unavailable"] = "UNAVAILABLE";
    })(ExceptionCode || (ExceptionCode = {}));
    CapacitorException = class extends Error {
      constructor(message, code, data) {
        super(message);
        this.message = message;
        this.code = code;
        this.data = data;
      }
    };
    getPlatformId = (win) => {
      var _a2, _b2;
      if (win === null || win === void 0 ? void 0 : win.androidBridge) {
        return "android";
      } else if ((_b2 = (_a2 = win === null || win === void 0 ? void 0 : win.webkit) === null || _a2 === void 0 ? void 0 : _a2.messageHandlers) === null || _b2 === void 0 ? void 0 : _b2.bridge) {
        return "ios";
      } else {
        return "web";
      }
    };
    createCapacitor = (win) => {
      const capCustomPlatform = win.CapacitorCustomPlatform || null;
      const cap = win.Capacitor || {};
      const Plugins = cap.Plugins = cap.Plugins || {};
      const getPlatform = () => {
        return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
      };
      const isNativePlatform = () => getPlatform() !== "web";
      const isPluginAvailable = (pluginName) => {
        const plugin = registeredPlugins.get(pluginName);
        if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
          return true;
        }
        if (getPluginHeader(pluginName)) {
          return true;
        }
        return false;
      };
      const getPluginHeader = (pluginName) => {
        var _a2;
        return (_a2 = cap.PluginHeaders) === null || _a2 === void 0 ? void 0 : _a2.find((h) => h.name === pluginName);
      };
      const handleError = (err2) => win.console.error(err2);
      const registeredPlugins = /* @__PURE__ */ new Map();
      const registerPlugin2 = (pluginName, jsImplementations = {}) => {
        const registeredPlugin = registeredPlugins.get(pluginName);
        if (registeredPlugin) {
          console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
          return registeredPlugin.proxy;
        }
        const platform = getPlatform();
        const pluginHeader = getPluginHeader(pluginName);
        let jsImplementation;
        const loadPluginImplementation = async () => {
          if (!jsImplementation && platform in jsImplementations) {
            jsImplementation = typeof jsImplementations[platform] === "function" ? jsImplementation = await jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
          } else if (capCustomPlatform !== null && !jsImplementation && "web" in jsImplementations) {
            jsImplementation = typeof jsImplementations["web"] === "function" ? jsImplementation = await jsImplementations["web"]() : jsImplementation = jsImplementations["web"];
          }
          return jsImplementation;
        };
        const createPluginMethod = (impl, prop) => {
          var _a2, _b2;
          if (pluginHeader) {
            const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find((m) => prop === m.name);
            if (methodHeader) {
              if (methodHeader.rtype === "promise") {
                return (options) => cap.nativePromise(pluginName, prop.toString(), options);
              } else {
                return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
              }
            } else if (impl) {
              return (_a2 = impl[prop]) === null || _a2 === void 0 ? void 0 : _a2.bind(impl);
            }
          } else if (impl) {
            return (_b2 = impl[prop]) === null || _b2 === void 0 ? void 0 : _b2.bind(impl);
          } else {
            throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
          }
        };
        const createPluginMethodWrapper = (prop) => {
          let remove;
          const wrapper = (...args) => {
            const p = loadPluginImplementation().then((impl) => {
              const fn = createPluginMethod(impl, prop);
              if (fn) {
                const p2 = fn(...args);
                remove = p2 === null || p2 === void 0 ? void 0 : p2.remove;
                return p2;
              } else {
                throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
              }
            });
            if (prop === "addListener") {
              p.remove = async () => remove();
            }
            return p;
          };
          wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;
          Object.defineProperty(wrapper, "name", {
            value: prop,
            writable: false,
            configurable: false
          });
          return wrapper;
        };
        const addListener = createPluginMethodWrapper("addListener");
        const removeListener = createPluginMethodWrapper("removeListener");
        const addListenerNative = (eventName, callback) => {
          const call = addListener({ eventName }, callback);
          const remove = async () => {
            const callbackId = await call;
            removeListener({
              eventName,
              callbackId
            }, callback);
          };
          const p = new Promise((resolve2) => call.then(() => resolve2({ remove })));
          p.remove = async () => {
            console.warn(`Using addListener() without 'await' is deprecated.`);
            await remove();
          };
          return p;
        };
        const proxy = new Proxy({}, {
          get(_, prop) {
            switch (prop) {
              // https://github.com/facebook/react/issues/20030
              case "$$typeof":
                return void 0;
              case "toJSON":
                return () => ({});
              case "addListener":
                return pluginHeader ? addListenerNative : addListener;
              case "removeListener":
                return removeListener;
              default:
                return createPluginMethodWrapper(prop);
            }
          }
        });
        Plugins[pluginName] = proxy;
        registeredPlugins.set(pluginName, {
          name: pluginName,
          proxy,
          platforms: /* @__PURE__ */ new Set([...Object.keys(jsImplementations), ...pluginHeader ? [platform] : []])
        });
        return proxy;
      };
      if (!cap.convertFileSrc) {
        cap.convertFileSrc = (filePath) => filePath;
      }
      cap.getPlatform = getPlatform;
      cap.handleError = handleError;
      cap.isNativePlatform = isNativePlatform;
      cap.isPluginAvailable = isPluginAvailable;
      cap.registerPlugin = registerPlugin2;
      cap.Exception = CapacitorException;
      cap.DEBUG = !!cap.DEBUG;
      cap.isLoggingEnabled = !!cap.isLoggingEnabled;
      return cap;
    };
    initCapacitorGlobal = (win) => win.Capacitor = createCapacitor(win);
    Capacitor = /* @__PURE__ */ initCapacitorGlobal(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    registerPlugin = Capacitor.registerPlugin;
    WebPlugin = class {
      constructor() {
        this.listeners = {};
        this.retainedEventArguments = {};
        this.windowListeners = {};
      }
      addListener(eventName, listenerFunc) {
        let firstListener = false;
        const listeners2 = this.listeners[eventName];
        if (!listeners2) {
          this.listeners[eventName] = [];
          firstListener = true;
        }
        this.listeners[eventName].push(listenerFunc);
        const windowListener = this.windowListeners[eventName];
        if (windowListener && !windowListener.registered) {
          this.addWindowListener(windowListener);
        }
        if (firstListener) {
          this.sendRetainedArgumentsForEvent(eventName);
        }
        const remove = async () => this.removeListener(eventName, listenerFunc);
        const p = Promise.resolve({ remove });
        return p;
      }
      async removeAllListeners() {
        this.listeners = {};
        for (const listener in this.windowListeners) {
          this.removeWindowListener(this.windowListeners[listener]);
        }
        this.windowListeners = {};
      }
      notifyListeners(eventName, data, retainUntilConsumed) {
        const listeners2 = this.listeners[eventName];
        if (!listeners2) {
          if (retainUntilConsumed) {
            let args = this.retainedEventArguments[eventName];
            if (!args) {
              args = [];
            }
            args.push(data);
            this.retainedEventArguments[eventName] = args;
          }
          return;
        }
        listeners2.forEach((listener) => listener(data));
      }
      hasListeners(eventName) {
        var _a2;
        return !!((_a2 = this.listeners[eventName]) === null || _a2 === void 0 ? void 0 : _a2.length);
      }
      registerWindowListener(windowEventName, pluginEventName) {
        this.windowListeners[pluginEventName] = {
          registered: false,
          windowEventName,
          pluginEventName,
          handler: (event) => {
            this.notifyListeners(pluginEventName, event);
          }
        };
      }
      unimplemented(msg = "not implemented") {
        return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
      }
      unavailable(msg = "not available") {
        return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
      }
      async removeListener(eventName, listenerFunc) {
        const listeners2 = this.listeners[eventName];
        if (!listeners2) {
          return;
        }
        const index = listeners2.indexOf(listenerFunc);
        if (index !== -1) {
          this.listeners[eventName].splice(index, 1);
        }
        if (!this.listeners[eventName].length) {
          this.removeWindowListener(this.windowListeners[eventName]);
        }
      }
      addWindowListener(handle) {
        window.addEventListener(handle.windowEventName, handle.handler);
        handle.registered = true;
      }
      removeWindowListener(handle) {
        if (!handle) {
          return;
        }
        window.removeEventListener(handle.windowEventName, handle.handler);
        handle.registered = false;
      }
      sendRetainedArgumentsForEvent(eventName) {
        const args = this.retainedEventArguments[eventName];
        if (!args) {
          return;
        }
        delete this.retainedEventArguments[eventName];
        args.forEach((arg) => {
          this.notifyListeners(eventName, arg);
        });
      }
    };
    encode = (str) => encodeURIComponent(str).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
    decode = (str) => str.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
    CapacitorCookiesPluginWeb = class extends WebPlugin {
      async getCookies() {
        const cookies = document.cookie;
        const cookieMap = {};
        cookies.split(";").forEach((cookie) => {
          if (cookie.length <= 0)
            return;
          let [key, value] = cookie.replace(/=/, "CAP_COOKIE").split("CAP_COOKIE");
          key = decode(key).trim();
          value = decode(value).trim();
          cookieMap[key] = value;
        });
        return cookieMap;
      }
      async setCookie(options) {
        try {
          const encodedKey = encode(options.key);
          const encodedValue = encode(options.value);
          const expires = options.expires ? `; expires=${options.expires.replace("expires=", "")}` : "";
          const path = (options.path || "/").replace("path=", "");
          const domain = options.url != null && options.url.length > 0 ? `domain=${options.url}` : "";
          document.cookie = `${encodedKey}=${encodedValue || ""}${expires}; path=${path}; ${domain};`;
        } catch (error) {
          return Promise.reject(error);
        }
      }
      async deleteCookie(options) {
        try {
          document.cookie = `${options.key}=; Max-Age=0`;
        } catch (error) {
          return Promise.reject(error);
        }
      }
      async clearCookies() {
        try {
          const cookies = document.cookie.split(";") || [];
          for (const cookie of cookies) {
            document.cookie = cookie.replace(/^ +/, "").replace(/=.*/, `=;expires=${(/* @__PURE__ */ new Date()).toUTCString()};path=/`);
          }
        } catch (error) {
          return Promise.reject(error);
        }
      }
      async clearAllCookies() {
        try {
          await this.clearCookies();
        } catch (error) {
          return Promise.reject(error);
        }
      }
    };
    CapacitorCookies = registerPlugin("CapacitorCookies", {
      web: () => new CapacitorCookiesPluginWeb()
    });
    readBlobAsBase64 = async (blob) => new Promise((resolve2, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result;
        resolve2(base64String.indexOf(",") >= 0 ? base64String.split(",")[1] : base64String);
      };
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(blob);
    });
    normalizeHttpHeaders = (headers = {}) => {
      const originalKeys = Object.keys(headers);
      const loweredKeys = Object.keys(headers).map((k) => k.toLocaleLowerCase());
      const normalized = loweredKeys.reduce((acc, key, index) => {
        acc[key] = headers[originalKeys[index]];
        return acc;
      }, {});
      return normalized;
    };
    buildUrlParams = (params, shouldEncode = true) => {
      if (!params)
        return null;
      const output = Object.entries(params).reduce((accumulator, entry) => {
        const [key, value] = entry;
        let encodedValue;
        let item;
        if (Array.isArray(value)) {
          item = "";
          value.forEach((str) => {
            encodedValue = shouldEncode ? encodeURIComponent(str) : str;
            item += `${key}=${encodedValue}&`;
          });
          item.slice(0, -1);
        } else {
          encodedValue = shouldEncode ? encodeURIComponent(value) : value;
          item = `${key}=${encodedValue}`;
        }
        return `${accumulator}&${item}`;
      }, "");
      return output.substr(1);
    };
    buildRequestInit = (options, extra = {}) => {
      const output = Object.assign({ method: options.method || "GET", headers: options.headers }, extra);
      const headers = normalizeHttpHeaders(options.headers);
      const type = headers["content-type"] || "";
      if (typeof options.data === "string") {
        output.body = options.data;
      } else if (type.includes("application/x-www-form-urlencoded")) {
        const params = new URLSearchParams();
        for (const [key, value] of Object.entries(options.data || {})) {
          params.set(key, value);
        }
        output.body = params.toString();
      } else if (type.includes("multipart/form-data") || options.data instanceof FormData) {
        const form = new FormData();
        if (options.data instanceof FormData) {
          options.data.forEach((value, key) => {
            form.append(key, value);
          });
        } else {
          for (const key of Object.keys(options.data)) {
            form.append(key, options.data[key]);
          }
        }
        output.body = form;
        const headers2 = new Headers(output.headers);
        headers2.delete("content-type");
        output.headers = headers2;
      } else if (type.includes("application/json") || typeof options.data === "object") {
        output.body = JSON.stringify(options.data);
      }
      return output;
    };
    CapacitorHttpPluginWeb = class extends WebPlugin {
      /**
       * Perform an Http request given a set of options
       * @param options Options to build the HTTP request
       */
      async request(options) {
        const requestInit = buildRequestInit(options, options.webFetchExtra);
        const urlParams = buildUrlParams(options.params, options.shouldEncodeUrlParams);
        const url = urlParams ? `${options.url}?${urlParams}` : options.url;
        const response = await fetch(url, requestInit);
        const contentType = response.headers.get("content-type") || "";
        let { responseType = "text" } = response.ok ? options : {};
        if (contentType.includes("application/json")) {
          responseType = "json";
        }
        let data;
        let blob;
        switch (responseType) {
          case "arraybuffer":
          case "blob":
            blob = await response.blob();
            data = await readBlobAsBase64(blob);
            break;
          case "json":
            data = await response.json();
            break;
          case "document":
          case "text":
          default:
            data = await response.text();
        }
        const headers = {};
        response.headers.forEach((value, key) => {
          headers[key] = value;
        });
        return {
          data,
          headers,
          status: response.status,
          url: response.url
        };
      }
      /**
       * Perform an Http GET request given a set of options
       * @param options Options to build the HTTP request
       */
      async get(options) {
        return this.request(Object.assign(Object.assign({}, options), { method: "GET" }));
      }
      /**
       * Perform an Http POST request given a set of options
       * @param options Options to build the HTTP request
       */
      async post(options) {
        return this.request(Object.assign(Object.assign({}, options), { method: "POST" }));
      }
      /**
       * Perform an Http PUT request given a set of options
       * @param options Options to build the HTTP request
       */
      async put(options) {
        return this.request(Object.assign(Object.assign({}, options), { method: "PUT" }));
      }
      /**
       * Perform an Http PATCH request given a set of options
       * @param options Options to build the HTTP request
       */
      async patch(options) {
        return this.request(Object.assign(Object.assign({}, options), { method: "PATCH" }));
      }
      /**
       * Perform an Http DELETE request given a set of options
       * @param options Options to build the HTTP request
       */
      async delete(options) {
        return this.request(Object.assign(Object.assign({}, options), { method: "DELETE" }));
      }
    };
    CapacitorHttp = registerPlugin("CapacitorHttp", {
      web: () => new CapacitorHttpPluginWeb()
    });
    (function(SystemBarsStyle2) {
      SystemBarsStyle2["Dark"] = "DARK";
      SystemBarsStyle2["Light"] = "LIGHT";
      SystemBarsStyle2["Default"] = "DEFAULT";
    })(SystemBarsStyle || (SystemBarsStyle = {}));
    (function(SystemBarType2) {
      SystemBarType2["StatusBar"] = "StatusBar";
      SystemBarType2["NavigationBar"] = "NavigationBar";
    })(SystemBarType || (SystemBarType = {}));
    SystemBarsPluginWeb = class extends WebPlugin {
      async setStyle() {
        this.unavailable("not available for web");
      }
      async setAnimation() {
        this.unavailable("not available for web");
      }
      async show() {
        this.unavailable("not available for web");
      }
      async hide() {
        this.unavailable("not available for web");
      }
    };
    SystemBars = registerPlugin("SystemBars", {
      web: () => new SystemBarsPluginWeb()
    });
  }
});

// node_modules/@capacitor/filesystem/dist/esm/definitions.js
var Directory, Encoding;
var init_definitions = __esm({
  "node_modules/@capacitor/filesystem/dist/esm/definitions.js"() {
    (function(Directory2) {
      Directory2["Documents"] = "DOCUMENTS";
      Directory2["Data"] = "DATA";
      Directory2["Library"] = "LIBRARY";
      Directory2["Cache"] = "CACHE";
      Directory2["External"] = "EXTERNAL";
      Directory2["ExternalStorage"] = "EXTERNAL_STORAGE";
      Directory2["ExternalCache"] = "EXTERNAL_CACHE";
      Directory2["LibraryNoCloud"] = "LIBRARY_NO_CLOUD";
      Directory2["Temporary"] = "TEMPORARY";
    })(Directory || (Directory = {}));
    (function(Encoding2) {
      Encoding2["UTF8"] = "utf8";
      Encoding2["ASCII"] = "ascii";
      Encoding2["UTF16"] = "utf16";
    })(Encoding || (Encoding = {}));
  }
});

// node_modules/@capacitor/filesystem/dist/esm/web.js
var web_exports = {};
__export(web_exports, {
  FilesystemWeb: () => FilesystemWeb
});
function resolve(path) {
  const posix = path.split("/").filter((item) => item !== ".");
  const newPosix = [];
  posix.forEach((item) => {
    if (item === ".." && newPosix.length > 0 && newPosix[newPosix.length - 1] !== "..") {
      newPosix.pop();
    } else {
      newPosix.push(item);
    }
  });
  return newPosix.join("/");
}
function isPathParent(parent, children) {
  parent = resolve(parent);
  children = resolve(children);
  const pathsA = parent.split("/");
  const pathsB = children.split("/");
  return parent !== children && pathsA.every((value, index) => value === pathsB[index]);
}
var FilesystemWeb;
var init_web = __esm({
  "node_modules/@capacitor/filesystem/dist/esm/web.js"() {
    init_dist();
    init_definitions();
    FilesystemWeb = class _FilesystemWeb extends WebPlugin {
      constructor() {
        super(...arguments);
        this.DB_VERSION = 1;
        this.DB_NAME = "Disc";
        this._writeCmds = ["add", "put", "delete"];
        this.downloadFile = async (options) => {
          var _a2, _b2;
          const requestInit = buildRequestInit(options, options.webFetchExtra);
          const response = await fetch(options.url, requestInit);
          let blob;
          if (!options.progress)
            blob = await response.blob();
          else if (!(response === null || response === void 0 ? void 0 : response.body))
            blob = new Blob();
          else {
            const reader = response.body.getReader();
            let bytes2 = 0;
            const chunks = [];
            const contentType = response.headers.get("content-type");
            const contentLength = parseInt(response.headers.get("content-length") || "0", 10);
            while (true) {
              const { done, value } = await reader.read();
              if (done)
                break;
              chunks.push(value);
              bytes2 += (value === null || value === void 0 ? void 0 : value.length) || 0;
              const status = {
                url: options.url,
                bytes: bytes2,
                contentLength
              };
              this.notifyListeners("progress", status);
            }
            const allChunks = new Uint8Array(bytes2);
            let position = 0;
            for (const chunk of chunks) {
              if (typeof chunk === "undefined")
                continue;
              allChunks.set(chunk, position);
              position += chunk.length;
            }
            blob = new Blob([allChunks.buffer], { type: contentType || void 0 });
          }
          const result = await this.writeFile({
            path: options.path,
            directory: (_a2 = options.directory) !== null && _a2 !== void 0 ? _a2 : void 0,
            recursive: (_b2 = options.recursive) !== null && _b2 !== void 0 ? _b2 : false,
            data: blob
          });
          return { path: result.uri, blob };
        };
      }
      readFileInChunks(_options, _callback) {
        throw this.unavailable("Method not implemented.");
      }
      async initDb() {
        if (this._db !== void 0) {
          return this._db;
        }
        if (!("indexedDB" in window)) {
          throw this.unavailable("This browser doesn't support IndexedDB");
        }
        return new Promise((resolve2, reject) => {
          const request = indexedDB.open(this.DB_NAME, this.DB_VERSION);
          request.onupgradeneeded = _FilesystemWeb.doUpgrade;
          request.onsuccess = () => {
            this._db = request.result;
            resolve2(request.result);
          };
          request.onerror = () => reject(request.error);
          request.onblocked = () => {
            console.warn("db blocked");
          };
        });
      }
      static doUpgrade(event) {
        const eventTarget = event.target;
        const db3 = eventTarget.result;
        switch (event.oldVersion) {
          case 0:
          case 1:
          default: {
            if (db3.objectStoreNames.contains("FileStorage")) {
              db3.deleteObjectStore("FileStorage");
            }
            const store = db3.createObjectStore("FileStorage", { keyPath: "path" });
            store.createIndex("by_folder", "folder");
          }
        }
      }
      async dbRequest(cmd, args) {
        const readFlag = this._writeCmds.indexOf(cmd) !== -1 ? "readwrite" : "readonly";
        return this.initDb().then((conn) => {
          return new Promise((resolve2, reject) => {
            const tx = conn.transaction(["FileStorage"], readFlag);
            const store = tx.objectStore("FileStorage");
            const req = store[cmd](...args);
            req.onsuccess = () => resolve2(req.result);
            req.onerror = () => reject(req.error);
          });
        });
      }
      async dbIndexRequest(indexName, cmd, args) {
        const readFlag = this._writeCmds.indexOf(cmd) !== -1 ? "readwrite" : "readonly";
        return this.initDb().then((conn) => {
          return new Promise((resolve2, reject) => {
            const tx = conn.transaction(["FileStorage"], readFlag);
            const store = tx.objectStore("FileStorage");
            const index = store.index(indexName);
            const req = index[cmd](...args);
            req.onsuccess = () => resolve2(req.result);
            req.onerror = () => reject(req.error);
          });
        });
      }
      getPath(directory, uriPath) {
        const cleanedUriPath = uriPath !== void 0 ? uriPath.replace(/^[/]+|[/]+$/g, "") : "";
        let fsPath = "";
        if (directory !== void 0)
          fsPath += "/" + directory;
        if (uriPath !== "")
          fsPath += "/" + cleanedUriPath;
        return fsPath;
      }
      async clear() {
        const conn = await this.initDb();
        const tx = conn.transaction(["FileStorage"], "readwrite");
        const store = tx.objectStore("FileStorage");
        store.clear();
      }
      /**
       * Read a file from disk
       * @param options options for the file read
       * @return a promise that resolves with the read file data result
       */
      async readFile(options) {
        const path = this.getPath(options.directory, options.path);
        const entry = await this.dbRequest("get", [path]);
        if (entry === void 0)
          throw Error("File does not exist.");
        return { data: entry.content ? entry.content : "" };
      }
      /**
       * Write a file to disk in the specified location on device
       * @param options options for the file write
       * @return a promise that resolves with the file write result
       */
      async writeFile(options) {
        const path = this.getPath(options.directory, options.path);
        let data = options.data;
        const encoding = options.encoding;
        const doRecursive = options.recursive;
        const occupiedEntry = await this.dbRequest("get", [path]);
        if (occupiedEntry && occupiedEntry.type === "directory")
          throw Error("The supplied path is a directory.");
        const parentPath = path.substr(0, path.lastIndexOf("/"));
        const parentEntry = await this.dbRequest("get", [parentPath]);
        if (parentEntry === void 0) {
          const subDirIndex = parentPath.indexOf("/", 1);
          if (subDirIndex !== -1) {
            const parentArgPath = parentPath.substr(subDirIndex);
            await this.mkdir({
              path: parentArgPath,
              directory: options.directory,
              recursive: doRecursive
            });
          }
        }
        if (!encoding && !(data instanceof Blob)) {
          data = data.indexOf(",") >= 0 ? data.split(",")[1] : data;
          if (!this.isBase64String(data))
            throw Error("The supplied data is not valid base64 content.");
        }
        const now = Date.now();
        const pathObj = {
          path,
          folder: parentPath,
          type: "file",
          size: data instanceof Blob ? data.size : data.length,
          ctime: now,
          mtime: now,
          content: data
        };
        await this.dbRequest("put", [pathObj]);
        return {
          uri: pathObj.path
        };
      }
      /**
       * Append to a file on disk in the specified location on device
       * @param options options for the file append
       * @return a promise that resolves with the file write result
       */
      async appendFile(options) {
        const path = this.getPath(options.directory, options.path);
        let data = options.data;
        const encoding = options.encoding;
        const parentPath = path.substr(0, path.lastIndexOf("/"));
        const now = Date.now();
        let ctime = now;
        const occupiedEntry = await this.dbRequest("get", [path]);
        if (occupiedEntry && occupiedEntry.type === "directory")
          throw Error("The supplied path is a directory.");
        const parentEntry = await this.dbRequest("get", [parentPath]);
        if (parentEntry === void 0) {
          const subDirIndex = parentPath.indexOf("/", 1);
          if (subDirIndex !== -1) {
            const parentArgPath = parentPath.substr(subDirIndex);
            await this.mkdir({
              path: parentArgPath,
              directory: options.directory,
              recursive: true
            });
          }
        }
        if (!encoding && !this.isBase64String(data))
          throw Error("The supplied data is not valid base64 content.");
        if (occupiedEntry !== void 0) {
          if (occupiedEntry.content instanceof Blob) {
            throw Error("The occupied entry contains a Blob object which cannot be appended to.");
          }
          if (occupiedEntry.content !== void 0 && !encoding) {
            data = btoa(atob(occupiedEntry.content) + atob(data));
          } else {
            data = occupiedEntry.content + data;
          }
          ctime = occupiedEntry.ctime;
        }
        const pathObj = {
          path,
          folder: parentPath,
          type: "file",
          size: data.length,
          ctime,
          mtime: now,
          content: data
        };
        await this.dbRequest("put", [pathObj]);
      }
      /**
       * Delete a file from disk
       * @param options options for the file delete
       * @return a promise that resolves with the deleted file data result
       */
      async deleteFile(options) {
        const path = this.getPath(options.directory, options.path);
        const entry = await this.dbRequest("get", [path]);
        if (entry === void 0)
          throw Error("File does not exist.");
        const entries = await this.dbIndexRequest("by_folder", "getAllKeys", [IDBKeyRange.only(path)]);
        if (entries.length !== 0)
          throw Error("Folder is not empty.");
        await this.dbRequest("delete", [path]);
      }
      /**
       * Create a directory.
       * @param options options for the mkdir
       * @return a promise that resolves with the mkdir result
       */
      async mkdir(options) {
        const path = this.getPath(options.directory, options.path);
        const doRecursive = options.recursive;
        const parentPath = path.substr(0, path.lastIndexOf("/"));
        const depth = (path.match(/\//g) || []).length;
        const parentEntry = await this.dbRequest("get", [parentPath]);
        const occupiedEntry = await this.dbRequest("get", [path]);
        if (depth === 1)
          throw Error("Cannot create Root directory");
        if (occupiedEntry !== void 0)
          throw Error("Current directory does already exist.");
        if (!doRecursive && depth !== 2 && parentEntry === void 0)
          throw Error("Parent directory must exist");
        if (doRecursive && depth !== 2 && parentEntry === void 0) {
          const parentArgPath = parentPath.substr(parentPath.indexOf("/", 1));
          await this.mkdir({
            path: parentArgPath,
            directory: options.directory,
            recursive: doRecursive
          });
        }
        const now = Date.now();
        const pathObj = {
          path,
          folder: parentPath,
          type: "directory",
          size: 0,
          ctime: now,
          mtime: now
        };
        await this.dbRequest("put", [pathObj]);
      }
      /**
       * Remove a directory
       * @param options the options for the directory remove
       */
      async rmdir(options) {
        const { path, directory, recursive } = options;
        const fullPath = this.getPath(directory, path);
        const entry = await this.dbRequest("get", [fullPath]);
        if (entry === void 0)
          throw Error("Folder does not exist.");
        if (entry.type !== "directory")
          throw Error("Requested path is not a directory");
        const readDirResult = await this.readdir({ path, directory });
        if (readDirResult.files.length !== 0 && !recursive)
          throw Error("Folder is not empty");
        for (const entry2 of readDirResult.files) {
          const entryPath = `${path}/${entry2.name}`;
          const entryObj = await this.stat({ path: entryPath, directory });
          if (entryObj.type === "file") {
            await this.deleteFile({ path: entryPath, directory });
          } else {
            await this.rmdir({ path: entryPath, directory, recursive });
          }
        }
        await this.dbRequest("delete", [fullPath]);
      }
      /**
       * Return a list of files from the directory (not recursive)
       * @param options the options for the readdir operation
       * @return a promise that resolves with the readdir directory listing result
       */
      async readdir(options) {
        const path = this.getPath(options.directory, options.path);
        const entry = await this.dbRequest("get", [path]);
        if (options.path !== "" && entry === void 0)
          throw Error("Folder does not exist.");
        const entries = await this.dbIndexRequest("by_folder", "getAllKeys", [IDBKeyRange.only(path)]);
        const files = await Promise.all(entries.map(async (e) => {
          let subEntry = await this.dbRequest("get", [e]);
          if (subEntry === void 0) {
            subEntry = await this.dbRequest("get", [e + "/"]);
          }
          return {
            name: e.substring(path.length + 1),
            type: subEntry.type,
            size: subEntry.size,
            ctime: subEntry.ctime,
            mtime: subEntry.mtime,
            uri: subEntry.path
          };
        }));
        return { files };
      }
      /**
       * Return full File URI for a path and directory
       * @param options the options for the stat operation
       * @return a promise that resolves with the file stat result
       */
      async getUri(options) {
        const path = this.getPath(options.directory, options.path);
        let entry = await this.dbRequest("get", [path]);
        if (entry === void 0) {
          entry = await this.dbRequest("get", [path + "/"]);
        }
        return {
          uri: (entry === null || entry === void 0 ? void 0 : entry.path) || path
        };
      }
      /**
       * Return data about a file
       * @param options the options for the stat operation
       * @return a promise that resolves with the file stat result
       */
      async stat(options) {
        const path = this.getPath(options.directory, options.path);
        let entry = await this.dbRequest("get", [path]);
        if (entry === void 0) {
          entry = await this.dbRequest("get", [path + "/"]);
        }
        if (entry === void 0)
          throw Error("Entry does not exist.");
        return {
          name: entry.path.substring(path.length + 1),
          type: entry.type,
          size: entry.size,
          ctime: entry.ctime,
          mtime: entry.mtime,
          uri: entry.path
        };
      }
      /**
       * Rename a file or directory
       * @param options the options for the rename operation
       * @return a promise that resolves with the rename result
       */
      async rename(options) {
        await this._copy(options, true);
        return;
      }
      /**
       * Copy a file or directory
       * @param options the options for the copy operation
       * @return a promise that resolves with the copy result
       */
      async copy(options) {
        return this._copy(options, false);
      }
      async requestPermissions() {
        return { publicStorage: "granted" };
      }
      async checkPermissions() {
        return { publicStorage: "granted" };
      }
      /**
       * Function that can perform a copy or a rename
       * @param options the options for the rename operation
       * @param doRename whether to perform a rename or copy operation
       * @return a promise that resolves with the result
       */
      async _copy(options, doRename = false) {
        let { toDirectory } = options;
        const { to, from, directory: fromDirectory } = options;
        if (!to || !from) {
          throw Error("Both to and from must be provided");
        }
        if (!toDirectory) {
          toDirectory = fromDirectory;
        }
        const fromPath = this.getPath(fromDirectory, from);
        const toPath = this.getPath(toDirectory, to);
        if (fromPath === toPath) {
          return {
            uri: toPath
          };
        }
        if (isPathParent(fromPath, toPath)) {
          throw Error("To path cannot contain the from path");
        }
        let toObj;
        try {
          toObj = await this.stat({
            path: to,
            directory: toDirectory
          });
        } catch (e) {
          const toPathComponents = to.split("/");
          toPathComponents.pop();
          const toPath2 = toPathComponents.join("/");
          if (toPathComponents.length > 0) {
            const toParentDirectory = await this.stat({
              path: toPath2,
              directory: toDirectory
            });
            if (toParentDirectory.type !== "directory") {
              throw new Error("Parent directory of the to path is a file");
            }
          }
        }
        if (toObj && toObj.type === "directory") {
          throw new Error("Cannot overwrite a directory with a file");
        }
        const fromObj = await this.stat({
          path: from,
          directory: fromDirectory
        });
        const updateTime = async (path, ctime2, mtime) => {
          const fullPath = this.getPath(toDirectory, path);
          const entry = await this.dbRequest("get", [fullPath]);
          entry.ctime = ctime2;
          entry.mtime = mtime;
          await this.dbRequest("put", [entry]);
        };
        const ctime = fromObj.ctime ? fromObj.ctime : Date.now();
        switch (fromObj.type) {
          // The "from" object is a file
          case "file": {
            const file = await this.readFile({
              path: from,
              directory: fromDirectory
            });
            if (doRename) {
              await this.deleteFile({
                path: from,
                directory: fromDirectory
              });
            }
            let encoding;
            if (!(file.data instanceof Blob) && !this.isBase64String(file.data)) {
              encoding = Encoding.UTF8;
            }
            const writeResult = await this.writeFile({
              path: to,
              directory: toDirectory,
              data: file.data,
              encoding
            });
            if (doRename) {
              await updateTime(to, ctime, fromObj.mtime);
            }
            return writeResult;
          }
          case "directory": {
            if (toObj) {
              throw Error("Cannot move a directory over an existing object");
            }
            try {
              await this.mkdir({
                path: to,
                directory: toDirectory,
                recursive: false
              });
              if (doRename) {
                await updateTime(to, ctime, fromObj.mtime);
              }
            } catch (e) {
            }
            const contents = (await this.readdir({
              path: from,
              directory: fromDirectory
            })).files;
            for (const filename of contents) {
              await this._copy({
                from: `${from}/${filename.name}`,
                to: `${to}/${filename.name}`,
                directory: fromDirectory,
                toDirectory
              }, doRename);
            }
            if (doRename) {
              await this.rmdir({
                path: from,
                directory: fromDirectory
              });
            }
          }
        }
        return {
          uri: toPath
        };
      }
      isBase64String(str) {
        try {
          return btoa(atob(str)) == str;
        } catch (err2) {
          return false;
        }
      }
    };
    FilesystemWeb._debug = true;
  }
});

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    (function() {
      function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type)
          return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
          case REACT_ACTIVITY_TYPE:
            return "Activity";
        }
        if ("object" === typeof type)
          switch ("number" === typeof type.tag && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), type.$$typeof) {
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_CONTEXT_TYPE:
              return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
              return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
              var innerType = type.render;
              type = type.displayName;
              type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
              return type;
            case REACT_MEMO_TYPE:
              return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
              innerType = type._payload;
              type = type._init;
              try {
                return getComponentNameFromType(type(innerType));
              } catch (x2) {
              }
          }
        return null;
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        try {
          testStringCoercion(value);
          var JSCompiler_inline_result = false;
        } catch (e) {
          JSCompiler_inline_result = true;
        }
        if (JSCompiler_inline_result) {
          JSCompiler_inline_result = console;
          var JSCompiler_temp_const = JSCompiler_inline_result.error;
          var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          JSCompiler_temp_const.call(
            JSCompiler_inline_result,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            JSCompiler_inline_result$jscomp$0
          );
          return testStringCoercion(value);
        }
      }
      function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE)
          return "<...>";
        try {
          var name = getComponentNameFromType(type);
          return name ? "<" + name + ">" : "<...>";
        } catch (x2) {
          return "<...>";
        }
      }
      function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
      }
      function UnknownOwner() {
        return Error("react-stack-top-frame");
      }
      function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config, "key").get;
          if (getter && getter.isReactWarning) return false;
        }
        return void 0 !== config.key;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
          specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
        }
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
      function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
      }
      function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          props,
          _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
          enumerable: false,
          get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: null
        });
        Object.defineProperty(type, "_debugStack", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
      }
      function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children)
          if (isStaticChildren)
            if (isArrayImpl(children)) {
              for (isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)
                validateChildKeys(children[isStaticChildren]);
              Object.freeze && Object.freeze(children);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
          children = getComponentNameFromType(type);
          var keys = Object.keys(config).filter(function(k) {
            return "key" !== k;
          });
          isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
          didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error(
            'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
            isStaticChildren,
            children,
            keys,
            children
          ), didWarnAboutKeySpread[children + isStaticChildren] = true);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
          maybeKey = {};
          for (var propName in config)
            "key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(
          maybeKey,
          "function" === typeof type ? type.displayName || type.name || "Unknown" : type
        );
        return ReactElement(
          type,
          children,
          maybeKey,
          getOwner(),
          debugStack,
          debugTask
        );
      }
      function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
      }
      function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      var React2 = require_react(), REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo"), REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = /* @__PURE__ */ Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = /* @__PURE__ */ Symbol.for("react.client.reference"), ReactSharedInternals = React2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
      };
      React2 = {
        react_stack_bottom_frame: function(callStackForError) {
          return callStackForError();
        }
      };
      var specialPropKeyWarningShown;
      var didWarnAboutElementRef = {};
      var unknownOwnerDebugStack = React2.react_stack_bottom_frame.bind(
        React2,
        UnknownOwner
      )();
      var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
      var didWarnAboutKeySpread = {};
      exports.Fragment = REACT_FRAGMENT_TYPE;
      exports.jsx = function(type, config, maybeKey) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(
          type,
          config,
          maybeKey,
          false,
          trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
          trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
        );
      };
      exports.jsxs = function(type, config, maybeKey) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(
          type,
          config,
          maybeKey,
          true,
          trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
          trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
        );
      };
    })();
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/fflate/esm/browser.js
var browser_exports = {};
__export(browser_exports, {
  AsyncCompress: () => AsyncGzip,
  AsyncDecompress: () => AsyncDecompress,
  AsyncDeflate: () => AsyncDeflate,
  AsyncGunzip: () => AsyncGunzip,
  AsyncGzip: () => AsyncGzip,
  AsyncInflate: () => AsyncInflate,
  AsyncUnzipInflate: () => AsyncUnzipInflate,
  AsyncUnzlib: () => AsyncUnzlib,
  AsyncZipDeflate: () => AsyncZipDeflate,
  AsyncZlib: () => AsyncZlib,
  Compress: () => Gzip,
  DecodeUTF8: () => DecodeUTF8,
  Decompress: () => Decompress,
  Deflate: () => Deflate,
  EncodeUTF8: () => EncodeUTF8,
  FlateErrorCode: () => FlateErrorCode,
  Gunzip: () => Gunzip,
  Gzip: () => Gzip,
  Inflate: () => Inflate,
  Unzip: () => Unzip,
  UnzipInflate: () => UnzipInflate,
  UnzipPassThrough: () => UnzipPassThrough,
  Unzlib: () => Unzlib,
  Zip: () => Zip,
  ZipDeflate: () => ZipDeflate,
  ZipPassThrough: () => ZipPassThrough,
  Zlib: () => Zlib,
  compress: () => gzip,
  compressSync: () => gzipSync,
  decompress: () => decompress,
  decompressSync: () => decompressSync,
  deflate: () => deflate,
  deflateSync: () => deflateSync,
  gunzip: () => gunzip,
  gunzipSync: () => gunzipSync,
  gzip: () => gzip,
  gzipSync: () => gzipSync,
  inflate: () => inflate,
  inflateSync: () => inflateSync,
  strFromU8: () => strFromU8,
  strToU8: () => strToU8,
  unzip: () => unzip,
  unzipSync: () => unzipSync,
  unzlib: () => unzlib,
  unzlibSync: () => unzlibSync,
  zip: () => zip,
  zipSync: () => zipSync,
  zlib: () => zlib,
  zlibSync: () => zlibSync
});
function StrmOpt(opts, cb) {
  if (typeof opts == "function")
    cb = opts, opts = {};
  this.ondata = cb;
  return opts;
}
function deflate(data, opts, cb) {
  if (!cb)
    cb = opts, opts = {};
  if (typeof cb != "function")
    err(7);
  return cbify(data, opts, [
    bDflt
  ], function(ev) {
    return pbf(deflateSync(ev.data[0], ev.data[1]));
  }, 0, cb);
}
function deflateSync(data, opts) {
  return dopt(data, opts || {}, 0, 0);
}
function inflate(data, opts, cb) {
  if (!cb)
    cb = opts, opts = {};
  if (typeof cb != "function")
    err(7);
  return cbify(data, opts, [
    bInflt
  ], function(ev) {
    return pbf(inflateSync(ev.data[0], gopt(ev.data[1])));
  }, 1, cb);
}
function inflateSync(data, opts) {
  return inflt(data, { i: 2 }, opts && opts.out, opts && opts.dictionary);
}
function gzip(data, opts, cb) {
  if (!cb)
    cb = opts, opts = {};
  if (typeof cb != "function")
    err(7);
  return cbify(data, opts, [
    bDflt,
    gze,
    function() {
      return [gzipSync];
    }
  ], function(ev) {
    return pbf(gzipSync(ev.data[0], ev.data[1]));
  }, 2, cb);
}
function gzipSync(data, opts) {
  if (!opts)
    opts = {};
  var c = crc(), l = data.length;
  c.p(data);
  var d = dopt(data, opts, gzhl(opts), 8), s2 = d.length;
  return gzh(d, opts), wbytes(d, s2 - 8, c.d()), wbytes(d, s2 - 4, l), d;
}
function gunzip(data, opts, cb) {
  if (!cb)
    cb = opts, opts = {};
  if (typeof cb != "function")
    err(7);
  return cbify(data, opts, [
    bInflt,
    guze,
    function() {
      return [gunzipSync];
    }
  ], function(ev) {
    return pbf(gunzipSync(ev.data[0], ev.data[1]));
  }, 3, cb);
}
function gunzipSync(data, opts) {
  var st = gzs(data);
  if (st + 8 > data.length)
    err(6, "invalid gzip data");
  return inflt(data.subarray(st, -8), { i: 2 }, opts && opts.out || new u8(gzl(data)), opts && opts.dictionary);
}
function zlib(data, opts, cb) {
  if (!cb)
    cb = opts, opts = {};
  if (typeof cb != "function")
    err(7);
  return cbify(data, opts, [
    bDflt,
    zle,
    function() {
      return [zlibSync];
    }
  ], function(ev) {
    return pbf(zlibSync(ev.data[0], ev.data[1]));
  }, 4, cb);
}
function zlibSync(data, opts) {
  if (!opts)
    opts = {};
  var a = adler();
  a.p(data);
  var d = dopt(data, opts, opts.dictionary ? 6 : 2, 4);
  return zlh(d, opts), wbytes(d, d.length - 4, a.d()), d;
}
function unzlib(data, opts, cb) {
  if (!cb)
    cb = opts, opts = {};
  if (typeof cb != "function")
    err(7);
  return cbify(data, opts, [
    bInflt,
    zule,
    function() {
      return [unzlibSync];
    }
  ], function(ev) {
    return pbf(unzlibSync(ev.data[0], gopt(ev.data[1])));
  }, 5, cb);
}
function unzlibSync(data, opts) {
  return inflt(data.subarray(zls(data, opts && opts.dictionary), -4), { i: 2 }, opts && opts.out, opts && opts.dictionary);
}
function decompress(data, opts, cb) {
  if (!cb)
    cb = opts, opts = {};
  if (typeof cb != "function")
    err(7);
  return data[0] == 31 && data[1] == 139 && data[2] == 8 ? gunzip(data, opts, cb) : (data[0] & 15) != 8 || data[0] >> 4 > 7 || (data[0] << 8 | data[1]) % 31 ? inflate(data, opts, cb) : unzlib(data, opts, cb);
}
function decompressSync(data, opts) {
  return data[0] == 31 && data[1] == 139 && data[2] == 8 ? gunzipSync(data, opts) : (data[0] & 15) != 8 || data[0] >> 4 > 7 || (data[0] << 8 | data[1]) % 31 ? inflateSync(data, opts) : unzlibSync(data, opts);
}
function strToU8(str, latin1) {
  if (latin1) {
    var ar_1 = new u8(str.length);
    for (var i2 = 0; i2 < str.length; ++i2)
      ar_1[i2] = str.charCodeAt(i2);
    return ar_1;
  }
  if (te)
    return te.encode(str);
  var l = str.length;
  var ar = new u8(str.length + (str.length >> 1));
  var ai = 0;
  var w = function(v) {
    ar[ai++] = v;
  };
  for (var i2 = 0; i2 < l; ++i2) {
    if (ai + 5 > ar.length) {
      var n = new u8(ai + 8 + (l - i2 << 1));
      n.set(ar);
      ar = n;
    }
    var c = str.charCodeAt(i2);
    if (c < 128 || latin1)
      w(c);
    else if (c < 2048)
      w(192 | c >> 6), w(128 | c & 63);
    else if (c > 55295 && c < 57344)
      c = 65536 + (c & 1023 << 10) | str.charCodeAt(++i2) & 1023, w(240 | c >> 18), w(128 | c >> 12 & 63), w(128 | c >> 6 & 63), w(128 | c & 63);
    else
      w(224 | c >> 12), w(128 | c >> 6 & 63), w(128 | c & 63);
  }
  return slc(ar, 0, ai);
}
function strFromU8(dat, latin1) {
  if (latin1) {
    var r = "";
    for (var i2 = 0; i2 < dat.length; i2 += 16384)
      r += String.fromCharCode.apply(null, dat.subarray(i2, i2 + 16384));
    return r;
  } else if (td) {
    return td.decode(dat);
  } else {
    var _a2 = dutf8(dat), s2 = _a2.s, r = _a2.r;
    if (r.length)
      err(8);
    return s2;
  }
}
function zip(data, opts, cb) {
  if (!cb)
    cb = opts, opts = {};
  if (typeof cb != "function")
    err(7);
  var r = {};
  fltn(data, "", r, opts);
  var k = Object.keys(r);
  var lft = k.length, o = 0, tot = 0;
  var slft = lft, files = new Array(lft);
  var term = [];
  var tAll = function() {
    for (var i3 = 0; i3 < term.length; ++i3)
      term[i3]();
  };
  var cbd = function(a, b) {
    mt(function() {
      cb(a, b);
    });
  };
  mt(function() {
    cbd = cb;
  });
  var cbf = function() {
    var out = new u8(tot + 22), oe = o, cdl = tot - o;
    tot = 0;
    for (var i3 = 0; i3 < slft; ++i3) {
      var f2 = files[i3];
      try {
        var l = f2.c.length;
        wzh(out, tot, f2, f2.f, f2.u, l);
        var badd = 30 + f2.f.length + exfl(f2.extra);
        var loc = tot + badd;
        out.set(f2.c, loc);
        wzh(out, o, f2, f2.f, f2.u, l, tot, f2.m), o += 16 + badd + (f2.m ? f2.m.length : 0), tot = loc + l;
      } catch (e) {
        return cbd(e, null);
      }
    }
    wzf(out, o, files.length, cdl, oe);
    cbd(null, out);
  };
  if (!lft)
    cbf();
  var _loop_1 = function(i3) {
    var fn = k[i3];
    var _a2 = r[fn], file = _a2[0], p = _a2[1];
    var c = crc(), size = file.length;
    c.p(file);
    var f2 = strToU8(fn), s2 = f2.length;
    var com = p.comment, m = com && strToU8(com), ms = m && m.length;
    var exl = exfl(p.extra);
    var compression = p.level == 0 ? 0 : 8;
    var cbl = function(e, d) {
      if (e) {
        tAll();
        cbd(e, null);
      } else {
        var l = d.length;
        files[i3] = mrg(p, {
          size,
          crc: c.d(),
          c: d,
          f: f2,
          m,
          u: s2 != fn.length || m && com.length != ms,
          compression
        });
        o += 30 + s2 + exl + l;
        tot += 76 + 2 * (s2 + exl) + (ms || 0) + l;
        if (!--lft)
          cbf();
      }
    };
    if (s2 > 65535)
      cbl(err(11, 0, 1), null);
    if (!compression)
      cbl(null, file);
    else if (size < 16e4) {
      try {
        cbl(null, deflateSync(file, p));
      } catch (e) {
        cbl(e, null);
      }
    } else
      term.push(deflate(file, p, cbl));
  };
  for (var i2 = 0; i2 < slft; ++i2) {
    _loop_1(i2);
  }
  return tAll;
}
function zipSync(data, opts) {
  if (!opts)
    opts = {};
  var r = {};
  var files = [];
  fltn(data, "", r, opts);
  var o = 0;
  var tot = 0;
  for (var fn in r) {
    var _a2 = r[fn], file = _a2[0], p = _a2[1];
    var compression = p.level == 0 ? 0 : 8;
    var f2 = strToU8(fn), s2 = f2.length;
    var com = p.comment, m = com && strToU8(com), ms = m && m.length;
    var exl = exfl(p.extra);
    if (s2 > 65535)
      err(11);
    var d = compression ? deflateSync(file, p) : file, l = d.length;
    var c = crc();
    c.p(file);
    files.push(mrg(p, {
      size: file.length,
      crc: c.d(),
      c: d,
      f: f2,
      m,
      u: s2 != fn.length || m && com.length != ms,
      o,
      compression
    }));
    o += 30 + s2 + exl + l;
    tot += 76 + 2 * (s2 + exl) + (ms || 0) + l;
  }
  var out = new u8(tot + 22), oe = o, cdl = tot - o;
  for (var i2 = 0; i2 < files.length; ++i2) {
    var f2 = files[i2];
    wzh(out, f2.o, f2, f2.f, f2.u, f2.c.length);
    var badd = 30 + f2.f.length + exfl(f2.extra);
    out.set(f2.c, f2.o + badd);
    wzh(out, o, f2, f2.f, f2.u, f2.c.length, f2.o, f2.m), o += 16 + badd + (f2.m ? f2.m.length : 0);
  }
  wzf(out, o, files.length, cdl, oe);
  return out;
}
function unzip(data, opts, cb) {
  if (!cb)
    cb = opts, opts = {};
  if (typeof cb != "function")
    err(7);
  var term = [];
  var tAll = function() {
    for (var i3 = 0; i3 < term.length; ++i3)
      term[i3]();
  };
  var files = {};
  var cbd = function(a, b) {
    mt(function() {
      cb(a, b);
    });
  };
  mt(function() {
    cbd = cb;
  });
  var e = data.length - 22;
  for (; b4(data, e) != 101010256; --e) {
    if (!e || data.length - e > 65558) {
      cbd(err(13, 0, 1), null);
      return tAll;
    }
  }
  ;
  var lft = b2(data, e + 8);
  if (lft) {
    var c = lft;
    var o = b4(data, e + 16);
    var z = o == 4294967295 || c == 65535;
    if (z) {
      var ze = b4(data, e - 12);
      z = b4(data, ze) == 101075792;
      if (z) {
        c = lft = b4(data, ze + 32);
        o = b4(data, ze + 48);
      }
    }
    var fltr = opts && opts.filter;
    var _loop_3 = function(i3) {
      var _a2 = zh(data, o, z), c_1 = _a2[0], sc = _a2[1], su = _a2[2], fn = _a2[3], no = _a2[4], off = _a2[5], b = slzh(data, off);
      o = no;
      var cbl = function(e2, d) {
        if (e2) {
          tAll();
          cbd(e2, null);
        } else {
          if (d)
            files[fn] = d;
          if (!--lft)
            cbd(null, files);
        }
      };
      if (!fltr || fltr({
        name: fn,
        size: sc,
        originalSize: su,
        compression: c_1
      })) {
        if (!c_1)
          cbl(null, slc(data, b, b + sc));
        else if (c_1 == 8) {
          var infl = data.subarray(b, b + sc);
          if (su < 524288 || sc > 0.8 * su) {
            try {
              cbl(null, inflateSync(infl, { out: new u8(su) }));
            } catch (e2) {
              cbl(e2, null);
            }
          } else
            term.push(inflate(infl, { size: su }, cbl));
        } else
          cbl(err(14, "unknown compression type " + c_1, 1), null);
      } else
        cbl(null, null);
    };
    for (var i2 = 0; i2 < c; ++i2) {
      _loop_3(i2);
    }
  } else
    cbd(null, {});
  return tAll;
}
function unzipSync(data, opts) {
  var files = {};
  var e = data.length - 22;
  for (; b4(data, e) != 101010256; --e) {
    if (!e || data.length - e > 65558)
      err(13);
  }
  ;
  var c = b2(data, e + 8);
  if (!c)
    return {};
  var o = b4(data, e + 16);
  var z = o == 4294967295 || c == 65535;
  if (z) {
    var ze = b4(data, e - 12);
    z = b4(data, ze) == 101075792;
    if (z) {
      c = b4(data, ze + 32);
      o = b4(data, ze + 48);
    }
  }
  var fltr = opts && opts.filter;
  for (var i2 = 0; i2 < c; ++i2) {
    var _a2 = zh(data, o, z), c_2 = _a2[0], sc = _a2[1], su = _a2[2], fn = _a2[3], no = _a2[4], off = _a2[5], b = slzh(data, off);
    o = no;
    if (!fltr || fltr({
      name: fn,
      size: sc,
      originalSize: su,
      compression: c_2
    })) {
      if (!c_2)
        files[fn] = slc(data, b, b + sc);
      else if (c_2 == 8)
        files[fn] = inflateSync(data.subarray(b, b + sc), { out: new u8(su) });
      else
        err(14, "unknown compression type " + c_2);
    }
  }
  return files;
}
var ch2, wk, u8, u16, i32, fleb, fdeb, clim, freb, _a, fl, revfl, _b, fd, revfd, rev, x, i, hMap, flt, i, i, i, i, fdt, i, flm, flrm, fdm, fdrm, max, bits, bits16, shft, slc, FlateErrorCode, ec, err, inflt, wbits, wbits16, hTree, ln, lc, clen, wfblk, wblk, deo, et, dflt, crct, crc, adler, dopt, mrg, wcln, ch, cbfs, wrkr, bInflt, bDflt, gze, guze, zle, zule, pbf, gopt, cbify, astrm, astrmify, b2, b4, b8, wbytes, gzh, gzs, gzl, gzhl, zlh, zls, Deflate, AsyncDeflate, Inflate, AsyncInflate, Gzip, AsyncGzip, Gunzip, AsyncGunzip, Zlib, AsyncZlib, Unzlib, AsyncUnzlib, Decompress, AsyncDecompress, fltn, te, td, tds, dutf8, DecodeUTF8, EncodeUTF8, dbf, slzh, zh, z64e, exfl, wzh, wzf, ZipPassThrough, ZipDeflate, AsyncZipDeflate, Zip, UnzipPassThrough, UnzipInflate, AsyncUnzipInflate, Unzip, mt;
var init_browser = __esm({
  "node_modules/fflate/esm/browser.js"() {
    ch2 = {};
    wk = (function(c, id, msg, transfer, cb) {
      var w = new Worker(ch2[id] || (ch2[id] = URL.createObjectURL(new Blob([
        c + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'
      ], { type: "text/javascript" }))));
      w.onmessage = function(e) {
        var d = e.data, ed = d.$e$;
        if (ed) {
          var err2 = new Error(ed[0]);
          err2["code"] = ed[1];
          err2.stack = ed[2];
          cb(err2, null);
        } else
          cb(null, d);
      };
      w.postMessage(msg, transfer);
      return w;
    });
    u8 = Uint8Array;
    u16 = Uint16Array;
    i32 = Int32Array;
    fleb = new u8([
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      2,
      2,
      2,
      2,
      3,
      3,
      3,
      3,
      4,
      4,
      4,
      4,
      5,
      5,
      5,
      5,
      0,
      /* unused */
      0,
      0,
      /* impossible */
      0
    ]);
    fdeb = new u8([
      0,
      0,
      0,
      0,
      1,
      1,
      2,
      2,
      3,
      3,
      4,
      4,
      5,
      5,
      6,
      6,
      7,
      7,
      8,
      8,
      9,
      9,
      10,
      10,
      11,
      11,
      12,
      12,
      13,
      13,
      /* unused */
      0,
      0
    ]);
    clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
    freb = function(eb, start) {
      var b = new u16(31);
      for (var i2 = 0; i2 < 31; ++i2) {
        b[i2] = start += 1 << eb[i2 - 1];
      }
      var r = new i32(b[30]);
      for (var i2 = 1; i2 < 30; ++i2) {
        for (var j = b[i2]; j < b[i2 + 1]; ++j) {
          r[j] = j - b[i2] << 5 | i2;
        }
      }
      return { b, r };
    };
    _a = freb(fleb, 2);
    fl = _a.b;
    revfl = _a.r;
    fl[28] = 258, revfl[258] = 28;
    _b = freb(fdeb, 0);
    fd = _b.b;
    revfd = _b.r;
    rev = new u16(32768);
    for (i = 0; i < 32768; ++i) {
      x = (i & 43690) >> 1 | (i & 21845) << 1;
      x = (x & 52428) >> 2 | (x & 13107) << 2;
      x = (x & 61680) >> 4 | (x & 3855) << 4;
      rev[i] = ((x & 65280) >> 8 | (x & 255) << 8) >> 1;
    }
    hMap = (function(cd, mb, r) {
      var s2 = cd.length;
      var i2 = 0;
      var l = new u16(mb);
      for (; i2 < s2; ++i2) {
        if (cd[i2])
          ++l[cd[i2] - 1];
      }
      var le = new u16(mb);
      for (i2 = 1; i2 < mb; ++i2) {
        le[i2] = le[i2 - 1] + l[i2 - 1] << 1;
      }
      var co;
      if (r) {
        co = new u16(1 << mb);
        var rvb = 15 - mb;
        for (i2 = 0; i2 < s2; ++i2) {
          if (cd[i2]) {
            var sv = i2 << 4 | cd[i2];
            var r_1 = mb - cd[i2];
            var v = le[cd[i2] - 1]++ << r_1;
            for (var m = v | (1 << r_1) - 1; v <= m; ++v) {
              co[rev[v] >> rvb] = sv;
            }
          }
        }
      } else {
        co = new u16(s2);
        for (i2 = 0; i2 < s2; ++i2) {
          if (cd[i2]) {
            co[i2] = rev[le[cd[i2] - 1]++] >> 15 - cd[i2];
          }
        }
      }
      return co;
    });
    flt = new u8(288);
    for (i = 0; i < 144; ++i)
      flt[i] = 8;
    for (i = 144; i < 256; ++i)
      flt[i] = 9;
    for (i = 256; i < 280; ++i)
      flt[i] = 7;
    for (i = 280; i < 288; ++i)
      flt[i] = 8;
    fdt = new u8(32);
    for (i = 0; i < 32; ++i)
      fdt[i] = 5;
    flm = /* @__PURE__ */ hMap(flt, 9, 0);
    flrm = /* @__PURE__ */ hMap(flt, 9, 1);
    fdm = /* @__PURE__ */ hMap(fdt, 5, 0);
    fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
    max = function(a) {
      var m = a[0];
      for (var i2 = 1; i2 < a.length; ++i2) {
        if (a[i2] > m)
          m = a[i2];
      }
      return m;
    };
    bits = function(d, p, m) {
      var o = p / 8 | 0;
      return (d[o] | d[o + 1] << 8) >> (p & 7) & m;
    };
    bits16 = function(d, p) {
      var o = p / 8 | 0;
      return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p & 7);
    };
    shft = function(p) {
      return (p + 7) / 8 | 0;
    };
    slc = function(v, s2, e) {
      if (s2 == null || s2 < 0)
        s2 = 0;
      if (e == null || e > v.length)
        e = v.length;
      return new u8(v.subarray(s2, e));
    };
    FlateErrorCode = {
      UnexpectedEOF: 0,
      InvalidBlockType: 1,
      InvalidLengthLiteral: 2,
      InvalidDistance: 3,
      StreamFinished: 4,
      NoStreamHandler: 5,
      InvalidHeader: 6,
      NoCallback: 7,
      InvalidUTF8: 8,
      ExtraFieldTooLong: 9,
      InvalidDate: 10,
      FilenameTooLong: 11,
      StreamFinishing: 12,
      InvalidZipData: 13,
      UnknownCompressionMethod: 14
    };
    ec = [
      "unexpected EOF",
      "invalid block type",
      "invalid length/literal",
      "invalid distance",
      "stream finished",
      "no stream handler",
      ,
      "no callback",
      "invalid UTF-8 data",
      "extra field too long",
      "date not in range 1980-2099",
      "filename too long",
      "stream finishing",
      "invalid zip data"
      // determined by unknown compression method
    ];
    err = function(ind, msg, nt) {
      var e = new Error(msg || ec[ind]);
      e.code = ind;
      if (Error.captureStackTrace)
        Error.captureStackTrace(e, err);
      if (!nt)
        throw e;
      return e;
    };
    inflt = function(dat, st, buf, dict) {
      var sl = dat.length, dl = dict ? dict.length : 0;
      if (!sl || st.f && !st.l)
        return buf || new u8(0);
      var noBuf = !buf;
      var resize = noBuf || st.i != 2;
      var noSt = st.i;
      if (noBuf)
        buf = new u8(sl * 3);
      var cbuf = function(l2) {
        var bl = buf.length;
        if (l2 > bl) {
          var nbuf = new u8(Math.max(bl * 2, l2));
          nbuf.set(buf);
          buf = nbuf;
        }
      };
      var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
      var tbts = sl * 8;
      do {
        if (!lm) {
          final = bits(dat, pos, 1);
          var type = bits(dat, pos + 1, 3);
          pos += 3;
          if (!type) {
            var s2 = shft(pos) + 4, l = dat[s2 - 4] | dat[s2 - 3] << 8, t = s2 + l;
            if (t > sl) {
              if (noSt)
                err(0);
              break;
            }
            if (resize)
              cbuf(bt + l);
            buf.set(dat.subarray(s2, t), bt);
            st.b = bt += l, st.p = pos = t * 8, st.f = final;
            continue;
          } else if (type == 1)
            lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
          else if (type == 2) {
            var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
            var tl = hLit + bits(dat, pos + 5, 31) + 1;
            pos += 14;
            var ldt = new u8(tl);
            var clt = new u8(19);
            for (var i2 = 0; i2 < hcLen; ++i2) {
              clt[clim[i2]] = bits(dat, pos + i2 * 3, 7);
            }
            pos += hcLen * 3;
            var clb = max(clt), clbmsk = (1 << clb) - 1;
            var clm = hMap(clt, clb, 1);
            for (var i2 = 0; i2 < tl; ) {
              var r = clm[bits(dat, pos, clbmsk)];
              pos += r & 15;
              var s2 = r >> 4;
              if (s2 < 16) {
                ldt[i2++] = s2;
              } else {
                var c = 0, n = 0;
                if (s2 == 16)
                  n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i2 - 1];
                else if (s2 == 17)
                  n = 3 + bits(dat, pos, 7), pos += 3;
                else if (s2 == 18)
                  n = 11 + bits(dat, pos, 127), pos += 7;
                while (n--)
                  ldt[i2++] = c;
              }
            }
            var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
            lbt = max(lt);
            dbt = max(dt);
            lm = hMap(lt, lbt, 1);
            dm = hMap(dt, dbt, 1);
          } else
            err(1);
          if (pos > tbts) {
            if (noSt)
              err(0);
            break;
          }
        }
        if (resize)
          cbuf(bt + 131072);
        var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
        var lpos = pos;
        for (; ; lpos = pos) {
          var c = lm[bits16(dat, pos) & lms], sym = c >> 4;
          pos += c & 15;
          if (pos > tbts) {
            if (noSt)
              err(0);
            break;
          }
          if (!c)
            err(2);
          if (sym < 256)
            buf[bt++] = sym;
          else if (sym == 256) {
            lpos = pos, lm = null;
            break;
          } else {
            var add = sym - 254;
            if (sym > 264) {
              var i2 = sym - 257, b = fleb[i2];
              add = bits(dat, pos, (1 << b) - 1) + fl[i2];
              pos += b;
            }
            var d = dm[bits16(dat, pos) & dms], dsym = d >> 4;
            if (!d)
              err(3);
            pos += d & 15;
            var dt = fd[dsym];
            if (dsym > 3) {
              var b = fdeb[dsym];
              dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
            }
            if (pos > tbts) {
              if (noSt)
                err(0);
              break;
            }
            if (resize)
              cbuf(bt + 131072);
            var end = bt + add;
            if (bt < dt) {
              var shift = dl - dt, dend = Math.min(dt, end);
              if (shift + bt < 0)
                err(3);
              for (; bt < dend; ++bt)
                buf[bt] = dict[shift + bt];
            }
            for (; bt < end; ++bt)
              buf[bt] = buf[bt - dt];
          }
        }
        st.l = lm, st.p = lpos, st.b = bt, st.f = final;
        if (lm)
          final = 1, st.m = lbt, st.d = dm, st.n = dbt;
      } while (!final);
      return bt != buf.length && noBuf ? slc(buf, 0, bt) : buf.subarray(0, bt);
    };
    wbits = function(d, p, v) {
      v <<= p & 7;
      var o = p / 8 | 0;
      d[o] |= v;
      d[o + 1] |= v >> 8;
    };
    wbits16 = function(d, p, v) {
      v <<= p & 7;
      var o = p / 8 | 0;
      d[o] |= v;
      d[o + 1] |= v >> 8;
      d[o + 2] |= v >> 16;
    };
    hTree = function(d, mb) {
      var t = [];
      for (var i2 = 0; i2 < d.length; ++i2) {
        if (d[i2])
          t.push({ s: i2, f: d[i2] });
      }
      var s2 = t.length;
      var t2 = t.slice();
      if (!s2)
        return { t: et, l: 0 };
      if (s2 == 1) {
        var v = new u8(t[0].s + 1);
        v[t[0].s] = 1;
        return { t: v, l: 1 };
      }
      t.sort(function(a, b) {
        return a.f - b.f;
      });
      t.push({ s: -1, f: 25001 });
      var l = t[0], r = t[1], i0 = 0, i1 = 1, i22 = 2;
      t[0] = { s: -1, f: l.f + r.f, l, r };
      while (i1 != s2 - 1) {
        l = t[t[i0].f < t[i22].f ? i0++ : i22++];
        r = t[i0 != i1 && t[i0].f < t[i22].f ? i0++ : i22++];
        t[i1++] = { s: -1, f: l.f + r.f, l, r };
      }
      var maxSym = t2[0].s;
      for (var i2 = 1; i2 < s2; ++i2) {
        if (t2[i2].s > maxSym)
          maxSym = t2[i2].s;
      }
      var tr = new u16(maxSym + 1);
      var mbt = ln(t[i1 - 1], tr, 0);
      if (mbt > mb) {
        var i2 = 0, dt = 0;
        var lft = mbt - mb, cst = 1 << lft;
        t2.sort(function(a, b) {
          return tr[b.s] - tr[a.s] || a.f - b.f;
        });
        for (; i2 < s2; ++i2) {
          var i2_1 = t2[i2].s;
          if (tr[i2_1] > mb) {
            dt += cst - (1 << mbt - tr[i2_1]);
            tr[i2_1] = mb;
          } else
            break;
        }
        dt >>= lft;
        while (dt > 0) {
          var i2_2 = t2[i2].s;
          if (tr[i2_2] < mb)
            dt -= 1 << mb - tr[i2_2]++ - 1;
          else
            ++i2;
        }
        for (; i2 >= 0 && dt; --i2) {
          var i2_3 = t2[i2].s;
          if (tr[i2_3] == mb) {
            --tr[i2_3];
            ++dt;
          }
        }
        mbt = mb;
      }
      return { t: new u8(tr), l: mbt };
    };
    ln = function(n, l, d) {
      return n.s == -1 ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1)) : l[n.s] = d;
    };
    lc = function(c) {
      var s2 = c.length;
      while (s2 && !c[--s2])
        ;
      var cl = new u16(++s2);
      var cli = 0, cln = c[0], cls = 1;
      var w = function(v) {
        cl[cli++] = v;
      };
      for (var i2 = 1; i2 <= s2; ++i2) {
        if (c[i2] == cln && i2 != s2)
          ++cls;
        else {
          if (!cln && cls > 2) {
            for (; cls > 138; cls -= 138)
              w(32754);
            if (cls > 2) {
              w(cls > 10 ? cls - 11 << 5 | 28690 : cls - 3 << 5 | 12305);
              cls = 0;
            }
          } else if (cls > 3) {
            w(cln), --cls;
            for (; cls > 6; cls -= 6)
              w(8304);
            if (cls > 2)
              w(cls - 3 << 5 | 8208), cls = 0;
          }
          while (cls--)
            w(cln);
          cls = 1;
          cln = c[i2];
        }
      }
      return { c: cl.subarray(0, cli), n: s2 };
    };
    clen = function(cf, cl) {
      var l = 0;
      for (var i2 = 0; i2 < cl.length; ++i2)
        l += cf[i2] * cl[i2];
      return l;
    };
    wfblk = function(out, pos, dat) {
      var s2 = dat.length;
      var o = shft(pos + 2);
      out[o] = s2 & 255;
      out[o + 1] = s2 >> 8;
      out[o + 2] = out[o] ^ 255;
      out[o + 3] = out[o + 1] ^ 255;
      for (var i2 = 0; i2 < s2; ++i2)
        out[o + i2 + 4] = dat[i2];
      return (o + 4 + s2) * 8;
    };
    wblk = function(dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
      wbits(out, p++, final);
      ++lf[256];
      var _a2 = hTree(lf, 15), dlt = _a2.t, mlb = _a2.l;
      var _b2 = hTree(df, 15), ddt = _b2.t, mdb = _b2.l;
      var _c = lc(dlt), lclt = _c.c, nlc = _c.n;
      var _d = lc(ddt), lcdt = _d.c, ndc = _d.n;
      var lcfreq = new u16(19);
      for (var i2 = 0; i2 < lclt.length; ++i2)
        ++lcfreq[lclt[i2] & 31];
      for (var i2 = 0; i2 < lcdt.length; ++i2)
        ++lcfreq[lcdt[i2] & 31];
      var _e = hTree(lcfreq, 7), lct = _e.t, mlcb = _e.l;
      var nlcc = 19;
      for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc)
        ;
      var flen = bl + 5 << 3;
      var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
      var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + 2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18];
      if (bs >= 0 && flen <= ftlen && flen <= dtlen)
        return wfblk(out, p, dat.subarray(bs, bs + bl));
      var lm, ll, dm, dl;
      wbits(out, p, 1 + (dtlen < ftlen)), p += 2;
      if (dtlen < ftlen) {
        lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
        var llm = hMap(lct, mlcb, 0);
        wbits(out, p, nlc - 257);
        wbits(out, p + 5, ndc - 1);
        wbits(out, p + 10, nlcc - 4);
        p += 14;
        for (var i2 = 0; i2 < nlcc; ++i2)
          wbits(out, p + 3 * i2, lct[clim[i2]]);
        p += 3 * nlcc;
        var lcts = [lclt, lcdt];
        for (var it = 0; it < 2; ++it) {
          var clct = lcts[it];
          for (var i2 = 0; i2 < clct.length; ++i2) {
            var len = clct[i2] & 31;
            wbits(out, p, llm[len]), p += lct[len];
            if (len > 15)
              wbits(out, p, clct[i2] >> 5 & 127), p += clct[i2] >> 12;
          }
        }
      } else {
        lm = flm, ll = flt, dm = fdm, dl = fdt;
      }
      for (var i2 = 0; i2 < li; ++i2) {
        var sym = syms[i2];
        if (sym > 255) {
          var len = sym >> 18 & 31;
          wbits16(out, p, lm[len + 257]), p += ll[len + 257];
          if (len > 7)
            wbits(out, p, sym >> 23 & 31), p += fleb[len];
          var dst = sym & 31;
          wbits16(out, p, dm[dst]), p += dl[dst];
          if (dst > 3)
            wbits16(out, p, sym >> 5 & 8191), p += fdeb[dst];
        } else {
          wbits16(out, p, lm[sym]), p += ll[sym];
        }
      }
      wbits16(out, p, lm[256]);
      return p + ll[256];
    };
    deo = /* @__PURE__ */ new i32([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
    et = /* @__PURE__ */ new u8(0);
    dflt = function(dat, lvl, plvl, pre, post, st) {
      var s2 = st.z || dat.length;
      var o = new u8(pre + s2 + 5 * (1 + Math.ceil(s2 / 7e3)) + post);
      var w = o.subarray(pre, o.length - post);
      var lst = st.l;
      var pos = (st.r || 0) & 7;
      if (lvl) {
        if (pos)
          w[0] = st.r >> 3;
        var opt = deo[lvl - 1];
        var n = opt >> 13, c = opt & 8191;
        var msk_1 = (1 << plvl) - 1;
        var prev = st.p || new u16(32768), head = st.h || new u16(msk_1 + 1);
        var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
        var hsh = function(i3) {
          return (dat[i3] ^ dat[i3 + 1] << bs1_1 ^ dat[i3 + 2] << bs2_1) & msk_1;
        };
        var syms = new i32(25e3);
        var lf = new u16(288), df = new u16(32);
        var lc_1 = 0, eb = 0, i2 = st.i || 0, li = 0, wi = st.w || 0, bs = 0;
        for (; i2 + 2 < s2; ++i2) {
          var hv = hsh(i2);
          var imod = i2 & 32767, pimod = head[hv];
          prev[imod] = pimod;
          head[hv] = imod;
          if (wi <= i2) {
            var rem = s2 - i2;
            if ((lc_1 > 7e3 || li > 24576) && (rem > 423 || !lst)) {
              pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i2 - bs, pos);
              li = lc_1 = eb = 0, bs = i2;
              for (var j = 0; j < 286; ++j)
                lf[j] = 0;
              for (var j = 0; j < 30; ++j)
                df[j] = 0;
            }
            var l = 2, d = 0, ch_1 = c, dif = imod - pimod & 32767;
            if (rem > 2 && hv == hsh(i2 - dif)) {
              var maxn = Math.min(n, rem) - 1;
              var maxd = Math.min(32767, i2);
              var ml = Math.min(258, rem);
              while (dif <= maxd && --ch_1 && imod != pimod) {
                if (dat[i2 + l] == dat[i2 + l - dif]) {
                  var nl = 0;
                  for (; nl < ml && dat[i2 + nl] == dat[i2 + nl - dif]; ++nl)
                    ;
                  if (nl > l) {
                    l = nl, d = dif;
                    if (nl > maxn)
                      break;
                    var mmd = Math.min(dif, nl - 2);
                    var md = 0;
                    for (var j = 0; j < mmd; ++j) {
                      var ti = i2 - dif + j & 32767;
                      var pti = prev[ti];
                      var cd = ti - pti & 32767;
                      if (cd > md)
                        md = cd, pimod = ti;
                    }
                  }
                }
                imod = pimod, pimod = prev[imod];
                dif += imod - pimod & 32767;
              }
            }
            if (d) {
              syms[li++] = 268435456 | revfl[l] << 18 | revfd[d];
              var lin = revfl[l] & 31, din = revfd[d] & 31;
              eb += fleb[lin] + fdeb[din];
              ++lf[257 + lin];
              ++df[din];
              wi = i2 + l;
              ++lc_1;
            } else {
              syms[li++] = dat[i2];
              ++lf[dat[i2]];
            }
          }
        }
        for (i2 = Math.max(i2, wi); i2 < s2; ++i2) {
          syms[li++] = dat[i2];
          ++lf[dat[i2]];
        }
        pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i2 - bs, pos);
        if (!lst) {
          st.r = pos & 7 | w[pos / 8 | 0] << 3;
          pos -= 7;
          st.h = head, st.p = prev, st.i = i2, st.w = wi;
        }
      } else {
        for (var i2 = st.w || 0; i2 < s2 + lst; i2 += 65535) {
          var e = i2 + 65535;
          if (e >= s2) {
            w[pos / 8 | 0] = lst;
            e = s2;
          }
          pos = wfblk(w, pos + 1, dat.subarray(i2, e));
        }
        st.i = s2;
      }
      return slc(o, 0, pre + shft(pos) + post);
    };
    crct = /* @__PURE__ */ (function() {
      var t = new Int32Array(256);
      for (var i2 = 0; i2 < 256; ++i2) {
        var c = i2, k = 9;
        while (--k)
          c = (c & 1 && -306674912) ^ c >>> 1;
        t[i2] = c;
      }
      return t;
    })();
    crc = function() {
      var c = -1;
      return {
        p: function(d) {
          var cr = c;
          for (var i2 = 0; i2 < d.length; ++i2)
            cr = crct[cr & 255 ^ d[i2]] ^ cr >>> 8;
          c = cr;
        },
        d: function() {
          return ~c;
        }
      };
    };
    adler = function() {
      var a = 1, b = 0;
      return {
        p: function(d) {
          var n = a, m = b;
          var l = d.length | 0;
          for (var i2 = 0; i2 != l; ) {
            var e = Math.min(i2 + 2655, l);
            for (; i2 < e; ++i2)
              m += n += d[i2];
            n = (n & 65535) + 15 * (n >> 16), m = (m & 65535) + 15 * (m >> 16);
          }
          a = n, b = m;
        },
        d: function() {
          a %= 65521, b %= 65521;
          return (a & 255) << 24 | (a & 65280) << 8 | (b & 255) << 8 | b >> 8;
        }
      };
    };
    dopt = function(dat, opt, pre, post, st) {
      if (!st) {
        st = { l: 1 };
        if (opt.dictionary) {
          var dict = opt.dictionary.subarray(-32768);
          var newDat = new u8(dict.length + dat.length);
          newDat.set(dict);
          newDat.set(dat, dict.length);
          dat = newDat;
          st.w = dict.length;
        }
      }
      return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? st.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : 20 : 12 + opt.mem, pre, post, st);
    };
    mrg = function(a, b) {
      var o = {};
      for (var k in a)
        o[k] = a[k];
      for (var k in b)
        o[k] = b[k];
      return o;
    };
    wcln = function(fn, fnStr, td2) {
      var dt = fn();
      var st = fn.toString();
      var ks = st.slice(st.indexOf("[") + 1, st.lastIndexOf("]")).replace(/\s+/g, "").split(",");
      for (var i2 = 0; i2 < dt.length; ++i2) {
        var v = dt[i2], k = ks[i2];
        if (typeof v == "function") {
          fnStr += ";" + k + "=";
          var st_1 = v.toString();
          if (v.prototype) {
            if (st_1.indexOf("[native code]") != -1) {
              var spInd = st_1.indexOf(" ", 8) + 1;
              fnStr += st_1.slice(spInd, st_1.indexOf("(", spInd));
            } else {
              fnStr += st_1;
              for (var t in v.prototype)
                fnStr += ";" + k + ".prototype." + t + "=" + v.prototype[t].toString();
            }
          } else
            fnStr += st_1;
        } else
          td2[k] = v;
      }
      return fnStr;
    };
    ch = [];
    cbfs = function(v) {
      var tl = [];
      for (var k in v) {
        if (v[k].buffer) {
          tl.push((v[k] = new v[k].constructor(v[k])).buffer);
        }
      }
      return tl;
    };
    wrkr = function(fns, init, id, cb) {
      if (!ch[id]) {
        var fnStr = "", td_1 = {}, m = fns.length - 1;
        for (var i2 = 0; i2 < m; ++i2)
          fnStr = wcln(fns[i2], fnStr, td_1);
        ch[id] = { c: wcln(fns[m], fnStr, td_1), e: td_1 };
      }
      var td2 = mrg({}, ch[id].e);
      return wk(ch[id].c + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + init.toString() + "}", id, td2, cbfs(td2), cb);
    };
    bInflt = function() {
      return [u8, u16, i32, fleb, fdeb, clim, fl, fd, flrm, fdrm, rev, ec, hMap, max, bits, bits16, shft, slc, err, inflt, inflateSync, pbf, gopt];
    };
    bDflt = function() {
      return [u8, u16, i32, fleb, fdeb, clim, revfl, revfd, flm, flt, fdm, fdt, rev, deo, et, hMap, wbits, wbits16, hTree, ln, lc, clen, wfblk, wblk, shft, slc, dflt, dopt, deflateSync, pbf];
    };
    gze = function() {
      return [gzh, gzhl, wbytes, crc, crct];
    };
    guze = function() {
      return [gzs, gzl];
    };
    zle = function() {
      return [zlh, wbytes, adler];
    };
    zule = function() {
      return [zls];
    };
    pbf = function(msg) {
      return postMessage(msg, [msg.buffer]);
    };
    gopt = function(o) {
      return o && {
        out: o.size && new u8(o.size),
        dictionary: o.dictionary
      };
    };
    cbify = function(dat, opts, fns, init, id, cb) {
      var w = wrkr(fns, init, id, function(err2, dat2) {
        w.terminate();
        cb(err2, dat2);
      });
      w.postMessage([dat, opts], opts.consume ? [dat.buffer] : []);
      return function() {
        w.terminate();
      };
    };
    astrm = function(strm) {
      strm.ondata = function(dat, final) {
        return postMessage([dat, final], [dat.buffer]);
      };
      return function(ev) {
        if (ev.data.length) {
          strm.push(ev.data[0], ev.data[1]);
          postMessage([ev.data[0].length]);
        } else
          strm.flush();
      };
    };
    astrmify = function(fns, strm, opts, init, id, flush, ext) {
      var t;
      var w = wrkr(fns, init, id, function(err2, dat) {
        if (err2)
          w.terminate(), strm.ondata.call(strm, err2);
        else if (!Array.isArray(dat))
          ext(dat);
        else if (dat.length == 1) {
          strm.queuedSize -= dat[0];
          if (strm.ondrain)
            strm.ondrain(dat[0]);
        } else {
          if (dat[1])
            w.terminate();
          strm.ondata.call(strm, err2, dat[0], dat[1]);
        }
      });
      w.postMessage(opts);
      strm.queuedSize = 0;
      strm.push = function(d, f2) {
        if (!strm.ondata)
          err(5);
        if (t)
          strm.ondata(err(4, 0, 1), null, !!f2);
        strm.queuedSize += d.length;
        w.postMessage([d, t = f2], [d.buffer]);
      };
      strm.terminate = function() {
        w.terminate();
      };
      if (flush) {
        strm.flush = function() {
          w.postMessage([]);
        };
      }
    };
    b2 = function(d, b) {
      return d[b] | d[b + 1] << 8;
    };
    b4 = function(d, b) {
      return (d[b] | d[b + 1] << 8 | d[b + 2] << 16 | d[b + 3] << 24) >>> 0;
    };
    b8 = function(d, b) {
      return b4(d, b) + b4(d, b + 4) * 4294967296;
    };
    wbytes = function(d, b, v) {
      for (; v; ++b)
        d[b] = v, v >>>= 8;
    };
    gzh = function(c, o) {
      var fn = o.filename;
      c[0] = 31, c[1] = 139, c[2] = 8, c[8] = o.level < 2 ? 4 : o.level == 9 ? 2 : 0, c[9] = 3;
      if (o.mtime != 0)
        wbytes(c, 4, Math.floor(new Date(o.mtime || Date.now()) / 1e3));
      if (fn) {
        c[3] = 8;
        for (var i2 = 0; i2 <= fn.length; ++i2)
          c[i2 + 10] = fn.charCodeAt(i2);
      }
    };
    gzs = function(d) {
      if (d[0] != 31 || d[1] != 139 || d[2] != 8)
        err(6, "invalid gzip data");
      var flg = d[3];
      var st = 10;
      if (flg & 4)
        st += (d[10] | d[11] << 8) + 2;
      for (var zs = (flg >> 3 & 1) + (flg >> 4 & 1); zs > 0; zs -= !d[st++])
        ;
      return st + (flg & 2);
    };
    gzl = function(d) {
      var l = d.length;
      return (d[l - 4] | d[l - 3] << 8 | d[l - 2] << 16 | d[l - 1] << 24) >>> 0;
    };
    gzhl = function(o) {
      return 10 + (o.filename ? o.filename.length + 1 : 0);
    };
    zlh = function(c, o) {
      var lv = o.level, fl2 = lv == 0 ? 0 : lv < 6 ? 1 : lv == 9 ? 3 : 2;
      c[0] = 120, c[1] = fl2 << 6 | (o.dictionary && 32);
      c[1] |= 31 - (c[0] << 8 | c[1]) % 31;
      if (o.dictionary) {
        var h = adler();
        h.p(o.dictionary);
        wbytes(c, 2, h.d());
      }
    };
    zls = function(d, dict) {
      if ((d[0] & 15) != 8 || d[0] >> 4 > 7 || (d[0] << 8 | d[1]) % 31)
        err(6, "invalid zlib data");
      if ((d[1] >> 5 & 1) == +!dict)
        err(6, "invalid zlib data: " + (d[1] & 32 ? "need" : "unexpected") + " dictionary");
      return (d[1] >> 3 & 4) + 2;
    };
    Deflate = /* @__PURE__ */ (function() {
      function Deflate2(opts, cb) {
        if (typeof opts == "function")
          cb = opts, opts = {};
        this.ondata = cb;
        this.o = opts || {};
        this.s = { l: 0, i: 32768, w: 32768, z: 32768 };
        this.b = new u8(98304);
        if (this.o.dictionary) {
          var dict = this.o.dictionary.subarray(-32768);
          this.b.set(dict, 32768 - dict.length);
          this.s.i = 32768 - dict.length;
        }
      }
      Deflate2.prototype.p = function(c, f2) {
        this.ondata(dopt(c, this.o, 0, 0, this.s), f2);
      };
      Deflate2.prototype.push = function(chunk, final) {
        if (!this.ondata)
          err(5);
        if (this.s.l)
          err(4);
        var endLen = chunk.length + this.s.z;
        if (endLen > this.b.length) {
          if (endLen > 2 * this.b.length - 32768) {
            var newBuf = new u8(endLen & -32768);
            newBuf.set(this.b.subarray(0, this.s.z));
            this.b = newBuf;
          }
          var split = this.b.length - this.s.z;
          this.b.set(chunk.subarray(0, split), this.s.z);
          this.s.z = this.b.length;
          this.p(this.b, false);
          this.b.set(this.b.subarray(-32768));
          this.b.set(chunk.subarray(split), 32768);
          this.s.z = chunk.length - split + 32768;
          this.s.i = 32766, this.s.w = 32768;
        } else {
          this.b.set(chunk, this.s.z);
          this.s.z += chunk.length;
        }
        this.s.l = final & 1;
        if (this.s.z > this.s.w + 8191 || final) {
          this.p(this.b, final || false);
          this.s.w = this.s.i, this.s.i -= 2;
        }
      };
      Deflate2.prototype.flush = function() {
        if (!this.ondata)
          err(5);
        if (this.s.l)
          err(4);
        this.p(this.b, false);
        this.s.w = this.s.i, this.s.i -= 2;
      };
      return Deflate2;
    })();
    AsyncDeflate = /* @__PURE__ */ (function() {
      function AsyncDeflate2(opts, cb) {
        astrmify([
          bDflt,
          function() {
            return [astrm, Deflate];
          }
        ], this, StrmOpt.call(this, opts, cb), function(ev) {
          var strm = new Deflate(ev.data);
          onmessage = astrm(strm);
        }, 6, 1);
      }
      return AsyncDeflate2;
    })();
    Inflate = /* @__PURE__ */ (function() {
      function Inflate2(opts, cb) {
        if (typeof opts == "function")
          cb = opts, opts = {};
        this.ondata = cb;
        var dict = opts && opts.dictionary && opts.dictionary.subarray(-32768);
        this.s = { i: 0, b: dict ? dict.length : 0 };
        this.o = new u8(32768);
        this.p = new u8(0);
        if (dict)
          this.o.set(dict);
      }
      Inflate2.prototype.e = function(c) {
        if (!this.ondata)
          err(5);
        if (this.d)
          err(4);
        if (!this.p.length)
          this.p = c;
        else if (c.length) {
          var n = new u8(this.p.length + c.length);
          n.set(this.p), n.set(c, this.p.length), this.p = n;
        }
      };
      Inflate2.prototype.c = function(final) {
        this.s.i = +(this.d = final || false);
        var bts = this.s.b;
        var dt = inflt(this.p, this.s, this.o);
        this.ondata(slc(dt, bts, this.s.b), this.d);
        this.o = slc(dt, this.s.b - 32768), this.s.b = this.o.length;
        this.p = slc(this.p, this.s.p / 8 | 0), this.s.p &= 7;
      };
      Inflate2.prototype.push = function(chunk, final) {
        this.e(chunk), this.c(final);
      };
      return Inflate2;
    })();
    AsyncInflate = /* @__PURE__ */ (function() {
      function AsyncInflate2(opts, cb) {
        astrmify([
          bInflt,
          function() {
            return [astrm, Inflate];
          }
        ], this, StrmOpt.call(this, opts, cb), function(ev) {
          var strm = new Inflate(ev.data);
          onmessage = astrm(strm);
        }, 7, 0);
      }
      return AsyncInflate2;
    })();
    Gzip = /* @__PURE__ */ (function() {
      function Gzip2(opts, cb) {
        this.c = crc();
        this.l = 0;
        this.v = 1;
        Deflate.call(this, opts, cb);
      }
      Gzip2.prototype.push = function(chunk, final) {
        this.c.p(chunk);
        this.l += chunk.length;
        Deflate.prototype.push.call(this, chunk, final);
      };
      Gzip2.prototype.p = function(c, f2) {
        var raw = dopt(c, this.o, this.v && gzhl(this.o), f2 && 8, this.s);
        if (this.v)
          gzh(raw, this.o), this.v = 0;
        if (f2)
          wbytes(raw, raw.length - 8, this.c.d()), wbytes(raw, raw.length - 4, this.l);
        this.ondata(raw, f2);
      };
      Gzip2.prototype.flush = function() {
        Deflate.prototype.flush.call(this);
      };
      return Gzip2;
    })();
    AsyncGzip = /* @__PURE__ */ (function() {
      function AsyncGzip2(opts, cb) {
        astrmify([
          bDflt,
          gze,
          function() {
            return [astrm, Deflate, Gzip];
          }
        ], this, StrmOpt.call(this, opts, cb), function(ev) {
          var strm = new Gzip(ev.data);
          onmessage = astrm(strm);
        }, 8, 1);
      }
      return AsyncGzip2;
    })();
    Gunzip = /* @__PURE__ */ (function() {
      function Gunzip2(opts, cb) {
        this.v = 1;
        this.r = 0;
        Inflate.call(this, opts, cb);
      }
      Gunzip2.prototype.push = function(chunk, final) {
        Inflate.prototype.e.call(this, chunk);
        this.r += chunk.length;
        if (this.v) {
          var p = this.p.subarray(this.v - 1);
          var s2 = p.length > 3 ? gzs(p) : 4;
          if (s2 > p.length) {
            if (!final)
              return;
          } else if (this.v > 1 && this.onmember) {
            this.onmember(this.r - p.length);
          }
          this.p = p.subarray(s2), this.v = 0;
        }
        Inflate.prototype.c.call(this, final);
        if (this.s.f && !this.s.l && !final) {
          this.v = shft(this.s.p) + 9;
          this.s = { i: 0 };
          this.o = new u8(0);
          this.push(new u8(0), final);
        }
      };
      return Gunzip2;
    })();
    AsyncGunzip = /* @__PURE__ */ (function() {
      function AsyncGunzip2(opts, cb) {
        var _this = this;
        astrmify([
          bInflt,
          guze,
          function() {
            return [astrm, Inflate, Gunzip];
          }
        ], this, StrmOpt.call(this, opts, cb), function(ev) {
          var strm = new Gunzip(ev.data);
          strm.onmember = function(offset) {
            return postMessage(offset);
          };
          onmessage = astrm(strm);
        }, 9, 0, function(offset) {
          return _this.onmember && _this.onmember(offset);
        });
      }
      return AsyncGunzip2;
    })();
    Zlib = /* @__PURE__ */ (function() {
      function Zlib2(opts, cb) {
        this.c = adler();
        this.v = 1;
        Deflate.call(this, opts, cb);
      }
      Zlib2.prototype.push = function(chunk, final) {
        this.c.p(chunk);
        Deflate.prototype.push.call(this, chunk, final);
      };
      Zlib2.prototype.p = function(c, f2) {
        var raw = dopt(c, this.o, this.v && (this.o.dictionary ? 6 : 2), f2 && 4, this.s);
        if (this.v)
          zlh(raw, this.o), this.v = 0;
        if (f2)
          wbytes(raw, raw.length - 4, this.c.d());
        this.ondata(raw, f2);
      };
      Zlib2.prototype.flush = function() {
        Deflate.prototype.flush.call(this);
      };
      return Zlib2;
    })();
    AsyncZlib = /* @__PURE__ */ (function() {
      function AsyncZlib2(opts, cb) {
        astrmify([
          bDflt,
          zle,
          function() {
            return [astrm, Deflate, Zlib];
          }
        ], this, StrmOpt.call(this, opts, cb), function(ev) {
          var strm = new Zlib(ev.data);
          onmessage = astrm(strm);
        }, 10, 1);
      }
      return AsyncZlib2;
    })();
    Unzlib = /* @__PURE__ */ (function() {
      function Unzlib2(opts, cb) {
        Inflate.call(this, opts, cb);
        this.v = opts && opts.dictionary ? 2 : 1;
      }
      Unzlib2.prototype.push = function(chunk, final) {
        Inflate.prototype.e.call(this, chunk);
        if (this.v) {
          if (this.p.length < 6 && !final)
            return;
          this.p = this.p.subarray(zls(this.p, this.v - 1)), this.v = 0;
        }
        if (final) {
          if (this.p.length < 4)
            err(6, "invalid zlib data");
          this.p = this.p.subarray(0, -4);
        }
        Inflate.prototype.c.call(this, final);
      };
      return Unzlib2;
    })();
    AsyncUnzlib = /* @__PURE__ */ (function() {
      function AsyncUnzlib2(opts, cb) {
        astrmify([
          bInflt,
          zule,
          function() {
            return [astrm, Inflate, Unzlib];
          }
        ], this, StrmOpt.call(this, opts, cb), function(ev) {
          var strm = new Unzlib(ev.data);
          onmessage = astrm(strm);
        }, 11, 0);
      }
      return AsyncUnzlib2;
    })();
    Decompress = /* @__PURE__ */ (function() {
      function Decompress2(opts, cb) {
        this.o = StrmOpt.call(this, opts, cb) || {};
        this.G = Gunzip;
        this.I = Inflate;
        this.Z = Unzlib;
      }
      Decompress2.prototype.i = function() {
        var _this = this;
        this.s.ondata = function(dat, final) {
          _this.ondata(dat, final);
        };
      };
      Decompress2.prototype.push = function(chunk, final) {
        if (!this.ondata)
          err(5);
        if (!this.s) {
          if (this.p && this.p.length) {
            var n = new u8(this.p.length + chunk.length);
            n.set(this.p), n.set(chunk, this.p.length);
          } else
            this.p = chunk;
          if (this.p.length > 2) {
            this.s = this.p[0] == 31 && this.p[1] == 139 && this.p[2] == 8 ? new this.G(this.o) : (this.p[0] & 15) != 8 || this.p[0] >> 4 > 7 || (this.p[0] << 8 | this.p[1]) % 31 ? new this.I(this.o) : new this.Z(this.o);
            this.i();
            this.s.push(this.p, final);
            this.p = null;
          }
        } else
          this.s.push(chunk, final);
      };
      return Decompress2;
    })();
    AsyncDecompress = /* @__PURE__ */ (function() {
      function AsyncDecompress2(opts, cb) {
        Decompress.call(this, opts, cb);
        this.queuedSize = 0;
        this.G = AsyncGunzip;
        this.I = AsyncInflate;
        this.Z = AsyncUnzlib;
      }
      AsyncDecompress2.prototype.i = function() {
        var _this = this;
        this.s.ondata = function(err2, dat, final) {
          _this.ondata(err2, dat, final);
        };
        this.s.ondrain = function(size) {
          _this.queuedSize -= size;
          if (_this.ondrain)
            _this.ondrain(size);
        };
      };
      AsyncDecompress2.prototype.push = function(chunk, final) {
        this.queuedSize += chunk.length;
        Decompress.prototype.push.call(this, chunk, final);
      };
      return AsyncDecompress2;
    })();
    fltn = function(d, p, t, o) {
      for (var k in d) {
        var val = d[k], n = p + k, op = o;
        if (Array.isArray(val))
          op = mrg(o, val[1]), val = val[0];
        if (val instanceof u8)
          t[n] = [val, op];
        else {
          t[n += "/"] = [new u8(0), op];
          fltn(val, n, t, o);
        }
      }
    };
    te = typeof TextEncoder != "undefined" && /* @__PURE__ */ new TextEncoder();
    td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
    tds = 0;
    try {
      td.decode(et, { stream: true });
      tds = 1;
    } catch (e) {
    }
    dutf8 = function(d) {
      for (var r = "", i2 = 0; ; ) {
        var c = d[i2++];
        var eb = (c > 127) + (c > 223) + (c > 239);
        if (i2 + eb > d.length)
          return { s: r, r: slc(d, i2 - 1) };
        if (!eb)
          r += String.fromCharCode(c);
        else if (eb == 3) {
          c = ((c & 15) << 18 | (d[i2++] & 63) << 12 | (d[i2++] & 63) << 6 | d[i2++] & 63) - 65536, r += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
        } else if (eb & 1)
          r += String.fromCharCode((c & 31) << 6 | d[i2++] & 63);
        else
          r += String.fromCharCode((c & 15) << 12 | (d[i2++] & 63) << 6 | d[i2++] & 63);
      }
    };
    DecodeUTF8 = /* @__PURE__ */ (function() {
      function DecodeUTF82(cb) {
        this.ondata = cb;
        if (tds)
          this.t = new TextDecoder();
        else
          this.p = et;
      }
      DecodeUTF82.prototype.push = function(chunk, final) {
        if (!this.ondata)
          err(5);
        final = !!final;
        if (this.t) {
          this.ondata(this.t.decode(chunk, { stream: true }), final);
          if (final) {
            if (this.t.decode().length)
              err(8);
            this.t = null;
          }
          return;
        }
        if (!this.p)
          err(4);
        var dat = new u8(this.p.length + chunk.length);
        dat.set(this.p);
        dat.set(chunk, this.p.length);
        var _a2 = dutf8(dat), s2 = _a2.s, r = _a2.r;
        if (final) {
          if (r.length)
            err(8);
          this.p = null;
        } else
          this.p = r;
        this.ondata(s2, final);
      };
      return DecodeUTF82;
    })();
    EncodeUTF8 = /* @__PURE__ */ (function() {
      function EncodeUTF82(cb) {
        this.ondata = cb;
      }
      EncodeUTF82.prototype.push = function(chunk, final) {
        if (!this.ondata)
          err(5);
        if (this.d)
          err(4);
        this.ondata(strToU8(chunk), this.d = final || false);
      };
      return EncodeUTF82;
    })();
    dbf = function(l) {
      return l == 1 ? 3 : l < 6 ? 2 : l == 9 ? 1 : 0;
    };
    slzh = function(d, b) {
      return b + 30 + b2(d, b + 26) + b2(d, b + 28);
    };
    zh = function(d, b, z) {
      var fnl = b2(d, b + 28), fn = strFromU8(d.subarray(b + 46, b + 46 + fnl), !(b2(d, b + 8) & 2048)), es = b + 46 + fnl, bs = b4(d, b + 20);
      var _a2 = z && bs == 4294967295 ? z64e(d, es) : [bs, b4(d, b + 24), b4(d, b + 42)], sc = _a2[0], su = _a2[1], off = _a2[2];
      return [b2(d, b + 10), sc, su, fn, es + b2(d, b + 30) + b2(d, b + 32), off];
    };
    z64e = function(d, b) {
      for (; b2(d, b) != 1; b += 4 + b2(d, b + 2))
        ;
      return [b8(d, b + 12), b8(d, b + 4), b8(d, b + 20)];
    };
    exfl = function(ex) {
      var le = 0;
      if (ex) {
        for (var k in ex) {
          var l = ex[k].length;
          if (l > 65535)
            err(9);
          le += l + 4;
        }
      }
      return le;
    };
    wzh = function(d, b, f2, fn, u2, c, ce, co) {
      var fl2 = fn.length, ex = f2.extra, col = co && co.length;
      var exl = exfl(ex);
      wbytes(d, b, ce != null ? 33639248 : 67324752), b += 4;
      if (ce != null)
        d[b++] = 20, d[b++] = f2.os;
      d[b] = 20, b += 2;
      d[b++] = f2.flag << 1 | (c < 0 && 8), d[b++] = u2 && 8;
      d[b++] = f2.compression & 255, d[b++] = f2.compression >> 8;
      var dt = new Date(f2.mtime == null ? Date.now() : f2.mtime), y = dt.getFullYear() - 1980;
      if (y < 0 || y > 119)
        err(10);
      wbytes(d, b, y << 25 | dt.getMonth() + 1 << 21 | dt.getDate() << 16 | dt.getHours() << 11 | dt.getMinutes() << 5 | dt.getSeconds() >> 1), b += 4;
      if (c != -1) {
        wbytes(d, b, f2.crc);
        wbytes(d, b + 4, c < 0 ? -c - 2 : c);
        wbytes(d, b + 8, f2.size);
      }
      wbytes(d, b + 12, fl2);
      wbytes(d, b + 14, exl), b += 16;
      if (ce != null) {
        wbytes(d, b, col);
        wbytes(d, b + 6, f2.attrs);
        wbytes(d, b + 10, ce), b += 14;
      }
      d.set(fn, b);
      b += fl2;
      if (exl) {
        for (var k in ex) {
          var exf = ex[k], l = exf.length;
          wbytes(d, b, +k);
          wbytes(d, b + 2, l);
          d.set(exf, b + 4), b += 4 + l;
        }
      }
      if (col)
        d.set(co, b), b += col;
      return b;
    };
    wzf = function(o, b, c, d, e) {
      wbytes(o, b, 101010256);
      wbytes(o, b + 8, c);
      wbytes(o, b + 10, c);
      wbytes(o, b + 12, d);
      wbytes(o, b + 16, e);
    };
    ZipPassThrough = /* @__PURE__ */ (function() {
      function ZipPassThrough2(filename) {
        this.filename = filename;
        this.c = crc();
        this.size = 0;
        this.compression = 0;
      }
      ZipPassThrough2.prototype.process = function(chunk, final) {
        this.ondata(null, chunk, final);
      };
      ZipPassThrough2.prototype.push = function(chunk, final) {
        if (!this.ondata)
          err(5);
        this.c.p(chunk);
        this.size += chunk.length;
        if (final)
          this.crc = this.c.d();
        this.process(chunk, final || false);
      };
      return ZipPassThrough2;
    })();
    ZipDeflate = /* @__PURE__ */ (function() {
      function ZipDeflate2(filename, opts) {
        var _this = this;
        if (!opts)
          opts = {};
        ZipPassThrough.call(this, filename);
        this.d = new Deflate(opts, function(dat, final) {
          _this.ondata(null, dat, final);
        });
        this.compression = 8;
        this.flag = dbf(opts.level);
      }
      ZipDeflate2.prototype.process = function(chunk, final) {
        try {
          this.d.push(chunk, final);
        } catch (e) {
          this.ondata(e, null, final);
        }
      };
      ZipDeflate2.prototype.push = function(chunk, final) {
        ZipPassThrough.prototype.push.call(this, chunk, final);
      };
      return ZipDeflate2;
    })();
    AsyncZipDeflate = /* @__PURE__ */ (function() {
      function AsyncZipDeflate2(filename, opts) {
        var _this = this;
        if (!opts)
          opts = {};
        ZipPassThrough.call(this, filename);
        this.d = new AsyncDeflate(opts, function(err2, dat, final) {
          _this.ondata(err2, dat, final);
        });
        this.compression = 8;
        this.flag = dbf(opts.level);
        this.terminate = this.d.terminate;
      }
      AsyncZipDeflate2.prototype.process = function(chunk, final) {
        this.d.push(chunk, final);
      };
      AsyncZipDeflate2.prototype.push = function(chunk, final) {
        ZipPassThrough.prototype.push.call(this, chunk, final);
      };
      return AsyncZipDeflate2;
    })();
    Zip = /* @__PURE__ */ (function() {
      function Zip2(cb) {
        this.ondata = cb;
        this.u = [];
        this.d = 1;
      }
      Zip2.prototype.add = function(file) {
        var _this = this;
        if (!this.ondata)
          err(5);
        if (this.d & 2)
          this.ondata(err(4 + (this.d & 1) * 8, 0, 1), null, false);
        else {
          var f2 = strToU8(file.filename), fl_1 = f2.length;
          var com = file.comment, o = com && strToU8(com);
          var u2 = fl_1 != file.filename.length || o && com.length != o.length;
          var hl_1 = fl_1 + exfl(file.extra) + 30;
          if (fl_1 > 65535)
            this.ondata(err(11, 0, 1), null, false);
          var header = new u8(hl_1);
          wzh(header, 0, file, f2, u2, -1);
          var chks_1 = [header];
          var pAll_1 = function() {
            for (var _i = 0, chks_2 = chks_1; _i < chks_2.length; _i++) {
              var chk = chks_2[_i];
              _this.ondata(null, chk, false);
            }
            chks_1 = [];
          };
          var tr_1 = this.d;
          this.d = 0;
          var ind_1 = this.u.length;
          var uf_1 = mrg(file, {
            f: f2,
            u: u2,
            o,
            t: function() {
              if (file.terminate)
                file.terminate();
            },
            r: function() {
              pAll_1();
              if (tr_1) {
                var nxt = _this.u[ind_1 + 1];
                if (nxt)
                  nxt.r();
                else
                  _this.d = 1;
              }
              tr_1 = 1;
            }
          });
          var cl_1 = 0;
          file.ondata = function(err2, dat, final) {
            if (err2) {
              _this.ondata(err2, dat, final);
              _this.terminate();
            } else {
              cl_1 += dat.length;
              chks_1.push(dat);
              if (final) {
                var dd = new u8(16);
                wbytes(dd, 0, 134695760);
                wbytes(dd, 4, file.crc);
                wbytes(dd, 8, cl_1);
                wbytes(dd, 12, file.size);
                chks_1.push(dd);
                uf_1.c = cl_1, uf_1.b = hl_1 + cl_1 + 16, uf_1.crc = file.crc, uf_1.size = file.size;
                if (tr_1)
                  uf_1.r();
                tr_1 = 1;
              } else if (tr_1)
                pAll_1();
            }
          };
          this.u.push(uf_1);
        }
      };
      Zip2.prototype.end = function() {
        var _this = this;
        if (this.d & 2) {
          this.ondata(err(4 + (this.d & 1) * 8, 0, 1), null, true);
          return;
        }
        if (this.d)
          this.e();
        else
          this.u.push({
            r: function() {
              if (!(_this.d & 1))
                return;
              _this.u.splice(-1, 1);
              _this.e();
            },
            t: function() {
            }
          });
        this.d = 3;
      };
      Zip2.prototype.e = function() {
        var bt = 0, l = 0, tl = 0;
        for (var _i = 0, _a2 = this.u; _i < _a2.length; _i++) {
          var f2 = _a2[_i];
          tl += 46 + f2.f.length + exfl(f2.extra) + (f2.o ? f2.o.length : 0);
        }
        var out = new u8(tl + 22);
        for (var _b2 = 0, _c = this.u; _b2 < _c.length; _b2++) {
          var f2 = _c[_b2];
          wzh(out, bt, f2, f2.f, f2.u, -f2.c - 2, l, f2.o);
          bt += 46 + f2.f.length + exfl(f2.extra) + (f2.o ? f2.o.length : 0), l += f2.b;
        }
        wzf(out, bt, this.u.length, tl, l);
        this.ondata(null, out, true);
        this.d = 2;
      };
      Zip2.prototype.terminate = function() {
        for (var _i = 0, _a2 = this.u; _i < _a2.length; _i++) {
          var f2 = _a2[_i];
          f2.t();
        }
        this.d = 2;
      };
      return Zip2;
    })();
    UnzipPassThrough = /* @__PURE__ */ (function() {
      function UnzipPassThrough2() {
      }
      UnzipPassThrough2.prototype.push = function(data, final) {
        this.ondata(null, data, final);
      };
      UnzipPassThrough2.compression = 0;
      return UnzipPassThrough2;
    })();
    UnzipInflate = /* @__PURE__ */ (function() {
      function UnzipInflate2() {
        var _this = this;
        this.i = new Inflate(function(dat, final) {
          _this.ondata(null, dat, final);
        });
      }
      UnzipInflate2.prototype.push = function(data, final) {
        try {
          this.i.push(data, final);
        } catch (e) {
          this.ondata(e, null, final);
        }
      };
      UnzipInflate2.compression = 8;
      return UnzipInflate2;
    })();
    AsyncUnzipInflate = /* @__PURE__ */ (function() {
      function AsyncUnzipInflate2(_, sz) {
        var _this = this;
        if (sz < 32e4) {
          this.i = new Inflate(function(dat, final) {
            _this.ondata(null, dat, final);
          });
        } else {
          this.i = new AsyncInflate(function(err2, dat, final) {
            _this.ondata(err2, dat, final);
          });
          this.terminate = this.i.terminate;
        }
      }
      AsyncUnzipInflate2.prototype.push = function(data, final) {
        if (this.i.terminate)
          data = slc(data, 0);
        this.i.push(data, final);
      };
      AsyncUnzipInflate2.compression = 8;
      return AsyncUnzipInflate2;
    })();
    Unzip = /* @__PURE__ */ (function() {
      function Unzip2(cb) {
        this.onfile = cb;
        this.k = [];
        this.o = {
          0: UnzipPassThrough
        };
        this.p = et;
      }
      Unzip2.prototype.push = function(chunk, final) {
        var _this = this;
        if (!this.onfile)
          err(5);
        if (!this.p)
          err(4);
        if (this.c > 0) {
          var len = Math.min(this.c, chunk.length);
          var toAdd = chunk.subarray(0, len);
          this.c -= len;
          if (this.d)
            this.d.push(toAdd, !this.c);
          else
            this.k[0].push(toAdd);
          chunk = chunk.subarray(len);
          if (chunk.length)
            return this.push(chunk, final);
        } else {
          var f2 = 0, i2 = 0, is = void 0, buf = void 0;
          if (!this.p.length)
            buf = chunk;
          else if (!chunk.length)
            buf = this.p;
          else {
            buf = new u8(this.p.length + chunk.length);
            buf.set(this.p), buf.set(chunk, this.p.length);
          }
          var l = buf.length, oc = this.c, add = oc && this.d;
          var _loop_2 = function() {
            var _a2;
            var sig = b4(buf, i2);
            if (sig == 67324752) {
              f2 = 1, is = i2;
              this_1.d = null;
              this_1.c = 0;
              var bf = b2(buf, i2 + 6), cmp_1 = b2(buf, i2 + 8), u2 = bf & 2048, dd = bf & 8, fnl = b2(buf, i2 + 26), es = b2(buf, i2 + 28);
              if (l > i2 + 30 + fnl + es) {
                var chks_3 = [];
                this_1.k.unshift(chks_3);
                f2 = 2;
                var sc_1 = b4(buf, i2 + 18), su_1 = b4(buf, i2 + 22);
                var fn_1 = strFromU8(buf.subarray(i2 + 30, i2 += 30 + fnl), !u2);
                if (sc_1 == 4294967295) {
                  _a2 = dd ? [-2] : z64e(buf, i2), sc_1 = _a2[0], su_1 = _a2[1];
                } else if (dd)
                  sc_1 = -1;
                i2 += es;
                this_1.c = sc_1;
                var d_1;
                var file_1 = {
                  name: fn_1,
                  compression: cmp_1,
                  start: function() {
                    if (!file_1.ondata)
                      err(5);
                    if (!sc_1)
                      file_1.ondata(null, et, true);
                    else {
                      var ctr = _this.o[cmp_1];
                      if (!ctr)
                        file_1.ondata(err(14, "unknown compression type " + cmp_1, 1), null, false);
                      d_1 = sc_1 < 0 ? new ctr(fn_1) : new ctr(fn_1, sc_1, su_1);
                      d_1.ondata = function(err2, dat3, final2) {
                        file_1.ondata(err2, dat3, final2);
                      };
                      for (var _i = 0, chks_4 = chks_3; _i < chks_4.length; _i++) {
                        var dat2 = chks_4[_i];
                        d_1.push(dat2, false);
                      }
                      if (_this.k[0] == chks_3 && _this.c)
                        _this.d = d_1;
                      else
                        d_1.push(et, true);
                    }
                  },
                  terminate: function() {
                    if (d_1 && d_1.terminate)
                      d_1.terminate();
                  }
                };
                if (sc_1 >= 0)
                  file_1.size = sc_1, file_1.originalSize = su_1;
                this_1.onfile(file_1);
              }
              return "break";
            } else if (oc) {
              if (sig == 134695760) {
                is = i2 += 12 + (oc == -2 && 8), f2 = 3, this_1.c = 0;
                return "break";
              } else if (sig == 33639248) {
                is = i2 -= 4, f2 = 3, this_1.c = 0;
                return "break";
              }
            }
          };
          var this_1 = this;
          for (; i2 < l - 4; ++i2) {
            var state_1 = _loop_2();
            if (state_1 === "break")
              break;
          }
          this.p = et;
          if (oc < 0) {
            var dat = f2 ? buf.subarray(0, is - 12 - (oc == -2 && 8) - (b4(buf, is - 16) == 134695760 && 4)) : buf.subarray(0, i2);
            if (add)
              add.push(dat, !!f2);
            else
              this.k[+(f2 == 2)].push(dat);
          }
          if (f2 & 2)
            return this.push(buf.subarray(i2), final);
          this.p = buf.subarray(i2);
        }
        if (final) {
          if (this.c)
            err(13);
          this.p = null;
        }
      };
      Unzip2.prototype.register = function(decoder) {
        this.o[decoder.compression] = decoder;
      };
      return Unzip2;
    })();
    mt = typeof queueMicrotask == "function" ? queueMicrotask : typeof setTimeout == "function" ? setTimeout : function(fn) {
      fn();
    };
  }
});

// apps/web/src/native/sync-socket.ts
var sync_socket_exports = {};
__export(sync_socket_exports, {
  SyncSocket: () => SyncSocket
});
var SyncSocketWeb, SyncSocket;
var init_sync_socket = __esm({
  "apps/web/src/native/sync-socket.ts"() {
    "use strict";
    init_dist();
    SyncSocketWeb = class extends WebPlugin {
      constructor() {
        super(...arguments);
        __publicField(this, "socket", null);
      }
      async connect(options) {
        await this.close();
        await new Promise((resolve2, reject) => {
          const socket2 = new WebSocket(options.url);
          this.socket = socket2;
          socket2.onopen = () => {
            this.notifyListeners("open", {});
            resolve2();
          };
          socket2.onerror = () => reject(new Error("Could not reach master"));
          socket2.onmessage = (event) => {
            this.notifyListeners("message", { data: String(event.data) });
          };
          socket2.onclose = () => {
            this.notifyListeners("close", {});
          };
        });
      }
      async send(options) {
        if (!this.socket || this.socket.readyState !== WebSocket.OPEN) return;
        this.socket.send(options.message);
      }
      async close() {
        const socket2 = this.socket;
        this.socket = null;
        if (!socket2) return;
        socket2.onopen = null;
        socket2.onmessage = null;
        socket2.onerror = null;
        socket2.onclose = null;
        try {
          socket2.close();
        } catch {
        }
      }
      async wakeLocalNetwork() {
      }
      async advertise() {
      }
      async startHost() {
        return {};
      }
      async hostSend() {
      }
      async drainHost() {
        return { events: [], peers: [] };
      }
      async lanAddress() {
        return {};
      }
      async outputLatency() {
        return {};
      }
    };
    SyncSocket = registerPlugin("SyncSocket", {
      web: () => new SyncSocketWeb()
    });
  }
});

// node_modules/capacitor-websocket-server/dist/esm/definitions.js
var init_definitions2 = __esm({
  "node_modules/capacitor-websocket-server/dist/esm/definitions.js"() {
  }
});

// node_modules/capacitor-websocket-server/dist/esm/web.js
var web_exports2 = {};
__export(web_exports2, {
  WebsocketServerWeb: () => WebsocketServerWeb
});
var WebsocketServerWeb;
var init_web2 = __esm({
  "node_modules/capacitor-websocket-server/dist/esm/web.js"() {
    init_dist();
    WebsocketServerWeb = class extends WebPlugin {
      async start(_options) {
        throw this.unavailable("WebSocket Server is not available in web browsers. This plugin requires native iOS or Android.");
      }
      async stop() {
        throw this.unavailable("WebSocket Server is not available in web browsers. This plugin requires native iOS or Android.");
      }
      async send(_options) {
        throw this.unavailable("WebSocket Server is not available in web browsers. This plugin requires native iOS or Android.");
      }
      async sendBinary(_options) {
        throw this.unavailable("WebSocket Server is not available in web browsers. This plugin requires native iOS or Android.");
      }
      async close(_options) {
        throw this.unavailable("WebSocket Server is not available in web browsers. This plugin requires native iOS or Android.");
      }
      async getInterfaces() {
        throw this.unavailable("WebSocket Server is not available in web browsers. This plugin requires native iOS or Android.");
      }
    };
  }
});

// node_modules/capacitor-websocket-server/dist/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  WebsocketServer: () => WebsocketServer
});
var WebsocketServer;
var init_esm = __esm({
  "node_modules/capacitor-websocket-server/dist/esm/index.js"() {
    init_dist();
    init_definitions2();
    WebsocketServer = registerPlugin("WebsocketServer", {
      web: () => Promise.resolve().then(() => (init_web2(), web_exports2)).then((m) => new m.WebsocketServerWeb())
    });
  }
});

// packages/core/src/timeline.ts
var DEFAULT_TEMPO = {
  time: 0,
  measure: 1,
  bpm: 120,
  numerator: 4,
  denominator: 4
};
var MEASURE_EPS = 1e-9;
var SECTION_BOUNDARY_EPS = 1e-3;
function sectionNamed(section, name) {
  return section?.name.trim().toLocaleUpperCase("tr-TR") === name.trim().toLocaleUpperCase("tr-TR");
}
function firstSectionNamed(sections, name) {
  return sectionNamed(sections?.[0], name);
}
function nextSectionStart(sections, time) {
  if (!sections || sections.length === 0) return void 0;
  const current = sectionAt(sections, time);
  const following = sectionAfter(sections, current);
  if (following) return following.start;
  const later = sections.find((section) => section.start > time + 1e-6);
  return later?.start;
}
function sectionBoundaryTimes(sections) {
  if (!sections || sections.length === 0) return [0];
  const times = [];
  for (const section of sections) {
    for (const time of [section.start, section.end]) {
      if (!times.some((existing) => Math.abs(existing - time) < 1e-6)) times.push(time);
    }
  }
  return times.sort((a, b) => a - b);
}
function snapToSectionBoundary(sections, time) {
  return snapToMeasureStart(sectionBoundaryTimes(sections), time);
}
function snapToMeasureStart(starts, time) {
  if (starts.length === 0) return Math.max(0, time);
  let best = starts[0] ?? 0;
  for (const start of starts) {
    if (Math.abs(start - time) < Math.abs(best - time)) best = start;
  }
  return best;
}
function nextMeasureStart(starts, time, fallback) {
  for (const start of starts) {
    if (start > time + 1e-6) return start;
  }
  return fallback ?? starts[starts.length - 1] ?? Math.max(0, time);
}
function panicDefaultTarget(sections, measureStarts, time) {
  const sectionStart = nextSectionStart(sections, time);
  if (sectionStart != null) return snapToMeasureStart(measureStarts, sectionStart);
  return nextMeasureStart(measureStarts, time);
}
function sectionAfter(sections, section) {
  if (!sections || !section) return void 0;
  const index = sections.findIndex(
    (item) => item === section || item.start === section.start && item.end === section.end && item.name === section.name
  );
  return index >= 0 ? sections[index + 1] : void 0;
}
function secondsPerQuarter(bpm) {
  return 60 / bpm;
}
function resolvedMeter(point, inherited) {
  const numerator = point.numerator > 0 ? point.numerator : inherited?.numerator && inherited.numerator > 0 ? inherited.numerator : 4;
  const denominator = point.denominator > 0 ? point.denominator : inherited?.denominator && inherited.denominator > 0 ? inherited.denominator : 4;
  return { numerator, denominator };
}
function withResolvedMeter(point, inherited) {
  return { ...point, ...resolvedMeter(point, inherited) };
}
function secondsPerMeasure(point) {
  const { numerator, denominator } = resolvedMeter(point);
  return numerator * secondsPerQuarter(point.bpm) * (4 / denominator);
}
function secondsPerBeat(point) {
  const { numerator } = resolvedMeter(point);
  return secondsPerMeasure(point) / numerator;
}
function measureStartTimes(map, duration) {
  const end = Math.max(0, duration);
  const points = map && map.length > 0 ? [...map].sort((a, b) => a.time - b.time) : [DEFAULT_TEMPO];
  const starts = [];
  let inherited = { numerator: 4, denominator: 4 };
  for (let index = 0; index < points.length; index++) {
    const point = points[index];
    if (!point || point.time > end) continue;
    if (point.numerator > 0 && point.denominator > 0) {
      inherited = { numerator: point.numerator, denominator: point.denominator };
    }
    const segmentEnd = Math.min(end, points[index + 1]?.time ?? end);
    const length = secondsPerMeasure(withResolvedMeter(point, inherited));
    if (length <= 0) continue;
    const first = Math.max(0, point.time);
    const count = Math.max(0, Math.ceil((segmentEnd - first) / length - 1e-6));
    for (let i2 = 0; i2 < count; i2++) {
      const time = first + i2 * length;
      if (time >= segmentEnd - 1e-6) break;
      if (!starts.some((existing) => Math.abs(existing - time) < 1e-6)) starts.push(time);
    }
  }
  if (starts.length === 0) starts.push(0);
  return starts.sort((a, b) => a - b);
}
function tempoAt(map, time) {
  if (map.length === 0) return DEFAULT_TEMPO;
  let current = map[0] ?? DEFAULT_TEMPO;
  for (const point of map) {
    if (point.time <= time + 1e-9) current = point;
    else break;
  }
  return current;
}
function timeToMusical(map, time) {
  const points = map.length > 0 ? map : [DEFAULT_TEMPO];
  const t = Math.max(0, time);
  let active = points[0] ?? DEFAULT_TEMPO;
  for (let i2 = 0; i2 < points.length; i2++) {
    const point = points[i2];
    const next = points[i2 + 1];
    if (!point) continue;
    if (next && t >= next.time) {
      active = next;
      continue;
    }
    active = point;
    break;
  }
  let inherited = { numerator: 4, denominator: 4 };
  for (const point of points) {
    if (point.time > active.time + 1e-9) break;
    if (point.numerator > 0 && point.denominator > 0) {
      inherited = { numerator: point.numerator, denominator: point.denominator };
    }
  }
  const resolved = withResolvedMeter(active, inherited);
  const elapsed = t - active.time;
  const measureLen = secondsPerMeasure(resolved);
  const beatLen = secondsPerBeat(resolved);
  if (measureLen <= 0 || beatLen <= 0) {
    return { measure: active.measure, beat: 1 };
  }
  const measuresElapsed = elapsed / measureLen;
  const wholeMeasures = Math.floor(measuresElapsed + MEASURE_EPS);
  const remainder = elapsed - wholeMeasures * measureLen;
  const beat = 1 + remainder / beatLen;
  return {
    measure: active.measure + wholeMeasures,
    beat: Math.min(resolved.numerator + 0.999, Math.max(1, beat))
  };
}
function measureRangeFill(map, start, end, time) {
  if (time < start - 1e-6) return 0;
  if (time >= end - 1e-6) return 1;
  const points = map ?? [];
  const startMeasure = timeToMusical(points, start).measure;
  const last = Math.max(start, end - 0.02);
  const endMeasure = timeToMusical(points, last).measure;
  const currentMeasure = timeToMusical(points, Math.min(Math.max(time, start), last)).measure;
  const total = Math.max(1, endMeasure - startMeasure + 1);
  const number = Math.min(total, Math.max(1, currentMeasure - startMeasure + 1));
  return number / total;
}
function timeInSection(time, start, end) {
  return time >= start - SECTION_BOUNDARY_EPS && time < end;
}
function sectionAt(sections, time) {
  const next = sections.find(
    (section) => section.start > time && section.start - time <= SECTION_BOUNDARY_EPS
  );
  const at = next ? next.start : time;
  return sections.find((section) => timeInSection(at, section.start, section.end));
}
var EVENT_BARLINE_SNAP_SEC = 0.05;
function resolveTempoMeters(map) {
  let inherited = { numerator: 4, denominator: 4 };
  return map.map((point) => {
    if (point.numerator > 0 && point.denominator > 0) {
      inherited = { numerator: point.numerator, denominator: point.denominator };
      return { ...point, ...inherited };
    }
    return { ...point, ...inherited };
  });
}
function snapNearBarline(starts, time, always) {
  if (starts.length === 0) return time;
  const snapped = snapToMeasureStart(starts, time);
  if (always || Math.abs(snapped - time) <= EVENT_BARLINE_SNAP_SEC) return snapped;
  return time;
}
function snapSongToMeasureGrid(song) {
  const tempoMap = resolveTempoMeters(song.tempoMap);
  const gridEnd = Math.max(
    song.duration,
    song.sections.reduce((end, section) => Math.max(end, section.end), 0)
  );
  const starts = measureStartTimes(tempoMap, gridEnd);
  const sections = song.sections.map((section) => ({
    ...section,
    start: snapNearBarline(starts, section.start, true),
    end: snapNearBarline(starts, section.end, true)
  }));
  const measureLen = starts.length >= 2 ? starts[1] - starts[0] : 2;
  for (let index = 0; index < sections.length - 1; index++) {
    const current = sections[index];
    const next = sections[index + 1];
    if (!current || !next) continue;
    if (current.end > next.start || next.start - current.end < measureLen * 0.5) {
      current.end = next.start;
    }
    if (current.end <= current.start) current.end = next.start;
  }
  const snapEvent = (event) => ({
    ...event,
    time: snapNearBarline(starts, event.time, false),
    end: event.end != null ? snapNearBarline(starts, event.end, false) : event.end
  });
  return {
    ...song,
    tempoMap,
    sections,
    lyrics: song.lyrics?.map(snapEvent),
    chords: song.chords?.map(snapEvent)
  };
}

// packages/core/src/models.ts
var FinishMode = {
  Stop: "STOP",
  PlayNext: "PLAY_NEXT"
};
var PlayMode = {
  View: "VIEW",
  Playback: "PLAYBACK",
  ClickOnly: "CLICK_ONLY",
  Free: "FREE"
};
var SetlistPerformanceMode = {
  FollowSongInfo: "FOLLOW_SONG_INFO",
  ClickOnly: "CLICK_ONLY",
  MetronomeContinuous: "METRONOME_CONTINUOUS",
  Free: "FREE"
};
function normalizeUserPlayMode(mode) {
  if (mode === PlayMode.Playback || mode === PlayMode.ClickOnly) return PlayMode.Playback;
  return PlayMode.View;
}
function entryPlayMode(entry, info) {
  if (info?.playMode === PlayMode.Playback || info?.playMode === PlayMode.ClickOnly) {
    return PlayMode.Playback;
  }
  if (info?.playMode === PlayMode.View || info?.playMode === PlayMode.Free) {
    return PlayMode.View;
  }
  if (entry?.playMode === PlayMode.Playback || entry?.playMode === PlayMode.ClickOnly) {
    return PlayMode.Playback;
  }
  return PlayMode.View;
}
function isFreePlayMode(mode) {
  return mode === PlayMode.Free;
}
var PlaybackState = {
  Idle: "IDLE",
  Loading: "LOADING",
  Ready: "READY",
  Playing: "PLAYING",
  Transitioning: "TRANSITIONING",
  Stopping: "STOPPING",
  Error: "ERROR"
};
var DeckId = {
  A: "A",
  B: "B"
};
var DEFAULT_METRONOME_BPM = 120;
var DEFAULT_METRONOME_NUMERATOR = 4;
var DEFAULT_METRONOME_DENOMINATOR = 4;
function positiveInt(value, fallback) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}
function optionalText(value) {
  if (typeof value !== "string") return void 0;
  const text = value.trim();
  return text.length > 0 ? text : void 0;
}
function optionalKita(value) {
  const parsed = typeof value === "string" && value.trim() !== "" ? Number(value) : Number(value);
  if (!Number.isInteger(parsed) || parsed < 0 || parsed > 9) return void 0;
  return parsed;
}
function parseSongInfo(raw) {
  const record = raw && typeof raw === "object" ? raw : void 0;
  const numerator = positiveInt(record?.numerator, DEFAULT_METRONOME_NUMERATOR);
  const info = {
    bpm: positiveInt(record?.bpm, DEFAULT_METRONOME_BPM),
    numerator,
    denominator: positiveInt(record?.denominator, DEFAULT_METRONOME_DENOMINATOR)
  };
  const duration = positiveInt(record?.duration, 0);
  if (duration > 0) info.duration = duration;
  if (record?.startMode === "COUNT" || record?.startMode === "SERBEST") {
    info.startMode = record.startMode;
  }
  const key = optionalText(record?.key);
  const scale = optionalText(record?.scale);
  const style = optionalText(record?.style);
  const kita = optionalKita(record?.kita);
  const notes = optionalText(record?.notes);
  if (key) info.key = key;
  if (scale) info.scale = scale;
  if (style) info.style = style;
  if (kita != null) info.kita = kita;
  if (notes) info.notes = notes;
  if (record?.playMode === PlayMode.View || record?.playMode === PlayMode.Playback || record?.playMode === PlayMode.ClickOnly || record?.playMode === PlayMode.Free) {
    info.playMode = record.playMode;
  }
  const startAt = Number(record?.startAt);
  if (Number.isFinite(startAt) && startAt >= 0) info.startAt = startAt;
  if (record?.pageNotes && typeof record.pageNotes === "object") {
    const pageNotes = {};
    for (const page of ["lyrics", "score", "chord", "drums"]) {
      const text = optionalText(record.pageNotes[page]);
      if (text) pageNotes[page] = text;
    }
    if (Object.keys(pageNotes).length > 0) info.pageNotes = pageNotes;
  }
  const metroNotes = parseMetroNotes(record?.metroNotes);
  if (metroNotes) info.metroNotes = metroNotes;
  return info;
}
function parseMetroNotes(raw) {
  if (!raw || typeof raw !== "object") return void 0;
  const record = raw;
  const lyrics = optionalText(record.lyrics);
  const drums = optionalText(record.drums);
  if (!lyrics && !drums) return void 0;
  return {
    ...lyrics ? { lyrics } : {},
    ...drums ? { drums } : {}
  };
}
function normalizeSong(raw, folder) {
  const record = raw && typeof raw === "object" && !Array.isArray(raw) ? raw : {};
  const info = parseSongInfo(record.info);
  const folderName = typeof record.folder === "string" && record.folder.trim() || folder?.trim() || "";
  const id = typeof record.id === "string" && record.id.trim() || folderName || "song";
  const title = typeof record.title === "string" && record.title.trim() || folderName || id;
  const duration = Number(record.duration);
  return snapSongToMeasureGrid({
    id,
    version: positiveInt(record.version, 1),
    title,
    folder: folderName || void 0,
    duration: Number.isFinite(duration) && duration >= 0 ? duration : info.duration ?? 0,
    clickDuration: typeof record.clickDuration === "number" ? record.clickDuration : void 0,
    nextSongAt: typeof record.nextSongAt === "number" ? record.nextSongAt : void 0,
    finalAt: typeof record.finalAt === "number" ? record.finalAt : void 0,
    key: typeof record.key === "string" ? record.key : info.key,
    scale: typeof record.scale === "string" ? record.scale : info.scale,
    style: typeof record.style === "string" ? record.style : info.style,
    kita: optionalKita(record.kita) ?? info.kita,
    assets: Array.isArray(record.assets) ? record.assets : [],
    tempoMap: Array.isArray(record.tempoMap) && record.tempoMap.length > 0 ? record.tempoMap : metronomeTempoMap(info),
    sections: Array.isArray(record.sections) ? record.sections : [],
    lyrics: Array.isArray(record.lyrics) ? record.lyrics : void 0,
    chords: Array.isArray(record.chords) ? record.chords : void 0,
    patterns: Array.isArray(record.patterns) ? record.patterns : void 0,
    tags: Array.isArray(record.tags) ? record.tags : void 0,
    info
  });
}
function metronomeTempoMap(info) {
  const parsed = parseSongInfo(info);
  return [
    {
      time: 0,
      measure: 1,
      bpm: parsed.bpm,
      numerator: parsed.numerator,
      denominator: parsed.denominator
    }
  ];
}
function metronomeSongView(song) {
  const info = parseSongInfo(song.info);
  return {
    ...song,
    duration: info.duration ?? song.duration,
    key: info.key ?? song.key,
    scale: info.scale ?? song.scale,
    style: info.style ?? song.style,
    kita: info.kita ?? song.kita,
    tempoMap: song.info ? metronomeTempoMap(info) : song.tempoMap
  };
}
function visibleSongName(value) {
  return value?.normalize("NFC").trim() ?? "";
}
function songDisplayName(song) {
  return visibleSongName(song?.title) || visibleSongName(song?.folder) || "\u2014";
}
function randomUuid() {
  const source2 = typeof crypto === "undefined" ? void 0 : crypto;
  if (typeof source2?.randomUUID === "function") return source2.randomUUID();
  const bytes2 = new Uint8Array(16);
  if (typeof source2?.getRandomValues === "function") {
    source2.getRandomValues(bytes2);
  } else {
    for (let i2 = 0; i2 < bytes2.length; i2 += 1) bytes2[i2] = Math.floor(Math.random() * 256);
  }
  bytes2[6] = (bytes2[6] ?? 0) & 15 | 64;
  bytes2[8] = (bytes2[8] ?? 0) & 63 | 128;
  const hex = [...bytes2].map((byte) => byte.toString(16).padStart(2, "0"));
  return [
    hex.slice(0, 4).join(""),
    hex.slice(4, 6).join(""),
    hex.slice(6, 8).join(""),
    hex.slice(8, 10).join(""),
    hex.slice(10, 16).join("")
  ].join("-");
}
function createId(prefix) {
  return `${prefix}_${randomUuid()}`;
}
function isSongEntry(entry) {
  return entry.type === "song";
}
var ELIF_KONUSMA_LABEL = "ELIF KONUSMA";
function isTalkEntry(entry) {
  return entry.type === "talk";
}
function isElifKonusma(entry) {
  return isTalkEntry(entry) && entry.label === ELIF_KONUSMA_LABEL;
}
function isLockedElif(entry) {
  return isElifKonusma(entry) && entry.locked === true;
}

// packages/core/src/practice-files.ts
var CHART_NAMES = /* @__PURE__ */ new Set(["song.json", "settings.json", "lyrics.json", "lyrics.txt"]);
var MASTER_AUDIO = /* @__PURE__ */ new Set(["master.mp3", "master.flac"]);
var CHART_EXT = [".pdf", ".musicxml"];
var TURKISH_ASCII = {
  \u00E7: "c",
  \u00C7: "c",
  \u011F: "g",
  \u011E: "g",
  \u0131: "i",
  \u0130: "i",
  \u00F6: "o",
  \u00D6: "o",
  \u015F: "s",
  \u015E: "s",
  \u00FC: "u",
  \u00DC: "u"
};
function fileNameOf(relPath) {
  const normalized = relPath.replace(/\\/g, "/");
  return normalized.split("/").pop() ?? normalized;
}
function normalizePracticeName(value) {
  return value.normalize("NFC").trim();
}
function practiceFolderSlug(value) {
  const ascii = [...normalizePracticeName(value)].map((char) => TURKISH_ASCII[char] ?? char).join("");
  return ascii.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || "song";
}
function isSafePracticeFolder(name) {
  return /^[A-Za-z0-9][A-Za-z0-9._-]*$/.test(name);
}
function practiceExportFolder(song) {
  if (isSafePracticeFolder(song.id)) return song.id;
  if (song.folder && isSafePracticeFolder(song.folder)) return song.folder;
  return practiceFolderSlug(song.folder || song.id);
}
function samePracticeFolder(left, right) {
  const a = normalizePracticeName(left);
  const b = normalizePracticeName(right);
  return a === b || a.normalize("NFD") === b.normalize("NFD") || practiceFolderSlug(a) === practiceFolderSlug(b);
}
function isMasterPracticeAudio(relPath) {
  return MASTER_AUDIO.has(fileNameOf(relPath).toLowerCase());
}
function isPracticeFile(relPath) {
  const name = fileNameOf(relPath);
  const base = name.toLowerCase();
  if (CHART_NAMES.has(base) || MASTER_AUDIO.has(base)) return true;
  return CHART_EXT.some((ext) => base.endsWith(ext));
}
function filterPracticeFiles(files) {
  return files.filter((file) => isPracticeFile(file));
}
function practiceMasterAudio(files) {
  const lower = files.find((file) => fileNameOf(file).toLowerCase() === "master.mp3");
  if (lower) return lower;
  return files.find((file) => fileNameOf(file).toLowerCase() === "master.flac");
}
function practiceClickAudio(files) {
  return files.find((file) => fileNameOf(file).toLowerCase() === "click.flac");
}
function practiceSongFolder(path) {
  const parts = path.replace(/\\/g, "/").split("/").filter(Boolean);
  const songJson = parts.lastIndexOf("song.json");
  if (songJson >= 1) return parts[songJson - 1] ?? null;
  if (parts.length >= 2 && isPracticeFile(parts[parts.length - 1] ?? "")) {
    return parts[parts.length - 2] ?? null;
  }
  return parts.length === 1 && isPracticeFile(parts[0] ?? "") ? null : parts[0] ?? null;
}

// packages/core/src/audio-engine.ts
var CLICK_FLAC = "Click.flac";
function isClickFlacPath(path) {
  const name = path.replace(/\\/g, "/").split("/").pop();
  return name === CLICK_FLAC;
}
function isClickPlaybackTrack(asset) {
  return asset.audioRole === "click" || isClickFlacPath(asset.path);
}
function clickOnlyMixSilences(asset, playMode) {
  return playMode === PlayMode.ClickOnly && !isClickPlaybackTrack(asset);
}
function playNextCueSeconds(song, clickDuration) {
  const marker = song?.nextSongAt;
  if (typeof marker === "number" && Number.isFinite(marker) && marker >= 0) {
    return marker;
  }
  if (clickDuration > 0) return clickDuration;
  return null;
}
function clickAsset(song) {
  return song.assets.find((asset) => asset.kind === "audio" && asset.audioRole === "click");
}
function hasClickFlac(song, files) {
  if (files) return files.some((file) => isClickFlacPath(file));
  return Boolean(song?.assets?.some((asset) => isClickFlacPath(asset.path)));
}
function backingAssets(song) {
  return (song.assets ?? []).filter(
    (asset) => asset.kind === "audio" && asset.audioRole !== "click" && !isMasterPracticeAudio(asset.path)
  );
}
var AUDIO_FILE = /\.(wav|flac|mp3|aiff|ogg|m4a)$/i;
function hasPlaybackAudio(song, files) {
  if (files) {
    return files.some((file) => AUDIO_FILE.test(file) && !isMasterPracticeAudio(file));
  }
  return Boolean(
    song?.assets.some(
      (asset) => asset.kind === "audio" && !isMasterPracticeAudio(asset.path)
    )
  );
}
function hasSectionInfo(song) {
  return (song?.sections?.length ?? 0) > 0;
}
function isRealMetronomeTrack(song, files) {
  if (!song) return false;
  return !hasBackingAudio(song, files) && !hasSectionInfo(song);
}
function hasBackingAudio(song, files) {
  if (files) {
    return files.some(
      (file) => AUDIO_FILE.test(file) && !isClickFlacPath(file) && !isMasterPracticeAudio(file)
    );
  }
  return Boolean(song && backingAssets(song).length > 0);
}
function defaultLibraryPlayMode(song, files) {
  if (hasPlaybackAudio(song, files)) return PlayMode.Playback;
  return PlayMode.View;
}
function savedOrDefaultLibraryPlayMode(info, song, files) {
  const saved = info?.playMode;
  if (saved === PlayMode.View || saved === PlayMode.Free) return PlayMode.View;
  if (saved === PlayMode.Playback || saved === PlayMode.ClickOnly) return PlayMode.Playback;
  return defaultLibraryPlayMode(song, files);
}
function performanceAudioSong(song) {
  return {
    ...song,
    assets: (song.assets ?? []).filter(
      (asset) => asset.kind !== "audio" || !isMasterPracticeAudio(asset.path)
    )
  };
}

// packages/core/src/fake-audio-engine.ts
var PRIMARY_DECK = DeckId.A;
var SECONDARY_DECK = DeckId.B;

// packages/core/src/setlist.ts
function visibleSetlistEntries(setlist) {
  return setlist.filter((entry) => isSongEntry(entry) || isTalkEntry(entry));
}
function findSongEntryIndex(setlist, fromIndex, direction) {
  let i2 = fromIndex;
  while (i2 >= 0 && i2 < setlist.length) {
    const entry = setlist[i2];
    if (entry && isSongEntry(entry)) return i2;
    i2 += direction;
  }
  return -1;
}
function previousSongIndex(setlist, currentIndex) {
  return findSongEntryIndex(setlist, currentIndex - 1, -1);
}
function nextUnskippedSongIndex(setlist, currentIndex) {
  let i2 = currentIndex + 1;
  while (i2 < setlist.length) {
    const entry = setlist[i2];
    if (entry && isSongEntry(entry) && !entry.skipped) return i2;
    i2 += 1;
  }
  return -1;
}
function nextEndedSelectionId(setlist, currentIndex, songs) {
  const current = setlist[currentIndex];
  for (let i2 = currentIndex + 1; i2 < setlist.length; i2++) {
    const entry = setlist[i2];
    if (!entry) continue;
    if (isTalkEntry(entry)) return entry.entryId;
    if (!isSongEntry(entry) || entry.skipped) continue;
    if (current && isSongEntry(current) && songs && songsHaveDifferentKeys(current, entry, songs)) {
      return lockedElifEntry(current.entryId, entry.entryId).entryId;
    }
    return entry.entryId;
  }
  return null;
}
function pageSongEntryId(displayed, entryId) {
  if (!entryId) return null;
  const index = displayed.findIndex((entry) => entry.entryId === entryId);
  const at = index >= 0 ? displayed[index] : void 0;
  if (!at || isSongEntry(at)) return entryId;
  for (let i2 = index + 1; i2 < displayed.length; i2++) {
    const entry = displayed[i2];
    if (entry && isSongEntry(entry) && !entry.skipped) return entry.entryId;
  }
  for (let i2 = index - 1; i2 >= 0; i2--) {
    const entry = displayed[i2];
    if (entry && isSongEntry(entry) && !entry.skipped) return entry.entryId;
  }
  return null;
}
function lastSongIndex(setlist) {
  return findSongEntryIndex(setlist, setlist.length - 1, -1);
}
function listedSongKey(song, entry) {
  if (!song) return "";
  const key = entryPlayMode(entry, song.info) !== PlayMode.View ? song.key : parseSongInfo(song.info).key;
  return (key ?? "").trim().toLocaleUpperCase("tr-TR");
}
function songMapOf(songs) {
  if (songs instanceof Map) return songs;
  const map = /* @__PURE__ */ new Map();
  for (const song of songs) if (song.folder) map.set(song.folder, song);
  for (const song of songs) map.set(song.id, song);
  return map;
}
function songsHaveDifferentKeys(left, right, songs) {
  const a = listedSongKey(songs.get(left.songId), left);
  const b = listedSongKey(songs.get(right.songId), right);
  if (!a || !b) return false;
  return a !== b;
}
function lockedElifEntry(afterEntryId, beforeEntryId) {
  return {
    type: "talk",
    entryId: `elif_key_${afterEntryId}_${beforeEntryId}`,
    label: ELIF_KONUSMA_LABEL,
    locked: true
  };
}
function withKeyChangeElifs(setlist, songs) {
  const map = songMapOf(songs);
  const visible = visibleSetlistEntries(setlist).filter((entry) => !isLockedElif(entry));
  const next = [];
  let lastPlayable;
  let manualElifPending = false;
  for (const entry of visible) {
    if (isSongEntry(entry) && entry.skipped) {
      next.push(entry);
      continue;
    }
    if (isTalkEntry(entry)) {
      next.push(entry);
      manualElifPending = true;
      continue;
    }
    if (isSongEntry(entry) && lastPlayable && !manualElifPending && songsHaveDifferentKeys(lastPlayable, entry, map)) {
      next.push(lockedElifEntry(lastPlayable.entryId, entry.entryId));
    }
    next.push(entry);
    if (isSongEntry(entry)) {
      lastPlayable = entry;
      manualElifPending = false;
    }
  }
  return next;
}
function songFollowedByElif(setlist, index, songs) {
  const current = setlist[index];
  for (let i2 = index + 1; i2 < setlist.length; i2++) {
    const entry = setlist[i2];
    if (!entry) continue;
    if (isTalkEntry(entry)) return true;
    if (isSongEntry(entry)) {
      if (entry.skipped) continue;
      if (!current || !isSongEntry(current) || !songs) return false;
      return songsHaveDifferentKeys(current, entry, songs);
    }
  }
  return false;
}
function elifPlacementValid(setlist) {
  const last = lastSongIndex(setlist);
  for (let i2 = 0; i2 < setlist.length; i2++) {
    const entry = setlist[i2];
    if (entry && isTalkEntry(entry) && (last < 0 || i2 >= last)) return false;
  }
  return true;
}
function songPlaysAsMetronome(song, entry) {
  const requested = entry?.playMode ?? song?.info?.playMode;
  if (requested === PlayMode.View || requested === PlayMode.Free) return true;
  if (requested === PlayMode.Playback || requested === PlayMode.ClickOnly) {
    return !hasPlaybackAudio(song);
  }
  return !hasPlaybackAudio(song);
}
function metronomeStartsSerbest(song) {
  if (parseSongInfo(song?.info).startMode === "SERBEST") return true;
  return firstSectionNamed(song?.sections, "SERBEST");
}
function shouldAutoStartMetronome(song) {
  return !metronomeStartsSerbest(song);
}
function effectiveFinishMode(_entry, lastSong, setlist, index, songs) {
  if (lastSong) return FinishMode.Stop;
  if (setlist && index !== void 0 && nextUnskippedSongIndex(setlist, index) === -1) {
    return FinishMode.Stop;
  }
  if (setlist && index !== void 0 && songFollowedByElif(setlist, index, songs)) {
    return FinishMode.Stop;
  }
  if (setlist && index !== void 0 && songs) {
    const current = setlist[index];
    if (current && isSongEntry(current) && !hasPlaybackAudio(songs.get(current.songId))) {
      return FinishMode.Stop;
    }
    const next = setlist[nextUnskippedSongIndex(setlist, index)];
    const nextSong = next && isSongEntry(next) ? songs.get(next.songId) : void 0;
    if (next && isSongEntry(next) && !songPlaysAsMetronome(nextSong, next) && !hasPlaybackAudio(nextSong)) {
      return FinishMode.Stop;
    }
    if (next && isSongEntry(next) && !songPlaysAsMetronome(nextSong, next) && firstSectionNamed(songs.get(next.songId)?.sections, "SERBEST")) {
      return FinishMode.Stop;
    }
  }
  return FinishMode.PlayNext;
}
function entryStartAt(entry, song) {
  return Math.max(0, parseSongInfo(song?.info).startAt ?? entry.startAt ?? 0);
}
function songChainStartAt(song, entry) {
  const explicit = entryStartAt(entry, song);
  if (explicit > 0) return explicit;
  const first = song?.sections[0];
  const second = song?.sections[1];
  if (first && second && first.name.trim().toUpperCase() === "BOS") {
    return Math.max(0, second.start);
  }
  return 0;
}
function keepSkippedSongsInPlace(original, next) {
  const nextIds = new Set(next.map((entry) => entry.entryId));
  const missing = original.filter(
    (entry) => isSongEntry(entry) && Boolean(entry.skipped) && !nextIds.has(entry.entryId)
  );
  if (missing.length === 0) return next;
  const result = next.slice();
  for (const entry of missing) {
    const at = original.findIndex((item) => item.entryId === entry.entryId);
    let insertAt = 0;
    for (let i2 = at - 1; i2 >= 0; i2--) {
      const neighbor = original[i2];
      const idx = result.findIndex((item) => item.entryId === neighbor?.entryId);
      if (idx >= 0) {
        insertAt = idx + 1;
        break;
      }
    }
    result.splice(insertAt, 0, { ...entry, skipped: true });
  }
  return result;
}
function applyRemoteSetlist(current, incoming) {
  if (incoming.length === 0) return current;
  const byId = new Map(current.map((entry) => [entry.entryId, entry]));
  const merged = incoming.map((entry) => {
    const existing = byId.get(entry.entryId);
    if (entry.type === "song") {
      const prior = existing && isSongEntry(existing) ? existing : void 0;
      return {
        ...prior ?? { type: "song", entryId: entry.entryId, songId: entry.songId },
        entryId: entry.entryId,
        songId: entry.songId,
        skipped: entry.skipped ? true : void 0
      };
    }
    if (existing && existing.type !== "song") {
      return { ...existing, ...entry };
    }
    return entry;
  });
  return keepSkippedSongsInPlace(current, merged);
}

// packages/core/src/playback-controller.ts
function otherDeck(id) {
  return id === DeckId.A ? DeckId.B : DeckId.A;
}
var PlaybackController = class {
  constructor(opts) {
    __publicField(this, "engine");
    __publicField(this, "logger");
    __publicField(this, "loadBuffers");
    __publicField(this, "decks");
    __publicField(this, "listeners", /* @__PURE__ */ new Set());
    __publicField(this, "state", PlaybackState.Idle);
    __publicField(this, "gig", null);
    __publicField(this, "songs", /* @__PURE__ */ new Map());
    __publicField(this, "currentIndex", -1);
    __publicField(this, "primary", DeckId.A);
    __publicField(this, "outgoing", null);
    __publicField(this, "playNextScheduled", false);
    __publicField(this, "preloadRun", null);
    __publicField(this, "preloadSongId", null);
    __publicField(this, "playNextInFlight", false);
    __publicField(this, "chainEnabled", true);
    __publicField(this, "pendingSeek", null);
    __publicField(this, "errorMessage", null);
    __publicField(this, "endedToEntryId", null);
    __publicField(this, "unsubs", []);
    this.engine = opts.engine;
    this.logger = opts.logger;
    this.loadBuffers = opts.loadBuffers;
    this.decks = {
      [DeckId.A]: this.engine.createDeck(DeckId.A),
      [DeckId.B]: this.engine.createDeck(DeckId.B)
    };
    this.bindDeck(DeckId.A);
    this.bindDeck(DeckId.B);
  }
  subscribe(listener) {
    this.listeners.add(listener);
    listener(this.getSnapshot());
    return () => this.listeners.delete(listener);
  }
  getSnapshot() {
    return {
      state: this.state,
      clock: this.getClock(),
      currentIndex: this.currentIndex,
      errorMessage: this.errorMessage,
      primaryDeck: this.primary,
      outgoingDeck: this.outgoing,
      preloadedSongId: this.decks[otherDeck(this.primary)].loadedSongId,
      endedToEntryId: this.endedToEntryId
    };
  }
  getClock() {
    const entry = this.currentSongEntry();
    const song = this.currentSong();
    if (!entry || !song) return null;
    const deck = this.decks[this.primary];
    const metroHandoff = songPlaysAsMetronome(song, entry) && deck.loadedSongId !== song.id;
    const time = metroHandoff ? 0 : deck.getPosition();
    const musical = timeToMusical(song.tempoMap, time);
    const section = sectionAt(song.sections, time);
    const playing = this.state === PlaybackState.Playing || this.state === PlaybackState.Transitioning;
    return {
      songId: song.id,
      setlistEntryId: entry.entryId,
      time,
      measure: musical.measure,
      beat: musical.beat,
      section: section?.name,
      playing,
      nextSongId: this.nextSong()?.id,
      finishMode: this.currentFinishMode()
    };
  }
  async setShow(gig, songs) {
    this.gig = gig;
    this.songs = new Map(songs.map((song) => [song.id, song]));
    this.currentIndex = -1;
    this.playNextScheduled = false;
    this.pendingSeek = null;
    this.outgoing = null;
    this.primary = DeckId.A;
    this.decks[DeckId.A].unload();
    this.decks[DeckId.B].unload();
    this.state = PlaybackState.Idle;
    this.errorMessage = null;
    this.emit();
  }
  replaceShow(gig) {
    const currentId = this.currentIndex >= 0 ? this.gig?.setlist[this.currentIndex]?.entryId : void 0;
    this.gig = gig;
    if (currentId) {
      this.currentIndex = gig.setlist.findIndex((entry) => entry.entryId === currentId);
    }
    if (this.state === PlaybackState.Playing || this.state === PlaybackState.Transitioning) {
      void this.preloadAndMaybeSchedule().then(() => this.emit());
    }
    this.emit();
  }
  replaceSongs(songs) {
    this.songs = new Map(songs.map((song) => [song.id, song]));
    this.syncLoadedSongs();
  }
  async selectIndex(setlistIndex) {
    if (!this.gig) return;
    const entry = this.gig.setlist[setlistIndex];
    if (!entry || !isSongEntry(entry)) {
      this.fail("That setlist item is not a song.");
      return;
    }
    const already = this.songs.get(entry.songId);
    if (already && this.currentIndex === setlistIndex && // After a play-next handoff the live song sits on the other deck, so checking deck A
    // would miss it and force a needless reload of the song already playing.
    this.decks[this.primary].loadedSongId === already.id && (this.state === PlaybackState.Ready || this.state === PlaybackState.Playing || this.state === PlaybackState.Transitioning)) {
      this.syncLoadedSongs();
      return;
    }
    this.state = PlaybackState.Loading;
    this.errorMessage = null;
    this.playNextScheduled = false;
    this.pendingSeek = null;
    this.outgoing = null;
    this.emit();
    await this.engine.init();
    const song = this.songs.get(entry.songId);
    if (!song) {
      this.currentIndex = -1;
      this.decks[DeckId.A].unload();
      this.fail("Song is not in the library.");
      return;
    }
    try {
      this.decks[DeckId.A].unload();
      this.decks[DeckId.B].unload();
      const buffers = await this.loadBuffers(song);
      this.currentIndex = setlistIndex;
      this.primary = DeckId.A;
      await this.decks[DeckId.A].load(song, buffers);
      this.state = PlaybackState.Ready;
      this.logger.playback("song_loaded", { songId: song.id, title: song.title });
      this.emit();
      void this.preloadNext().then(() => this.emit()).catch((err2) => {
        this.logger.playback("preload_failed", { error: String(err2) });
      });
    } catch (err2) {
      this.currentIndex = -1;
      this.decks[DeckId.A].unload();
      this.fail(this.userError(err2));
    }
  }
  /** Re-decodes and loads `song` onto the primary deck. Reports failure through `fail`. */
  async reloadPrimary(song) {
    try {
      const buffers = await this.loadBuffers(song);
      await this.decks[this.primary].load(song, buffers);
      return true;
    } catch (err2) {
      this.fail(this.userError(err2));
      return false;
    }
  }
  async play(opts) {
    await this.engine.init();
    const song = this.currentSong();
    const entry = this.currentSongEntry();
    if (!song || !entry) {
      this.fail("No song is selected.");
      return;
    }
    if (this.state === PlaybackState.Playing || this.state === PlaybackState.Transitioning) {
      return;
    }
    const click = clickAsset(song);
    const finish = this.currentFinishMode();
    const chain = opts?.chain !== false;
    if (chain && finish === FinishMode.PlayNext && !click) {
      this.fail("Song cannot play: Click track missing.");
      return;
    }
    if (this.decks[this.primary].loadedSongId !== song.id) {
      const restored = await this.reloadPrimary(song);
      if (!restored) return;
    }
    this.errorMessage = null;
    this.outgoing = null;
    this.playNextScheduled = false;
    this.playNextInFlight = false;
    this.chainEnabled = chain;
    if (this.pendingSeek !== null) {
      this.decks[this.primary].seek(this.pendingSeek);
    }
    this.decks[this.primary].play();
    this.state = PlaybackState.Playing;
    this.logger.playback("song_started", { songId: song.id, title: song.title });
    this.emit();
    if (chain) {
      await this.preloadAndMaybeSchedule();
    }
  }
  stopImmediate() {
    this.playNextScheduled = false;
    this.playNextInFlight = false;
    this.chainEnabled = false;
    this.outgoing = null;
    this.pendingSeek = null;
    this.decks[DeckId.A].stop();
    this.decks[DeckId.B].stop();
    this.state = this.currentSong() ? PlaybackState.Ready : PlaybackState.Idle;
    this.logger.playback("stopped", { songId: this.currentSong()?.id });
    this.emit();
  }
  pause() {
    if (this.state !== PlaybackState.Playing && this.state !== PlaybackState.Transitioning) return;
    this.playNextScheduled = false;
    this.playNextInFlight = false;
    this.chainEnabled = false;
    this.outgoing = null;
    this.decks[DeckId.A].pause();
    this.decks[DeckId.B].pause();
    this.pendingSeek = this.decks[this.primary].getPosition();
    this.state = PlaybackState.Ready;
    this.logger.playback("paused", { songId: this.currentSong()?.id, time: this.pendingSeek });
    this.emit();
  }
  seek(time) {
    const song = this.currentSong();
    const duration = song?.duration ?? time;
    const t = Math.max(0, Math.min(time, duration));
    this.pendingSeek = t;
    const deck = this.decks[this.primary];
    if (deck.isLoaded) {
      deck.seek(t);
      const secondary = this.decks[otherDeck(this.primary)];
      if (this.outgoing !== secondary.id && secondary.isArmed) {
        secondary.stop();
        this.playNextScheduled = false;
      }
      this.schedulePlayNextIfNeeded();
      this.emit();
    }
  }
  async next() {
    if (!this.gig) return;
    const index = nextUnskippedSongIndex(this.gig.setlist, this.currentIndex);
    if (index === -1) return;
    this.stopImmediate();
    await this.selectIndex(index);
  }
  async previous() {
    if (!this.gig) return;
    const from = this.currentIndex < 0 ? 0 : this.currentIndex;
    const index = previousSongIndex(this.gig.setlist, from);
    if (index === -1) return;
    this.stopImmediate();
    await this.selectIndex(index);
  }
  tick() {
    this.engine.poll();
    this.pauseForSerbest();
    this.emit();
    return this.getSnapshot();
  }
  pauseForSerbest() {
    if (this.state !== PlaybackState.Playing && this.state !== PlaybackState.Transitioning) return;
    if (!this.decks[this.primary].isPlaying) return;
    const entry = this.currentSongEntry();
    const song = this.currentSong();
    if (!entry || !song || entryPlayMode(entry, song.info) === PlayMode.View) return;
    const section = sectionAt(song.sections, this.decks[this.primary].getPosition());
    if (!section || !sectionNamed(section, "SERBEST")) return;
    this.pause();
    this.seek(section.start);
    this.logger.playback("serbest_hold", { songId: song.id, sectionStart: section.start });
  }
  bindDeck(id) {
    const deck = this.decks[id];
    this.unsubs.push(
      deck.on("click_eof", () => this.handleClickEof(id)),
      deck.on("longest_eof", () => this.handleLongestEof(id)),
      deck.on("error", (info) => this.fail(info?.message ?? "Playback error."))
    );
  }
  handleClickEof(id) {
    const song = this.decks[id].loadedSongId;
    this.logger.playback("click_eof", { songId: song, deck: id });
    if (this.beginSilentSerbestNext(id)) return;
    if (this.beginPlayNext(id)) return;
    if (this.chainEnabled && this.currentFinishMode() === FinishMode.PlayNext && this.nextPlayableIndex() >= 0) {
      this.emitEndedToNext(id, song);
    }
  }
  handleLongestEof(id) {
    const songId = this.decks[id].loadedSongId;
    this.logger.playback("longest_eof", { songId, deck: id });
    if (this.outgoing === id) {
      this.decks[id].unload();
      this.outgoing = null;
      this.logger.playback("deck_released", { deck: id, songId });
      this.state = this.decks[this.primary].isPlaying ? PlaybackState.Playing : PlaybackState.Ready;
      if (this.state === PlaybackState.Playing) {
        void this.preloadAndMaybeSchedule().then(() => this.emit());
      }
      this.emit();
      return;
    }
    if (id === this.primary && this.beginPlayNext(id)) return;
    this.emitEndedToNext(id, songId);
  }
  emitEndedToNext(fromDeck, songId) {
    if (fromDeck !== this.primary) return;
    if (this.outgoing != null) return;
    if (this.state !== PlaybackState.Playing && this.state !== PlaybackState.Transitioning) return;
    this.state = PlaybackState.Stopping;
    this.decks[fromDeck].stop();
    this.state = PlaybackState.Ready;
    this.endedToEntryId = this.gig ? nextEndedSelectionId(this.gig.setlist, this.currentIndex, this.songs) : null;
    this.logger.playback("song_ended", { songId });
    this.emit();
    this.endedToEntryId = null;
  }
  beginPlayNext(fromDeck) {
    if (!this.chainEnabled) return false;
    if (fromDeck !== this.primary) return false;
    if (this.currentFinishMode() !== FinishMode.PlayNext) return false;
    const nextIndex = this.nextPlayableIndex();
    const nextEntry = nextIndex >= 0 ? this.gig?.setlist[nextIndex] : void 0;
    if (!nextEntry || !isSongEntry(nextEntry)) return false;
    const nextSong = this.songs.get(nextEntry.songId);
    if (songPlaysAsMetronome(nextSong, nextEntry)) {
      this.startMetronomeHandoff(fromDeck, nextIndex, nextEntry);
      return true;
    }
    const nextDeck = this.decks[otherDeck(fromDeck)];
    if (!nextDeck.isLoaded || nextDeck.loadedSongId !== nextEntry.songId) {
      if (this.playNextInFlight) return true;
      this.playNextInFlight = true;
      void this.loadAndBeginPlayNext(fromDeck, nextIndex, nextEntry);
      return true;
    }
    this.startNextDeck(fromDeck, nextIndex, nextEntry, nextDeck);
    return true;
  }
  beginSilentSerbestNext(fromDeck) {
    if (!this.chainEnabled || fromDeck !== this.primary || !this.gig) return false;
    const nextIndex = this.nextPlayableIndex();
    const nextEntry = nextIndex >= 0 ? this.gig.setlist[nextIndex] : void 0;
    if (!nextEntry || !isSongEntry(nextEntry)) return false;
    const nextSong = this.songs.get(nextEntry.songId);
    if (entryPlayMode(nextEntry, nextSong?.info) === PlayMode.View || !firstSectionNamed(nextSong?.sections, "SERBEST")) {
      return false;
    }
    const nextDeck = this.decks[otherDeck(fromDeck)];
    if (!nextDeck.isLoaded || nextDeck.loadedSongId !== nextEntry.songId) return false;
    this.outgoing = fromDeck;
    this.primary = nextDeck.id;
    this.currentIndex = nextIndex;
    this.playNextScheduled = false;
    this.pendingSeek = 0;
    this.state = PlaybackState.Transitioning;
    this.logger.playback("play_next_serbest_hold", {
      fromSongId: this.decks[fromDeck].loadedSongId,
      toSongId: nextEntry.songId
    });
    this.emit();
    return true;
  }
  async loadAndBeginPlayNext(fromDeck, nextIndex, nextEntry) {
    try {
      await this.preloadNext();
    } catch (err2) {
      this.playNextInFlight = false;
      this.fail(this.userError(err2));
      return;
    }
    this.playNextInFlight = false;
    if (!this.chainEnabled || fromDeck !== this.primary) return;
    const nextDeck = this.decks[otherDeck(fromDeck)];
    if (!nextDeck.isLoaded || nextDeck.loadedSongId !== nextEntry.songId) {
      this.logger.playback("play_next_skipped", {
        reason: "Next song is not loaded.",
        songId: nextEntry.songId
      });
      if (this.state === PlaybackState.Playing || this.state === PlaybackState.Transitioning) {
        this.state = PlaybackState.Ready;
        this.emit();
      }
      return;
    }
    this.startNextDeck(fromDeck, nextIndex, nextEntry, nextDeck);
  }
  startMetronomeHandoff(fromDeck, nextIndex, nextEntry) {
    this.outgoing = fromDeck;
    this.currentIndex = nextIndex;
    this.playNextScheduled = false;
    this.state = PlaybackState.Transitioning;
    this.endedToEntryId = nextEntry.entryId;
    this.logger.playback("play_next_metronome", {
      fromSongId: this.decks[fromDeck].loadedSongId,
      toSongId: nextEntry.songId
    });
    this.emit();
    this.endedToEntryId = null;
  }
  startNextDeck(fromDeck, nextIndex, nextEntry, nextDeck) {
    const cueAt = this.decks[fromDeck].clickEndsAt;
    const already = nextDeck.isArmed;
    this.outgoing = fromDeck;
    this.primary = nextDeck.id;
    this.currentIndex = nextIndex;
    this.playNextScheduled = false;
    this.state = PlaybackState.Transitioning;
    if (!already) {
      const startAt = songChainStartAt(this.songs.get(nextEntry.songId), nextEntry);
      if (startAt > 0) nextDeck.seek(startAt);
      const now = this.engine.getContextTime();
      nextDeck.play(cueAt != null && cueAt > now ? cueAt : void 0);
    }
    this.logger.playback("play_next", {
      fromSongId: this.decks[fromDeck].loadedSongId,
      toSongId: nextEntry.songId
    });
    const outgoingDeck = this.decks[fromDeck];
    if (!outgoingDeck.isPlaying) {
      outgoingDeck.unload();
      this.outgoing = null;
      this.state = PlaybackState.Playing;
      void this.preloadAndMaybeSchedule().then(() => this.emit());
    }
    this.emit();
  }
  async preloadAndMaybeSchedule() {
    await this.preloadNext();
    this.schedulePlayNextIfNeeded();
  }
  async preloadNext() {
    if (!this.gig) return;
    const nextIndex = this.nextPlayableIndex();
    const secondary = this.decks[otherDeck(this.primary)];
    if (nextIndex === -1) {
      if (this.outgoing !== otherDeck(this.primary)) secondary.unload();
      return;
    }
    const entry = this.gig.setlist[nextIndex];
    if (!entry || !isSongEntry(entry)) return;
    if (secondary.loadedSongId === entry.songId && secondary.isLoaded) return;
    const song = this.songs.get(entry.songId);
    if (!song || songPlaysAsMetronome(song, entry)) return;
    if (this.preloadRun && this.preloadSongId === song.id) return this.preloadRun;
    this.preloadSongId = song.id;
    this.preloadRun = (async () => {
      secondary.unload();
      const buffers = await this.loadBuffers(song);
      await secondary.load(song, buffers);
      this.logger.playback("preloaded", { songId: song.id, deck: secondary.id });
    })().finally(() => {
      if (this.preloadSongId !== song.id) return;
      this.preloadRun = null;
      this.preloadSongId = null;
    });
    return this.preloadRun;
  }
  schedulePlayNextIfNeeded() {
    const finish = this.currentFinishMode();
    if (!this.chainEnabled || finish !== FinishMode.PlayNext) {
      this.playNextScheduled = false;
      return;
    }
    const nextIndex = this.nextPlayableIndex();
    const nextEntry = nextIndex >= 0 ? this.gig?.setlist[nextIndex] : void 0;
    const next = nextEntry && isSongEntry(nextEntry) ? this.songs.get(nextEntry.songId) : void 0;
    const secondary = this.decks[otherDeck(this.primary)];
    if (!next || !nextEntry || !isSongEntry(nextEntry) || secondary.loadedSongId !== next.id) {
      this.playNextScheduled = false;
      return;
    }
    if (songPlaysAsMetronome(next, nextEntry)) {
      this.playNextScheduled = true;
      return;
    }
    const when = this.decks[this.primary].clickEndsAt;
    if (when == null) {
      this.playNextScheduled = false;
      return;
    }
    this.playNextScheduled = true;
    if (secondary.isArmed) return;
    this.logger.playback("play_next_ready", { songId: next.id });
    if (when <= this.engine.getContextTime()) return;
    const startAt = songChainStartAt(next, nextEntry);
    if (startAt > 0) secondary.seek(startAt);
    secondary.play(when);
    this.logger.playback("play_next_armed", { songId: next.id, at: when });
  }
  syncLoadedSongs() {
    for (const deck of Object.values(this.decks)) {
      const id = deck.loadedSongId;
      const song = id ? this.songs.get(id) : void 0;
      if (song) deck.updateSong(song);
    }
  }
  currentSongEntry() {
    if (!this.gig || this.currentIndex < 0) return null;
    const entry = this.gig.setlist[this.currentIndex];
    return entry && isSongEntry(entry) ? entry : null;
  }
  currentSong() {
    const entry = this.currentSongEntry();
    if (!entry) return null;
    return this.songs.get(entry.songId) ?? null;
  }
  nextSong() {
    if (!this.gig) return null;
    const index = this.nextPlayableIndex();
    const entry = index >= 0 ? this.gig.setlist[index] : void 0;
    if (!entry || !isSongEntry(entry)) return null;
    return this.songs.get(entry.songId) ?? null;
  }
  nextPlayableIndex() {
    if (!this.gig) return -1;
    return nextUnskippedSongIndex(this.gig.setlist, this.currentIndex);
  }
  currentFinishMode() {
    const entry = this.currentSongEntry();
    if (!entry || !this.gig) return FinishMode.Stop;
    return effectiveFinishMode(
      entry,
      this.nextPlayableIndex() === -1,
      this.gig.setlist,
      this.currentIndex,
      this.songs
    );
  }
  fail(message) {
    this.state = PlaybackState.Error;
    this.errorMessage = message;
    this.logger.playback("error", { message });
    this.emit();
  }
  userError(err2) {
    if (err2 && typeof err2 === "object" && "message" in err2 && typeof err2.message === "string") {
      return err2.message;
    }
    return "Song cannot play.";
  }
  emit() {
    const snapshot = this.getSnapshot();
    for (const listener of this.listeners) listener(snapshot);
  }
};

// packages/core/src/form.ts
var TIME_EPS = 0.02;
function sectionList(song) {
  return song.sections.length > 0 ? song.sections : [{ name: "", start: 0, end: song.duration }];
}
function blockKey(section, index) {
  const name = section.name.trim();
  return name || `_${index}`;
}
function nameKey(name, index) {
  const trimmed = name.trim();
  return trimmed || `_${index}`;
}
function patternGridKey(pattern) {
  const span = Math.max(TIME_EPS, pattern.end - pattern.time);
  return (pattern.notes ?? []).map((note) => {
    const step = Math.round((note.time - pattern.time) / span * 16);
    const pc = (note.pitch % 12 + 12) % 12;
    return `${step}:${pc}`;
  }).sort().join(",");
}
function offsetKey(time, start) {
  const at = Math.round((time - start) * 1e3) / 1e3;
  return (at === 0 ? 0 : at).toFixed(3);
}
function noteStamp(map, note, origin2) {
  const measure = timeToMusical(map ?? [], origin2 + TIME_EPS).measure;
  const span = measureSpan(map, measure);
  const length = Math.max(TIME_EPS, span.end - span.start);
  const step = Math.max(0, Math.min(15, Math.round((note.time - span.start) / length * 16)));
  return `${step}:${note.pitch}`;
}
function sectionGroove(song, section, identity2) {
  if (identity2 === "names") return "";
  if (identity2 !== "chords") {
    const patterns = (song.patterns ?? []).filter((pattern) => pattern.time >= section.start - TIME_EPS && pattern.time < section.end - TIME_EPS).map((pattern) => {
      const text = pattern.text.trim().toUpperCase();
      if (!text || text === "FILL") return "";
      if (identity2 === "drums") {
        const grid = patternGridKey(pattern);
        return grid ? `${text}[${grid}]` : text;
      }
      return text;
    }).filter((text) => text.length > 0);
    if (patterns.length > 0) return `p:${patterns.join("|")}`;
    if (identity2 === "drums") return "";
  }
  const chords = (song.chords ?? []).filter((chord) => chord.time >= section.start - TIME_EPS && chord.time < section.end - TIME_EPS).map((chord) => {
    const text = chord.text.trim();
    if (!text || text === "-") return "";
    const offset = offsetKey(chord.time, section.start);
    const notes = (chord.notes ?? []).map((note) => noteStamp(song.tempoMap, note, chord.time)).join(",");
    return `${offset}:${text}[${notes}]`;
  }).filter(Boolean);
  if (chords.length > 0) return `c:${chords.join("|")}`;
  return "";
}
function runOffset(sections, index, key) {
  let offset = 0;
  for (let cursor = index; cursor >= 0; cursor--) {
    const section = sections[cursor];
    if (!section || blockKey(section, cursor) !== key) break;
    if (cursor < index) offset += 1;
  }
  return offset;
}
function sameNamedBlocks(blocks, key) {
  return blocks.filter((block) => nameKey(block.name, block.originIndex) === key);
}
function grooveAlreadyWritten(same, grooves, groove) {
  if (!groove) return true;
  return same.some((block) => {
    const written = grooves.get(block.id);
    return groovesMatch(written, groove) || sameDrumPattern(written, groove);
  });
}
function chordShape(groove) {
  if (!groove.startsWith("c:")) return void 0;
  return groove.slice(2).split("|").map(
    (part) => part.replace(/^-?\d+\.\d+:/, "").replace(
      /\[(.*?)\]/,
      (_, notes) => `[${notes.split(",").map((note) => note.replace(/^\d+:/, "")).join(",")}]`
    )
  ).join("|");
}
function drumPattern(groove) {
  if (!groove?.startsWith("p:")) return void 0;
  const names = groove.slice(2).split("|").map((part) => part.replace(/\[[^\]]*\]/g, "")).join("|");
  return names || void 0;
}
function sameDrumPattern(written, current) {
  const left = drumPattern(written);
  const right = drumPattern(current);
  return Boolean(left && right && left === right);
}
function groovesMatch(written, current) {
  if (!written) return false;
  if (written === current) return true;
  const writtenShape = chordShape(written);
  const currentShape = chordShape(current);
  if (writtenShape != null && currentShape != null) {
    if (writtenShape === currentShape) return true;
    if (writtenShape.startsWith(`${currentShape}|`)) return true;
  }
  if (!written.startsWith("c:") || !current.startsWith("c:")) return false;
  return written.startsWith(`${current}|`);
}
function matchWrittenBlock(blocks, grooves, key, groove, previousKey, previousBlock, offset, sections, index) {
  const same = sameNamedBlocks(blocks, key);
  if (previousKey === key) {
    if (!grooveAlreadyWritten(same, grooves, groove)) return void 0;
    return offset < same.length ? same[offset] : void 0;
  }
  if (previousBlock) {
    const byContext = same.find((block) => {
      const blockIndex = blocks.indexOf(block);
      const writtenPrevious = blocks[blockIndex - 1];
      return writtenPrevious?.id === previousBlock.id && (!groove || groovesMatch(grooves.get(block.id), groove));
    });
    if (byContext) return phraseStart(blocks, byContext, sections, index);
    const contextAlreadyWritten = same.some((block) => {
      const blockIndex = blocks.indexOf(block);
      const writtenPrevious = blocks[blockIndex - 1];
      return writtenPrevious != null && nameKey(writtenPrevious.name, writtenPrevious.originIndex) === previousKey;
    });
    if (contextAlreadyWritten) return void 0;
  }
  if (groove) {
    const byGroove = same.find((block) => groovesMatch(grooves.get(block.id), groove));
    if (byGroove) return phraseStart(blocks, byGroove, sections, index);
    const byPattern = same.find((block) => sameDrumPattern(grooves.get(block.id), groove));
    if (byPattern) return phraseStart(blocks, byPattern, sections, index);
    return void 0;
  }
  return same[0];
}
function phraseStart(blocks, candidate, sections, index) {
  const run = sameNameRun(blocks, candidate);
  if (run.length < 2) return candidate;
  let best = candidate;
  let bestLength = nameRunLength(sections, candidate.originIndex, index);
  for (const block of run) {
    const length = nameRunLength(sections, block.originIndex, index);
    if (length > bestLength) {
      best = block;
      bestLength = length;
    }
  }
  return best;
}
function sameNameRun(blocks, block) {
  const key = nameKey(block.name, block.originIndex);
  const at = blocks.indexOf(block);
  let start = at;
  let end = at;
  while (start > 0) {
    const previous = blocks[start - 1];
    if (!previous || nameKey(previous.name, previous.originIndex) !== key) break;
    start -= 1;
  }
  while (end + 1 < blocks.length) {
    const next = blocks[end + 1];
    if (!next || nameKey(next.name, next.originIndex) !== key) break;
    end += 1;
  }
  return blocks.slice(start, end + 1);
}
function nameRunLength(sections, from, index) {
  let length = 0;
  while (from + length < sections.length && index + length < sections.length) {
    const written = sections[from + length];
    const current = sections[index + length];
    if (!written || !current) break;
    if (blockKey(written, from + length) !== blockKey(current, index + length)) break;
    length += 1;
  }
  return length;
}
function matchAfterDs(blocks, key, passOffset, previousBlock) {
  const same = sameNamedBlocks(blocks, key);
  if (same.length === 0) return void 0;
  const byCount = same[passOffset];
  if (byCount) return byCount;
  if (previousBlock) {
    const byContext = same.find((block) => {
      const blockIndex = blocks.indexOf(block);
      return blocks[blockIndex - 1]?.id === previousBlock.id;
    });
    if (byContext) return byContext;
  }
  return same[0];
}
function passOffsetOf(sections, from, index, key) {
  let offset = 0;
  for (let cursor = Math.max(0, from); cursor < index; cursor++) {
    const section = sections[cursor];
    if (section && blockKey(section, cursor) === key) offset += 1;
  }
  return offset;
}
function isCodaName(name) {
  const n = name.trim().toUpperCase();
  return n === "CODA" || n.startsWith("CODA ");
}
function songForm(song, options = {}) {
  if (!song) return { blocks: [], visits: [] };
  const sections = sectionList(song);
  const blocks = [];
  const grooves = /* @__PURE__ */ new Map();
  const visits = [];
  const passById = /* @__PURE__ */ new Map();
  let passStart = 0;
  for (let index = 0; index < sections.length; index++) {
    const section = sections[index];
    if (!section) continue;
    const key = blockKey(section, index);
    const previous = sections[index - 1];
    const previousKey = previous ? blockKey(previous, index - 1) : void 0;
    const prev = visits[visits.length - 1];
    const previousBlock = prev ? blocks.find((item) => item.id === prev.blockId) : void 0;
    const groove = sectionGroove(song, section, options.identity);
    const sameNamed = sameNamedBlocks(blocks, key);
    const alreadyWritten = grooveAlreadyWritten(sameNamed, grooves, groove);
    const returned = visits.some((visit) => visit.fromJump === "ds");
    let block = matchWrittenBlock(
      blocks,
      grooves,
      key,
      groove,
      previousKey,
      previousBlock,
      runOffset(sections, index, key),
      sections,
      index
    );
    const lastSection = index === sections.length - 1;
    if (!block && returned && !isCodaName(section.name) && (alreadyWritten || !lastSection)) {
      block = matchAfterDs(blocks, key, passOffsetOf(sections, passStart, index, key), previousBlock);
    }
    if (!block) {
      block = {
        id: `form_${blocks.length}`,
        name: section.name,
        originIndex: index,
        originStart: section.start,
        originEnd: section.end,
        segno: false,
        coda: false,
        toCoda: false,
        ds: false,
        repeatStart: false,
        repeatEnd: false
      };
      blocks.push(block);
      if (groove) grooves.set(block.id, groove);
    }
    const pass = (passById.get(block.id) ?? 0) + 1;
    passById.set(block.id, pass);
    const thisIndex = blocks.indexOf(block);
    const prevIndex = previousBlock ? blocks.indexOf(previousBlock) : -1;
    const pairRepeat = prevIndex >= 0 && Math.abs(prevIndex - thisIndex) === 1;
    let fromJump = "none";
    if (prev?.blockId === block.id) fromJump = "repeat";
    else if (pass > 1 && pairRepeat) fromJump = "repeat";
    else if (pass > 1) fromJump = "ds";
    if (fromJump === "ds") passStart = index;
    visits.push({
      blockId: block.id,
      start: section.start,
      end: section.end,
      pass,
      fromJump
    });
  }
  const firstReturn = visits.find((visit) => visit.fromJump === "ds");
  if (firstReturn) {
    const segno = blocks.find((block) => block.id === firstReturn.blockId);
    if (segno) segno.segno = true;
    const fromIndex = visits.indexOf(firstReturn) - 1;
    const from = fromIndex >= 0 ? blocks.find((block) => block.id === visits[fromIndex]?.blockId) : void 0;
    if (from) from.ds = true;
  }
  markRepeatBars(blocks, visits);
  if (options.foldInnerRepeats) {
    for (const block of blocks) foldInnerRepeat(song, block);
  }
  return { blocks, visits };
}
function markRepeatBars(blocks, visits) {
  for (let index = 1; index < visits.length; index++) {
    const prev = visits[index - 1];
    const visit = visits[index];
    if (!prev || !visit || visit.fromJump !== "repeat") continue;
    if (prev.blockId === visit.blockId) continue;
    const current = blocks.find((block) => block.id === visit.blockId);
    const last = blocks.find((block) => block.id === prev.blockId);
    if (!current || !last) continue;
    const currentIndex = blocks.indexOf(current);
    const lastIndex = blocks.indexOf(last);
    if (currentIndex < lastIndex) {
      current.repeatStart = true;
      last.repeatEnd = true;
    }
  }
}
function measureSpan(map, measure) {
  let point = map[0];
  for (const item of map) {
    if (item.measure <= measure) point = item;
    else break;
  }
  if (!point) return { start: 0, end: 0 };
  const length = secondsPerMeasure(point);
  const start = point.time + (measure - point.measure) * length;
  return { start, end: start + length };
}
function chordEnd(chords, index, fallback) {
  const current = chords[index];
  if (current?.end != null) return current.end;
  return chords[index + 1]?.time ?? fallback;
}
function chordPrintInMeasure(chords, start, end, duration) {
  const starting = chords.filter((chord) => chord.time >= start - TIME_EPS && chord.time < end - TIME_EPS).map((chord) => chord.text.trim() || "-");
  if (starting.length > 0) return starting.join(",");
  for (let index = chords.length - 1; index >= 0; index--) {
    const chord = chords[index];
    if (!chord || chord.time > start + TIME_EPS) continue;
    if (chordEnd(chords, index, duration) > start + TIME_EPS) {
      return chord.text.trim() || "-";
    }
    break;
  }
  return "-";
}
function chordLaneName(pitch) {
  const pitchClass = (pitch % 12 + 12) % 12;
  return (/* @__PURE__ */ new Map([
    [7, "G"],
    [5, "F"],
    [4, "E"],
    [2, "D"],
    [0, "C"]
  ])).get(pitchClass);
}
function measureChordPrints(song, start, end) {
  const chords = [...song.chords ?? []].sort((a, b) => a.time - b.time);
  if (chords.length === 0) return [];
  const first = timeToMusical(song.tempoMap, start + TIME_EPS).measure;
  const last = timeToMusical(song.tempoMap, Math.max(start, end - TIME_EPS)).measure;
  const prints = [];
  for (let measure = first; measure <= last; measure++) {
    const span = measureSpan(song.tempoMap, measure);
    const measureStart = Math.max(span.start, start);
    const measureEnd2 = Math.min(span.end, end);
    if (measureEnd2 - measureStart <= TIME_EPS) continue;
    const measureLength = span.end - span.start;
    const hits = /* @__PURE__ */ new Map();
    const seen = /* @__PURE__ */ new Set();
    for (let chordIndex = 0; chordIndex < chords.length; chordIndex++) {
      const chord = chords[chordIndex];
      if (!chord) continue;
      const endOfChord = chordEnd(chords, chordIndex, song.duration);
      if (chord.time >= measureEnd2 - TIME_EPS || endOfChord <= measureStart + TIME_EPS) {
        continue;
      }
      for (const note of chord.notes ?? []) {
        if (note.measure != null && note.measure !== measure) continue;
        if (note.time < measureStart - TIME_EPS || note.time >= measureEnd2 - TIME_EPS) continue;
        const key = `${note.time.toFixed(5)}:${note.pitch}`;
        if (seen.has(key)) continue;
        seen.add(key);
        const lane = chordLaneName(note.pitch);
        if (!lane || measureLength <= 0) continue;
        const step = Math.max(
          0,
          Math.min(15, Math.round((note.time - span.start) / measureLength * 16))
        );
        hits.set(step, lane);
      }
    }
    const notePrint = [...hits.entries()].sort(([left], [right]) => left - right).map(([step, lane]) => `${step}:${lane}`).join(",");
    prints.push(
      `${chordPrintInMeasure(chords, measureStart, measureEnd2, song.duration)}#${notePrint}`
    );
  }
  return prints;
}
function foldInnerRepeat(song, block) {
  const prints = measureChordPrints(song, block.originStart, block.originEnd);
  if (prints.length < 4 || prints.length % 2 !== 0) return;
  if (prints.every((print) => print === "-#")) return;
  const half = prints.length / 2;
  if (prints.slice(0, half).join("|") !== prints.slice(half).join("|")) return;
  const firstMeasure = timeToMusical(song.tempoMap, block.originStart + TIME_EPS).measure;
  const mid = measureSpan(song.tempoMap, firstMeasure + half).start;
  if (mid <= block.originStart + TIME_EPS || mid >= block.originEnd - TIME_EPS) return;
  block.originEnd = mid;
  block.repeatStart = true;
  block.repeatEnd = true;
}
function formAt(form, time) {
  if (form.visits.length === 0) return null;
  let visit = form.visits.find((item) => time >= item.start - TIME_EPS && time < item.end - TIME_EPS);
  if (!visit) {
    const last = form.visits[form.visits.length - 1];
    visit = last && time >= last.start - TIME_EPS && time <= last.end + TIME_EPS ? last : void 0;
  }
  if (!visit) return null;
  const block = form.blocks.find((item) => item.id === visit.blockId);
  if (!block) return null;
  const local = Math.max(0, time - visit.start);
  const originSpan = Math.max(TIME_EPS, block.originEnd - block.originStart);
  const visitSpan = Math.max(TIME_EPS, visit.end - visit.start);
  const wrapped = visitSpan > originSpan + TIME_EPS ? local % originSpan : Math.min(local, originSpan - TIME_EPS);
  const originTime = block.originStart + Math.min(wrapped, originSpan - TIME_EPS);
  return { visit, block, originTime };
}
function formNextAt(form, time, afterOriginTime) {
  const current = formAt(form, time);
  if (!current) return null;
  const originSpan = Math.max(TIME_EPS, current.block.originEnd - current.block.originStart);
  const passOffset = Math.floor(Math.max(0, time - current.visit.start) / originSpan) * originSpan;
  const atWrittenEnd = afterOriginTime >= current.block.originEnd - TIME_EPS;
  if (!atWrittenEnd) {
    return { visit: current.visit, block: current.block, originTime: afterOriginTime };
  }
  const nextPass = current.visit.start + passOffset + originSpan;
  if (nextPass < current.visit.end - TIME_EPS) {
    return { visit: current.visit, block: current.block, originTime: current.block.originStart };
  }
  const index = form.visits.findIndex(
    (visit) => visit.blockId === current.visit.blockId && visit.start === current.visit.start && visit.end === current.visit.end
  );
  const next = form.visits[index + 1];
  return next ? formAt(form, next.start) : null;
}

// packages/core/src/client-library.ts
function lettersForMatch(value) {
  return value.normalize("NFC").replace(/\uFFFD/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "");
}
function resolvePublishedSongId(rawId, songs) {
  const cleaned = rawId.normalize("NFC").replace(/\uFFFD/g, "").trim();
  const exact = songs.find((song) => song.id === rawId || song.id === cleaned);
  if (exact) return exact.id;
  const want = practiceFolderSlug(cleaned || rawId);
  const bySlug = songs.find(
    (song) => practiceFolderSlug(song.id) === want || practiceFolderSlug(song.folder ?? "") === want || practiceFolderSlug(song.title ?? "") === want
  );
  if (bySlug) return bySlug.id;
  const wantLetters = lettersForMatch(cleaned || rawId);
  if (wantLetters.length < 6) return void 0;
  let best;
  for (const song of songs) {
    const have = lettersForMatch(song.id);
    const distance = editDistance(wantLetters, have);
    if (distance > 2) continue;
    if (!best || distance < best.distance) best = { id: song.id, distance };
    else if (distance === best.distance) return void 0;
  }
  return best?.id;
}
function editDistance(left, right) {
  const rows = left.length + 1;
  const cols = right.length + 1;
  const grid = Array.from({ length: rows }, (_, i2) => {
    const row = Array.from({ length: cols }, (__, j) => i2 === 0 ? j : j === 0 ? i2 : 0);
    return row;
  });
  for (let i2 = 1; i2 < rows; i2++) {
    for (let j = 1; j < cols; j++) {
      const cost = left[i2 - 1] === right[j - 1] ? 0 : 1;
      grid[i2][j] = Math.min(
        (grid[i2 - 1][j] ?? 0) + 1,
        (grid[i2][j - 1] ?? 0) + 1,
        (grid[i2 - 1][j - 1] ?? 0) + cost
      );
    }
  }
  return grid[left.length][right.length] ?? 99;
}
function humanizePracticeFolder(folder) {
  return folder.normalize("NFC").split(/[_-]+/).filter(Boolean).map((word) => word.charAt(0).toLocaleUpperCase("tr-TR") + word.slice(1)).join(" ");
}
function publishedSongTitle(song) {
  const title = song.title?.normalize("NFC").trim();
  if (title) return title;
  const id = song.id.normalize("NFC").trim();
  const folder = song.folder.normalize("NFC").trim();
  if (id && id !== folder) return id;
  if (folder.includes("_") || folder && folder === folder.toLowerCase()) {
    return humanizePracticeFolder(folder);
  }
  return folder || id || "\u2014";
}
function publishedPracticeFiles(index) {
  const out = [];
  for (const song of index.songs) {
    const title = publishedSongTitle(song);
    for (const file of song.files) {
      if (!isPracticeFile(file.path)) continue;
      out.push({ folder: song.folder, title, file });
    }
  }
  return out;
}
function publishedLibraryMissing(index, local) {
  return publishedPracticeFiles(index).filter((item) => {
    const have = (local[item.folder] ?? []).find((entry) => entry.path === item.file.path);
    return needsClientLibraryDownload(have, item.file);
  });
}
function publishedChartSettings(index) {
  return publishedPracticeFiles(index).filter((item) => {
    const path = item.file.path.toLowerCase();
    return path === "settings.json" || path === "song.json";
  });
}
function withPublishedChartSettings(queue, index) {
  const next = [...queue];
  for (const item of publishedChartSettings(index)) {
    if (next.some((row) => row.folder === item.folder && row.file.path === item.file.path)) continue;
    next.push(item);
  }
  return next;
}
function needsClientLibraryDownload(local, remote) {
  if (!local) return true;
  if (local.hash && remote.hash) return local.hash !== remote.hash;
  return local.size !== remote.size;
}
function localFoldersNotOnRemote(localFolders, remoteFolders) {
  const remote = new Set(remoteFolders);
  return localFolders.filter((folder) => !remote.has(folder));
}
function dropMissingSetlistSongs(gigs, songs) {
  const list = [...songs];
  const meta = list.every((item) => typeof item === "object") ? list : void 0;
  const ids = new Set(meta ? meta.map((song) => song.id) : list);
  return gigs.map((gig) => ({
    ...gig,
    setlist: gig.setlist.filter((entry) => {
      if (!isSongEntry(entry)) return true;
      if (entry.skipped) return true;
      if (ids.has(entry.songId)) return true;
      return Boolean(meta && resolvePublishedSongId(entry.songId, meta));
    })
  }));
}

// packages/core/src/mixer.ts
var MIXER_STEMS = [
  "Click",
  "Kick",
  "Bass",
  "Drums",
  "Perc",
  "Keys",
  "Pluck",
  "Guitar",
  "Melody",
  "String",
  "Choir"
];
var MIXER_CHANNELS = [...MIXER_STEMS, "Main"];
function emptyStrip() {
  return { gainDb: 0, muted: false, solo: false };
}
function emptyMixerBank() {
  return {
    Click: emptyStrip(),
    Kick: emptyStrip(),
    Bass: emptyStrip(),
    Drums: emptyStrip(),
    Perc: emptyStrip(),
    Keys: emptyStrip(),
    Pluck: emptyStrip(),
    Guitar: emptyStrip(),
    Melody: emptyStrip(),
    String: emptyStrip(),
    Choir: emptyStrip(),
    Main: emptyStrip()
  };
}
var DEFAULT_METRONOME_VOLUME = 0.7;
var MIXER_GAIN_MIN = -60;
var MIXER_GAIN_MAX = 12;
function parseMetronomeVolume(value) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return DEFAULT_METRONOME_VOLUME;
  return Math.min(1, Math.max(0, parsed));
}
function parseMixStrip(raw) {
  if (!raw || typeof raw !== "object") return emptyStrip();
  const row = raw;
  const gain = Number(row.gainDb);
  return {
    gainDb: Number.isFinite(gain) ? Math.min(MIXER_GAIN_MAX, Math.max(MIXER_GAIN_MIN, gain)) : 0,
    muted: row.muted === true,
    solo: row.solo === true
  };
}
function parseMixerBank(raw) {
  const source2 = raw && typeof raw === "object" && "strips" in raw ? raw.strips : raw;
  const row = source2 && typeof source2 === "object" ? source2 : {};
  const bank = emptyMixerBank();
  for (const channel of MIXER_CHANNELS) {
    if (channel in row) bank[channel] = parseMixStrip(row[channel]);
  }
  return bank;
}
function gigMixerState(gig) {
  return {
    busMix: parseMixerBank(gig?.busMix),
    metronomeVolume: parseMetronomeVolume(gig?.metronomeVolume)
  };
}
function emptyMixerLevels() {
  return {
    Click: 0,
    Kick: 0,
    Bass: 0,
    Drums: 0,
    Perc: 0,
    Keys: 0,
    Pluck: 0,
    Guitar: 0,
    Melody: 0,
    String: 0,
    Choir: 0,
    Main: 0
  };
}
function mixerFileName(channel) {
  return `${channel}.flac`;
}
function fileName(path) {
  return path.replace(/\\/g, "/").split("/").pop() ?? path;
}
function mixerStemFromPath(path) {
  const name = fileName(path);
  const stem = MIXER_STEMS.find((channel) => mixerFileName(channel) === name);
  return stem;
}
function songHasMixerFile(files, channel) {
  if (channel === "Main") return true;
  if (!files) return false;
  const wanted = mixerFileName(channel);
  return files.some((file) => fileName(file) === wanted);
}
function mixerStemAssets(song, files) {
  const existing = new Set(song.assets.map((asset) => fileName(asset.path)));
  const extra = [];
  for (const channel of MIXER_STEMS) {
    const path = mixerFileName(channel);
    if (!files.some((file) => fileName(file) === path)) continue;
    if (existing.has(path)) continue;
    extra.push({
      id: `mix_${channel.toLowerCase()}`,
      kind: "audio",
      path,
      hash: "file",
      audioRole: channel === "Click" ? "click" : "stem",
      label: channel
    });
  }
  return extra;
}
function songWithMixerStems(song, files) {
  const extra = mixerStemAssets(song, files);
  if (extra.length === 0) return song;
  return { ...song, assets: [...song.assets, ...extra] };
}

// packages/core/src/setlist-performance.ts
var MODE_VALUES = new Set(Object.values(SetlistPerformanceMode));
var LEGACY_METRONOME_MODES = /* @__PURE__ */ new Set(["METRONOME_AUTO_STOP", "METRONOME_VISUAL_ONLY"]);
var REMOVED_SETLIST_MODES = /* @__PURE__ */ new Set(["CLICK_ONLY", "FREE"]);
function parseSetlistPerformanceMode(raw) {
  if (typeof raw !== "string") return SetlistPerformanceMode.FollowSongInfo;
  if (LEGACY_METRONOME_MODES.has(raw)) return SetlistPerformanceMode.MetronomeContinuous;
  if (REMOVED_SETLIST_MODES.has(raw)) return SetlistPerformanceMode.FollowSongInfo;
  return MODE_VALUES.has(raw) ? raw : SetlistPerformanceMode.FollowSongInfo;
}
function resolvedSongPlayMode(song, files, requested) {
  const requestedMode = normalizeUserPlayMode(
    requested ?? parseSongInfo(song?.info).playMode
  );
  if (requestedMode === PlayMode.Playback) {
    return hasPlaybackAudio(song, files) ? PlayMode.Playback : PlayMode.View;
  }
  return PlayMode.View;
}
function effectivePlayMode(song, files, setlistMode) {
  const songMode = resolvedSongPlayMode(song, files);
  const mode = parseSetlistPerformanceMode(setlistMode);
  if (mode === SetlistPerformanceMode.FollowSongInfo) return songMode;
  return PlayMode.View;
}
function isMetronomeSetlistMode(mode) {
  return parseSetlistPerformanceMode(mode) === SetlistPerformanceMode.MetronomeContinuous;
}
function isFreeSetlistMode(mode) {
  return parseSetlistPerformanceMode(mode) === SetlistPerformanceMode.Free;
}
function setlistModeIsSilent(mode) {
  return isFreeSetlistMode(mode);
}
var STAGE_NAME_SLOTS = 6;
var VOCAL_BAND_NAME = "Elif";
function padStageNames(raw) {
  return Array.from({ length: STAGE_NAME_SLOTS }, (_, index) => {
    const value = raw?.[index];
    return typeof value === "string" ? value : "";
  });
}
function stageNamesFilled(raw) {
  return padStageNames(raw).some((name) => name.trim());
}
function mergeStageNames(incoming, previous) {
  const next = padStageNames(incoming);
  if (stageNamesFilled(next) || !stageNamesFilled(previous)) return next;
  return padStageNames(previous);
}
function normalizeBandName(value) {
  return value.trim().toLocaleLowerCase("tr");
}
function connectedBandKeys(peers) {
  const counts = /* @__PURE__ */ new Map();
  for (const peer of peers) {
    if (peer.deviceKind !== "client") continue;
    const key = normalizeBandName(peer.deviceName ?? "");
    if (!key) continue;
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return counts;
}
function isBandNameConnected(name, peers) {
  return (connectedBandKeys(peers).get(normalizeBandName(name)) ?? 0) > 0;
}
function songForcedClickOnly(song, files) {
  if (!hasClickFlac(song, files)) return song;
  const info = parseSongInfo(song.info);
  if (info.playMode === PlayMode.ClickOnly) return song;
  return { ...song, info: { ...info, playMode: PlayMode.ClickOnly } };
}
function songsForcedClickOnly(songs, fileIndex) {
  return songs.map((song) => songForcedClickOnly(song, fileIndex[song.id]));
}
function songsForSetlistPerformance(songs, fileIndex, setlistMode) {
  if (parseSetlistPerformanceMode(setlistMode) !== SetlistPerformanceMode.ClickOnly) {
    return songs;
  }
  return songsForcedClickOnly(songs, fileIndex);
}
var SETLIST_MODE_ICON_COLOR = {
  follow: "#ffffff",
  click: "#e24a4a",
  continuous: "#8b5cf6",
  free: "#22d3ee"
};
function declaredSongPlayMode(song) {
  return normalizeUserPlayMode(parseSongInfo(song?.info).playMode);
}
function setlistPlayModeIcon(song, _files, setlistMode) {
  const songMode = declaredSongPlayMode(song);
  const mode = parseSetlistPerformanceMode(setlistMode);
  if (mode === SetlistPerformanceMode.FollowSongInfo) {
    return { playMode: songMode, color: SETLIST_MODE_ICON_COLOR.follow };
  }
  return { playMode: PlayMode.View, color: SETLIST_MODE_ICON_COLOR.continuous };
}

// apps/web/src/ui/master/chord-notes.tsx
var import_react = __toESM(require_react(), 1);

// apps/web/src/native/library.ts
init_dist();

// node_modules/@capacitor/filesystem/dist/esm/index.js
init_dist();

// node_modules/@capacitor/synapse/dist/synapse.mjs
function s(t) {
  t.CapacitorUtils.Synapse = new Proxy(
    {},
    {
      get(e, n) {
        return new Proxy({}, {
          get(w, o) {
            return (c, p, r) => {
              const i2 = t.Capacitor.Plugins[n];
              if (i2 === void 0) {
                r(new Error(`Capacitor plugin ${n} not found`));
                return;
              }
              if (typeof i2[o] != "function") {
                r(new Error(`Method ${o} not found in Capacitor plugin ${n}`));
                return;
              }
              (async () => {
                try {
                  const a = await i2[o](c);
                  p(a);
                } catch (a) {
                  r(a);
                }
              })();
            };
          }
        });
      }
    }
  );
}
function u(t) {
  t.CapacitorUtils.Synapse = new Proxy(
    {},
    {
      get(e, n) {
        return t.cordova.plugins[n];
      }
    }
  );
}
function f(t = false) {
  typeof window > "u" || (window.CapacitorUtils = window.CapacitorUtils || {}, window.Capacitor !== void 0 && !t ? s(window) : window.cordova !== void 0 && u(window));
}

// node_modules/@capacitor/filesystem/dist/esm/index.js
init_definitions();
var Filesystem = registerPlugin("Filesystem", {
  web: () => Promise.resolve().then(() => (init_web(), web_exports)).then((m) => new m.FilesystemWeb())
});
f();

// apps/web/src/persist/shipped-gigs.ts
var SEED_GIG_ID = "gig_2026_09_12";
function parsePackedGigs(raw) {
  if (!raw || typeof raw !== "object") return [];
  const gigs = raw.gigs;
  if (!Array.isArray(gigs)) return [];
  return gigs.filter(isPackedGig);
}
function isPackedGig(value) {
  if (!value || typeof value !== "object") return false;
  const gig = value;
  return typeof gig.id === "string" && gig.id.length > 0 && typeof gig.name === "string" && Array.isArray(gig.setlist);
}
function isPlaceholderSetlist(gig, songs) {
  if (gig.id === SEED_GIG_ID) return true;
  if (gig.setlist.length === 0) return false;
  return !gig.setlist.some((entry) => {
    if (!isSongEntry(entry)) return false;
    return Boolean(resolvePublishedSongId(entry.songId, songs) || songs.some((song) => song.id === entry.songId));
  });
}
function mergeShippedGigs(local, shipped, songs) {
  const remapped = dropMissingSetlistSongs(
    shipped.map((gig) => ({
      ...gig,
      setlist: gig.setlist.map((entry) => {
        if (!isSongEntry(entry)) return entry;
        return { ...entry, songId: resolvePublishedSongId(entry.songId, songs) ?? entry.songId };
      })
    })),
    songs
  ).filter((gig) => gig.setlist.some((entry) => isSongEntry(entry)));
  const shippedIds = new Set(remapped.map((gig) => gig.id));
  const shippedNames = new Set(remapped.map((gig) => gig.name.trim().toLowerCase()));
  const extra = local.filter((gig) => {
    if (isPlaceholderSetlist(gig, songs)) return false;
    return !shippedIds.has(gig.id) && !shippedNames.has(gig.name.trim().toLowerCase());
  });
  return [...remapped, ...extra];
}

// apps/web/src/native/metro-intro.ts
var METRO_INTRO_FILES = ["1.flac", "2.flac"];
var FLAC_MAGIC = [102, 76, 97, 67];
function metroIntroFileName(url) {
  const name = url.split("/").pop()?.split("?")[0] ?? "";
  return METRO_INTRO_FILES.find((file) => file === name.toLowerCase());
}
function bufferLooksLikeFlac(data) {
  if (!data || data.byteLength < FLAC_MAGIC.length) return false;
  const bytes2 = new Uint8Array(data);
  return FLAC_MAGIC.every((byte, index) => bytes2[index] === byte);
}
function withSlash(value) {
  return value.endsWith("/") ? value : `${value}/`;
}
function metroIntroHttpUrls(name, origin2, baseUrl = "/") {
  if (!origin2) return [];
  const root = withSlash(origin2);
  const urls = [];
  if (baseUrl.startsWith("http://") || baseUrl.startsWith("https://") || baseUrl.startsWith("/")) {
    const base = withSlash(baseUrl);
    const pageRoot = base.startsWith("http") ? base : new URL(base.replace(/^\//, ""), root).href;
    urls.push(new URL(`library/${name}`, pageRoot).href);
    urls.push(new URL(`client-library/${name}`, pageRoot).href);
  }
  urls.push(new URL(`library/${name}`, root).href);
  urls.push(new URL(`client-library/${name}`, root).href);
  return [...new Set(urls)];
}

// apps/web/src/native/platform.ts
init_dist();
function isNativeApp() {
  return Capacitor.isNativePlatform();
}

// apps/web/src/native/library.ts
var LIBRARY_ROOT = "library/songs";
var folderBySongId = {};
function folderForSong(songId) {
  return folderBySongId[songId] ?? songId;
}
function registerSongFolder(songId, folder) {
  folderBySongId[songId] = folder;
}
function resetSongFolders() {
  for (const key of Object.keys(folderBySongId)) delete folderBySongId[key];
}
var fileOverride = null;
function setLibraryFileOverride(reader) {
  fileOverride = reader;
}
function webSongUrl(songId, relPath) {
  return `/library/songs/${encodeURIComponent(songId)}/${relPath.split("/").map((part) => encodeURIComponent(part)).join("/")}`;
}
function nativePath(folder, relPath = "") {
  return relPath ? `${LIBRARY_ROOT}/${folder}/${relPath}` : `${LIBRARY_ROOT}/${folder}`;
}
async function listFiles(folder, prefix = "") {
  const path = prefix ? nativePath(folder, prefix) : nativePath(folder);
  let entries = [];
  try {
    const result = await Filesystem.readdir({ path, directory: Directory.Documents });
    entries = result.files;
  } catch {
    return [];
  }
  const out = [];
  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    const rel = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.type === "directory") out.push(...await listFiles(folder, rel));
    else out.push(rel);
  }
  return out;
}
function positiveInt2(value, fallback) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}
function parseInfo(raw) {
  return parseSongInfo(raw);
}
function infoIsComplete(raw) {
  if (!raw || typeof raw !== "object") return false;
  const record = raw;
  return positiveInt2(record.bpm, 0) > 0 && positiveInt2(record.numerator, 0) > 0 && positiveInt2(record.denominator, 0) > 0;
}
function playbackInfo(packed) {
  if (!packed) return parseInfo(void 0);
  const map = packed.tempoMap;
  const first = Array.isArray(map) && map[0] && typeof map[0] === "object" && !Array.isArray(map[0]) ? map[0] : void 0;
  return parseInfo({
    bpm: first?.bpm,
    numerator: first?.numerator,
    denominator: first?.denominator,
    duration: packed.duration,
    key: packed.key,
    scale: packed.scale,
    style: packed.style
  });
}
async function readUtf8(path) {
  try {
    const file = await Filesystem.readFile({
      path,
      directory: Directory.Documents,
      encoding: Encoding.UTF8
    });
    return typeof file.data === "string" ? file.data : null;
  } catch {
    return null;
  }
}
async function readJson(path) {
  const text = await readUtf8(path);
  if (!text) return void 0;
  try {
    return JSON.parse(text);
  } catch {
    return void 0;
  }
}
async function writeUtf8(path, contents) {
  await Filesystem.writeFile({
    path,
    directory: Directory.Documents,
    data: contents,
    encoding: Encoding.UTF8
  });
}
function stubSong(folder, info) {
  return {
    id: folder,
    version: 1,
    title: folder,
    folder,
    duration: 0,
    assets: [],
    tempoMap: [
      {
        time: 0,
        measure: 1,
        bpm: info.bpm,
        numerator: info.numerator,
        denominator: info.denominator
      }
    ],
    sections: [],
    info
  };
}
async function ensureInfo(folder, packed) {
  const settingsPath = nativePath(folder, "settings.json");
  const settingsRaw = await readJson(settingsPath);
  const settings = settingsRaw && typeof settingsRaw === "object" && !Array.isArray(settingsRaw) ? { ...settingsRaw } : {};
  const baseline = infoIsComplete(settings.view) ? settings.view : playbackInfo(packed);
  const info = parseInfo({
    ...baseline && typeof baseline === "object" ? baseline : {},
    ...settings.performance && typeof settings.performance === "object" ? settings.performance : {},
    ...settings.notes && typeof settings.notes === "object" ? { pageNotes: settings.notes } : {},
    ...packed?.info && typeof packed.info === "object" ? packed.info : {},
    metroNotes: {
      ...settings.metroNotes && typeof settings.metroNotes === "object" ? settings.metroNotes : {},
      ...packed?.info && typeof packed.info === "object" && packed.info.metroNotes ? packed.info.metroNotes : {}
    }
  });
  if (packed && JSON.stringify(parseInfo(packed.info)) !== JSON.stringify(info)) {
    try {
      await writeUtf8(
        nativePath(folder, "song.json"),
        `${JSON.stringify({ ...packed, info }, null, 2)}
`
      );
    } catch {
    }
  }
  if ("view" in settings || "performance" in settings || "notes" in settings) {
    const { view: _view, performance: _performance, notes: _notes, ...remaining } = settings;
    try {
      await writeUtf8(settingsPath, `${JSON.stringify(remaining, null, 2)}
`);
    } catch {
    }
  }
  return info;
}
async function scanNativeLibrary() {
  for (const key of Object.keys(folderBySongId)) delete folderBySongId[key];
  const songs = [];
  const fileIndex = {};
  let folders = [];
  try {
    const result = await Filesystem.readdir({
      path: LIBRARY_ROOT,
      directory: Directory.Documents
    });
    folders = result.files;
  } catch {
    return { songs, fileIndex };
  }
  for (const entry of folders) {
    if (entry.type !== "directory" || entry.name.startsWith(".")) continue;
    const folder = entry.name;
    const packedRaw = await readJson(nativePath(folder, "song.json"));
    const packed = packedRaw && typeof packedRaw === "object" && !Array.isArray(packedRaw) ? packedRaw : null;
    const info = await ensureInfo(folder, packed);
    const files = await listFiles(folder);
    const song = {
      ...stubSong(folder, info),
      ...packed ?? {},
      folder,
      title: typeof packed?.title === "string" && packed.title.trim() ? packed.title : folder,
      id: typeof packed?.id === "string" && packed.id.length > 0 ? packed.id : folder,
      info
    };
    folderBySongId[song.id] = folder;
    fileIndex[song.id] = files;
    songs.push(song);
  }
  return { songs, fileIndex };
}
function fetchTimeout(ms) {
  if (typeof AbortSignal !== "undefined" && typeof AbortSignal.timeout === "function") {
    return AbortSignal.timeout(ms);
  }
  const controller2 = new AbortController();
  window.setTimeout(() => controller2.abort(), ms);
  return controller2.signal;
}
async function scanWebLibrary() {
  const response = await fetch("/library/index.json", { signal: fetchTimeout(5e3) });
  if (!response.ok) throw new Error(`Library ${response.status}`);
  return await response.json();
}
async function loadLibraryIndex() {
  if (isNativeApp()) return scanNativeLibrary();
  return scanWebLibrary();
}
async function libraryFileUrl(songId, relPath) {
  if (!isNativeApp()) return webSongUrl(songId, relPath);
  const { uri } = await Filesystem.getUri({
    path: nativePath(folderForSong(songId), relPath),
    directory: Directory.Documents
  });
  return Capacitor.convertFileSrc(uri);
}
function requestBytes(url) {
  return new Promise((resolve2, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.responseType = "arraybuffer";
    request.onload = () => {
      const body = request.response;
      const ok = request.status === 0 || request.status >= 200 && request.status < 300;
      if (ok && body) resolve2(body);
      else reject(new Error(`File request failed (${request.status})`));
    };
    request.onerror = () => reject(new Error("File request failed"));
    request.send();
  });
}
async function readSongFile(songId, relPath) {
  if (fileOverride) {
    const overridden = await fileOverride(songId, relPath);
    if (overridden) return overridden;
    throw new Error(`Missing ${relPath}`);
  }
  if (!isNativeApp()) {
    const response = await fetch(await libraryFileUrl(songId, relPath));
    if (!response.ok) throw new Error(`Missing ${relPath}`);
    return response.arrayBuffer();
  }
  const folder = folderForSong(songId);
  const path = nativePath(folder, relPath);
  try {
    return await requestBytes(await libraryFileUrl(songId, relPath));
  } catch {
  }
  const file = await Filesystem.readFile({ path, directory: Directory.Documents });
  return decodeFilesystemBytes(file.data);
}
async function readSongJsonFile(songId, relPath) {
  if (fileOverride) {
    const overridden = await fileOverride(songId, relPath);
    if (!overridden) return null;
    try {
      return JSON.parse(new TextDecoder().decode(overridden));
    } catch {
      return null;
    }
  }
  if (!isNativeApp()) {
    const response = await fetch(webSongUrl(songId, relPath), { signal: fetchTimeout(5e3) });
    if (response.status === 404) return null;
    if (!response.ok) throw new Error(`${relPath} ${response.status}`);
    return response.json();
  }
  const raw = await readJson(nativePath(folderForSong(songId), relPath));
  return raw ?? null;
}
async function writeSongJsonFile(songId, relPath, data) {
  const body = `${JSON.stringify(data, null, 2)}
`;
  if (!isNativeApp()) {
    const response = await fetch(webSongUrl(songId, relPath), {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body,
      signal: fetchTimeout(5e3)
    });
    if (!response.ok) throw new Error(`Could not save ${relPath} (${response.status}).`);
    return;
  }
  await writeUtf8(nativePath(folderForSong(songId), relPath), body);
}
async function decodeFilesystemBytes(data) {
  if (data instanceof ArrayBuffer) return data;
  if (typeof Blob !== "undefined" && data instanceof Blob) return data.arrayBuffer();
  if (typeof data !== "string") throw new Error("Missing library file");
  try {
    return await (await fetch(`data:application/octet-stream;base64,${data}`)).arrayBuffer();
  } catch {
    const binary = atob(data);
    const bytes2 = new Uint8Array(binary.length);
    for (let i2 = 0; i2 < binary.length; i2 += 1) bytes2[i2] = binary.charCodeAt(i2);
    return bytes2.buffer;
  }
}
async function readDocumentsBytes(path) {
  try {
    const { uri } = await Filesystem.getUri({ path, directory: Directory.Documents });
    return await requestBytes(Capacitor.convertFileSrc(uri));
  } catch {
  }
  try {
    const file = await Filesystem.readFile({ path, directory: Directory.Documents });
    return await decodeFilesystemBytes(file.data);
  } catch {
    return void 0;
  }
}
async function persistMetroIntro(name, data) {
  try {
    await Filesystem.mkdir({
      path: "library",
      directory: Directory.Documents,
      recursive: true
    });
  } catch {
  }
  let binary = "";
  const bytes2 = new Uint8Array(data);
  for (const byte of bytes2) binary += String.fromCharCode(byte);
  await Filesystem.writeFile({
    path: `library/${name}`,
    directory: Directory.Documents,
    data: btoa(binary),
    recursive: true
  });
}
async function fetchFlac(url) {
  try {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) return void 0;
    const data = await response.arrayBuffer();
    return bufferLooksLikeFlac(data) ? data : void 0;
  } catch {
    return void 0;
  }
}
async function readMetroIntroBuffer(url) {
  const name = metroIntroFileName(url);
  if (!name) return void 0;
  if (isNativeApp()) {
    const fromDocs = await readDocumentsBytes(`library/${name}`);
    if (bufferLooksLikeFlac(fromDocs)) return fromDocs;
  }
  const origin2 = typeof window !== "undefined" ? window.location.origin : "";
  const base = import.meta.env.BASE_URL || "/";
  for (const href of metroIntroHttpUrls(name, origin2, base)) {
    const data = await fetchFlac(href);
    if (!data) continue;
    if (isNativeApp()) void persistMetroIntro(name, data).catch(() => void 0);
    return data;
  }
  return void 0;
}
function decodePackedGigs(data) {
  if (!data) return [];
  try {
    return parsePackedGigs(JSON.parse(new TextDecoder().decode(data)));
  } catch {
    return [];
  }
}
async function readShippedGigs() {
  if (isNativeApp()) {
    const fromDocs = decodePackedGigs(await readDocumentsBytes("library/gigs.json"));
    if (fromDocs.length) return fromDocs;
  }
  const urls = ["/client-library/gigs.json", "/library/gigs.json"];
  for (const url of urls) {
    try {
      const response = await fetch(url, { cache: "no-store" });
      if (!response.ok) continue;
      const packed = decodePackedGigs(await response.arrayBuffer());
      if (packed.length) return packed;
    } catch {
    }
  }
  return [];
}
async function writeLibraryGigs(gigs) {
  const body = `${JSON.stringify({ gigs }, null, 2)}
`;
  if (!isNativeApp()) {
    try {
      await fetch("/library/gigs.json", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body,
        signal: fetchTimeout(1e4)
      });
    } catch {
    }
    return;
  }
  try {
    await Filesystem.mkdir({
      path: "library",
      directory: Directory.Documents,
      recursive: true
    });
  } catch {
  }
  await writeUtf8("library/gigs.json", body);
}
async function writeSongBytes(songId, relPath, data) {
  const bytes2 = data instanceof Uint8Array ? data : new Uint8Array(data);
  if (!isNativeApp()) {
    const response = await fetch(webSongUrl(songId, relPath), {
      method: "PUT",
      headers: { "content-type": "application/pdf" },
      body: bytes2,
      signal: fetchTimeout(3e4)
    });
    if (!response.ok) throw new Error(`Could not save ${relPath} (${response.status}).`);
    return;
  }
  let binary = "";
  for (const byte of bytes2) binary += String.fromCharCode(byte);
  await Filesystem.writeFile({
    path: nativePath(folderForSong(songId), relPath),
    directory: Directory.Documents,
    data: btoa(binary)
  });
}

// apps/web/src/library/api.ts
var libraryApi = {
  loadIndex: loadLibraryIndex,
  fileUrl: libraryFileUrl,
  readBytes: readSongFile,
  readJson: readSongJsonFile,
  writeJson: writeSongJsonFile,
  writeBytes: writeSongBytes
};

// apps/web/src/ui/master/song-settings.ts
var SONG_SETTINGS_FILE = "settings.json";
var SONG_FILE = "song.json";
function songFileWithInfo(song, info) {
  const existing = parseSongInfo({
    ...song.info && typeof song.info === "object" ? song.info : {},
    kita: song.kita
  });
  const parsed = parseSongInfo({ ...existing, ...info, kita: info.kita ?? existing.kita });
  return {
    ...song,
    ...parsed.kita != null ? { kita: parsed.kita } : {},
    info: parsed
  };
}
function writeSongInfo(songId, info) {
  const key = `${songId}:${SONG_FILE}`;
  const previous = writeQueues.get(key) ?? Promise.resolve();
  const next = previous.catch(() => void 0).then(async () => {
    const raw = await libraryApi.readJson(songId, SONG_FILE);
    const song = settingsObject(raw);
    await libraryApi.writeJson(songId, SONG_FILE, songFileWithInfo(song, info));
  });
  writeQueues.set(key, next);
  void next.then(
    () => {
      if (writeQueues.get(key) === next) writeQueues.delete(key);
    },
    () => {
      if (writeQueues.get(key) === next) writeQueues.delete(key);
    }
  );
  return next;
}
var writeQueues = /* @__PURE__ */ new Map();
function settingsObject(raw) {
  return raw && typeof raw === "object" && !Array.isArray(raw) ? raw : {};
}
async function readSongSettings(songId) {
  return settingsObject(await libraryApi.readJson(songId, SONG_SETTINGS_FILE));
}
function updateSongSettings(songId, update) {
  const previous = writeQueues.get(songId) ?? Promise.resolve();
  const next = previous.catch(() => void 0).then(async () => {
    const current = await readSongSettings(songId);
    await libraryApi.writeJson(songId, SONG_SETTINGS_FILE, update(current));
  });
  writeQueues.set(songId, next);
  void next.then(
    () => {
      if (writeQueues.get(songId) === next) writeQueues.delete(songId);
    },
    () => {
      if (writeQueues.get(songId) === next) writeQueues.delete(songId);
    }
  );
  return next;
}

// apps/web/src/ui/master/nota-sections.ts
var notaLayoutMemory = /* @__PURE__ */ new Map();
function clearNotaLayoutMemory() {
  notaLayoutMemory.clear();
}

// apps/web/src/ui/master/chord-notes.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var TIME_EPS2 = 0.02;
var STEPS_PER_BEAT = 4;
var STEPS_PER_MEASURE = STEPS_PER_BEAT * 4;
function stepsForBeats(beats) {
  return Math.max(STEPS_PER_BEAT, Math.max(1, Math.round(beats)) * STEPS_PER_BEAT);
}
function stepsFromTempoMap(map, measure) {
  const start = measureSpan2(map, measure).start;
  return stepsForBeats(Math.max(1, Math.round(tempoAt(map, start).numerator) || 4));
}
var NOTE_LANES = [
  { name: "G", pc: 7 },
  { name: "F", pc: 5 },
  { name: "E", pc: 4 },
  { name: "D", pc: 2 },
  { name: "C", pc: 0 }
];
function measureSpan2(map, measure) {
  let point = map[0];
  for (const item of map) {
    if (item.measure <= measure) point = item;
    else break;
  }
  if (!point) return { start: 0, end: 0 };
  const len = secondsPerMeasure(point);
  const start = point.time + (measure - point.measure) * len;
  return { start, end: start + len };
}
function chordEnd2(chords, index, fallback) {
  const current = chords[index];
  if (current?.end != null) return current.end;
  return chords[index + 1]?.time ?? fallback;
}
function laneName(pitch) {
  const pc = (pitch % 12 + 12) % 12;
  return NOTE_LANES.find((lane) => lane.pc === pc)?.name;
}
function stepOf(note, origin2, steps, map) {
  const meter = tempoAt(map, note.time);
  const measureLen = secondsPerMeasure(meter);
  if (measureLen <= 0) return 0;
  const raw = (note.time - origin2) / measureLen * steps;
  return Math.max(0, Math.min(steps - 1, Math.round(raw)));
}
function notesInMeasure(chords, measure, start, end, duration, map) {
  const origin2 = measureSpan2(map, measure).start;
  const hits = /* @__PURE__ */ new Map();
  const seen = /* @__PURE__ */ new Set();
  for (let i2 = 0; i2 < chords.length; i2++) {
    const chord = chords[i2];
    const cEnd = chordEnd2(chords, i2, duration);
    if (chord.time >= end - TIME_EPS2 || cEnd <= start + TIME_EPS2) continue;
    for (const note of chord.notes ?? []) {
      if (note.time < start - TIME_EPS2 || note.time >= end - TIME_EPS2) continue;
      const key = `${note.time.toFixed(5)}:${note.pitch}`;
      if (seen.has(key)) continue;
      seen.add(key);
      const lane = laneName(note.pitch);
      if (!lane) continue;
      const step = stepOf(note, origin2, stepsFromTempoMap(map, measure), map);
      hits.set(`${step}:${lane}`, { step, lane });
    }
  }
  return [...hits.values()].sort((a, b) => a.step - b.step || a.lane.localeCompare(b.lane));
}
function notesForMeasure(song, measure) {
  const span = measureSpan2(song.tempoMap, measure);
  const start = span.start;
  const end = Math.min(span.end, song.duration);
  if (end - start <= TIME_EPS2) return [];
  return notesInMeasure(song.chords ?? [], measure, start, end, song.duration, song.tempoMap);
}
function stepAt(time, origin2, map, steps) {
  const meter = tempoAt(map, time);
  const measureLen = secondsPerMeasure(meter);
  if (measureLen <= 0) return 0;
  const raw = (time - origin2) / measureLen * steps;
  return Math.max(0, Math.min(steps - 1, Math.round(raw)));
}
function beatIndexAtTime(time, start, end, beats) {
  const n = Math.max(1, beats);
  const span = end - start;
  if (span <= TIME_EPS2) return 0;
  const raw = (time - start) / span * n;
  const nearest = Math.round(raw);
  if (Math.abs(raw - nearest) < 1e-3) {
    return Math.max(0, Math.min(n - 1, nearest));
  }
  return Math.max(0, Math.min(n - 1, Math.floor(raw + 1e-6)));
}
function beatIndexForChord(chord, start, end, beats) {
  return beatIndexAtTime(chord.time, start, end, beats);
}
function chordMarksForMeasure(song, measure) {
  const span = measureSpan2(song.tempoMap, measure);
  const start = span.start;
  const end = Math.min(span.end, song.duration);
  if (end - start <= TIME_EPS2) return [];
  const beats = beatsForMeasure(song, measure);
  const steps = stepsForBeats(beats);
  const chords = song.chords ?? [];
  const starting = chords.filter(
    (chord) => chord.time >= start - TIME_EPS2 && chord.time < end - TIME_EPS2 && chord.text.trim()
  );
  if (starting.length > 0) {
    return starting.map((chord) => ({
      text: chord.text.trim(),
      step: stepAt(chord.time, start, song.tempoMap, steps),
      beat: beatIndexForChord(chord, start, end, beats)
    }));
  }
  for (let i2 = chords.length - 1; i2 >= 0; i2--) {
    const chord = chords[i2];
    if (!chord || chord.time > start + TIME_EPS2) continue;
    if (chordEnd2(chords, i2, song.duration) > start + TIME_EPS2) {
      const text = chord.text.trim();
      return text ? [{ text, step: 0, beat: 0 }] : [];
    }
    break;
  }
  return [];
}
function beatsForMeasure(song, measure) {
  const map = song.tempoMap ?? [];
  const start = measureSpan2(map, measure).start;
  return Math.max(1, Math.round(tempoAt(map, start).numerator) || 4);
}
function stepsForMeasure(song, measure) {
  return stepsForBeats(beatsForMeasure(song, measure));
}
function noteGridKey(hits) {
  return hits.map((hit) => `${hit.step}:${hit.lane}`).sort().join("|");
}

// apps/web/src/ui/master/rall-alert.ts
var TIME_EPS3 = 0.02;
function firstTempoChangeMeasure(map) {
  if (!map || map.length < 2) return void 0;
  const points = [...map].filter((point) => point.bpm > 0).sort((a, b) => a.time - b.time || a.measure - b.measure);
  const first = points[0];
  if (!first) return void 0;
  const change = points.find(
    (point) => point.time > first.time + TIME_EPS3 && Math.abs(point.bpm - first.bpm) > 1e-6
  );
  return change?.measure;
}
function rallDrumTone(currentMeasure, rallMeasure, sectionCurrent) {
  if (!sectionCurrent || currentMeasure == null || rallMeasure == null) return "idle";
  if (currentMeasure >= rallMeasure) return "now";
  if (currentMeasure === rallMeasure - 1) return "soon";
  return "idle";
}
function isRallSectionName(name) {
  return name.trim().toLocaleUpperCase("tr-TR") === "RALL";
}
function sectionAtTime(sections, time) {
  return sections.find(
    (section) => time >= section.start - TIME_EPS3 && time < section.end - TIME_EPS3
  );
}
function isFinalSectionName(name) {
  return name.trim().toLocaleUpperCase("tr-TR") === "FINAL";
}
function finalMarkerTime(song) {
  const at = song?.finalAt;
  if (at != null && Number.isFinite(at) && at >= 0) return at;
  const named = [...song?.sections ?? []].reverse().find((section) => isFinalSectionName(section.name));
  return named?.start;
}
function finalOwnerSection(song) {
  const at = finalMarkerTime(song);
  if (at == null) return void 0;
  return sectionAtTime(song.sections, at) ?? [...song.sections].reverse().find((section) => isFinalSectionName(section.name));
}
function finalMeasure(song) {
  const at = finalMarkerTime(song);
  if (at == null) return void 0;
  return timeToMusical([...song?.tempoMap ?? []], at).measure;
}
function lastFormMeasure(song) {
  const last = song?.sections?.[song.sections.length - 1];
  if (!last) return void 0;
  return timeToMusical(
    [...song.tempoMap ?? []],
    Math.max(last.end - TIME_EPS3, last.start)
  ).measure;
}
function finalLastMeasure(song) {
  const start = finalMeasure(song);
  if (start == null || !song) return void 0;
  const owner = finalOwnerSection(song);
  const end = owner?.end ?? song.duration;
  const ownerLast = end == null ? start : timeToMusical(
    [...song.tempoMap ?? []],
    Math.max(end - TIME_EPS3, song.finalAt ?? 0)
  ).measure;
  const formLast = lastFormMeasure(song);
  return Math.max(start, ownerLast, formLast ?? start);
}
function finalDrumTone(currentMeasure, song, sectionCurrent) {
  if (!sectionCurrent || currentMeasure == null) return "idle";
  const start = finalMeasure(song);
  const last = finalLastMeasure(song);
  if (start == null || last == null) return "idle";
  if (currentMeasure > last || currentMeasure < start - 1) return "idle";
  if (currentMeasure >= start) return "now";
  return "soon";
}
function lastSectionName(song) {
  const sections = song?.sections ?? [];
  return sections[sections.length - 1]?.name;
}
function songCues(song) {
  if (!song) return [];
  const last = lastSectionName(song);
  const cues = [];
  if (firstTempoChangeMeasure(song.tempoMap) != null && !isRallSectionName(last ?? "")) {
    cues.push("rall");
  }
  if (finalMeasure(song) != null) {
    cues.push("final");
  }
  return cues;
}
function songCueTone(measure, kind, song) {
  if (measure == null) return "idle";
  const last = lastFormMeasure(song);
  if (last != null && measure > last) return "idle";
  if (kind === "rall") {
    return rallDrumTone(measure, firstTempoChangeMeasure(song?.tempoMap), true);
  }
  return finalDrumTone(measure, song, true);
}
function applySongCueTone(el, tone) {
  el.classList.remove("idle", "soon", "now");
  el.classList.add(tone);
}
function cueMeasureAt(song, time) {
  return timeToMusical([...song?.tempoMap ?? []], Math.max(0, time)).measure;
}

// apps/web/src/ui/master/chord-chart.ts
var TIME_EPS4 = 0.02;
var BARS_PER_LINE = 4;
var MIN_REPEAT_BARS = 4;
function slotGridPlacement(slot, steps) {
  const n = Math.max(1, Math.round(steps));
  const column = Math.min(n, Math.max(1, slot.step + 1));
  const span = Math.min(n - column + 1, Math.max(1, Math.round((slot.to - slot.from) * n)));
  return { column, span };
}
function barKey(blockId, measure) {
  return `${blockId}#${measure}`;
}
function barNumbers(song, block) {
  const map = song.tempoMap ?? [];
  const first = timeToMusical(map, block.originStart + TIME_EPS4).measure;
  const last = timeToMusical(map, Math.max(block.originStart, block.originEnd - TIME_EPS4)).measure;
  const bars = [];
  for (let measure = first; measure <= last; measure += 1) bars.push(measure);
  return bars;
}
function slotsInBar(song, measure) {
  const steps = stepsForMeasure(song, measure);
  const marks = chordMarksForMeasure(song, measure).filter((mark) => mark.text.trim().length > 0);
  return marks.map((mark, index) => {
    const next = marks[index + 1];
    return {
      text: mark.text,
      beat: mark.beat,
      step: mark.step,
      from: mark.step / steps,
      to: next ? next.step / steps : 1
    };
  });
}
function barOf(song, measure, block) {
  const span = measureSpan2(song.tempoMap ?? [], measure);
  return {
    measure,
    start: span.start,
    end: Math.min(span.end, Math.max(span.start, block.originEnd)),
    beats: beatsForMeasure(song, measure),
    steps: stepsForMeasure(song, measure),
    slots: slotsInBar(song, measure),
    notes: notesForMeasure(song, measure)
  };
}
function barPrint(bar) {
  const chords = bar.slots.map((slot) => `${slot.step}:${slot.text}`).join(",");
  return `${bar.steps}/${chords}/${noteGridKey(bar.notes)}`;
}
function samePrints(left, right) {
  return left.length === right.length && left.every((print, index) => print === right[index]);
}
function repeats(prints, start, length) {
  let plays = 1;
  for (; ; ) {
    const from = start + length * plays;
    if (from + length > prints.length) break;
    if (!samePrints(prints.slice(start, start + length), prints.slice(from, from + length))) break;
    plays += 1;
  }
  return plays;
}
function repeatFrom(prints, start) {
  const room = Math.floor((prints.length - start) / 2);
  for (let length = MIN_REPEAT_BARS; length <= room; length += 1) {
    const plays = repeats(prints, start, length);
    if (plays > 1) return { length, plays };
  }
  return null;
}
function lines(bars) {
  const out = [];
  for (let index = 0; index < bars.length; index += BARS_PER_LINE) {
    out.push(bars.slice(index, index + BARS_PER_LINE));
  }
  return out;
}
function spanOf(id, bars, plays) {
  return { id, lines: lines(bars), bars: bars.length, plays };
}
function spansOf(blockId, bars, prints) {
  const spans = [];
  let plain = [];
  const flush = () => {
    if (plain.length === 0) return;
    spans.push(spanOf(`${blockId}_s${spans.length}`, plain, 1));
    plain = [];
  };
  let index = 0;
  while (index < bars.length) {
    const found = repeatFrom(prints, index);
    if (!found) {
      const bar = bars[index];
      if (bar) plain.push(bar);
      index += 1;
      continue;
    }
    flush();
    spans.push(
      spanOf(`${blockId}_s${spans.length}`, bars.slice(index, index + found.length), found.plays)
    );
    index += found.length * found.plays;
  }
  flush();
  return spans;
}
function headName(item) {
  return item?.heads[0]?.section.name.trim() ?? "";
}
function family(name) {
  const letters = name.trim().match(/^\p{L}+/u)?.[0] ?? name.trim();
  return letters.toUpperCase();
}
function runsMatch(left, right) {
  return left.length === right.length && left.every((item, index) => samePrints(item.prints, right[index]?.prints ?? []));
}
function nameHeads(target, source2) {
  const lights = /* @__PURE__ */ new Map();
  for (const head of source2.heads) {
    const name = head.section.name.trim();
    const already = target.heads.find((item) => item.section.name.trim() === name);
    if (already) lights.set(head.block.id, already.block.id);
    else {
      target.heads.push(head);
      lights.set(head.block.id, head.block.id);
    }
  }
  return lights;
}
function stack(target, source2) {
  const lights = nameHeads(target, source2);
  const first = source2.heads[0];
  const fallback = (first ? lights.get(first.block.id) : "") ?? "";
  source2.bars.forEach((bar, at) => {
    const blockId = source2.owners[at];
    if (blockId)
      target.shared.push({
        blockId,
        bar,
        at,
        head: lights.get(blockId) ?? fallback
      });
  });
  for (const item of source2.shared) target.shared.push(item);
  target.passes += source2.passes;
}
function unmarked(item) {
  return item.heads.every(
    (head) => !head.block.coda && !head.block.toCoda && !head.block.segno && !head.block.ds && !head.block.repeatStart && !head.block.repeatEnd
  );
}
function foldable(first, next) {
  if (!runsMatch(first, next)) return false;
  if (next.some((item) => item.heads.some((head) => head.block.coda))) return false;
  return first.every((item, at) => {
    const name = headName(next[at]);
    if (!name || family(name) !== family(headName(item))) return false;
    return !item.heads.some((head) => head.section.name.trim() === name);
  });
}
function foldRepeatedRuns(written) {
  const rows = [];
  let index = 0;
  while (index < written.length) {
    let folded = 0;
    for (let length = Math.floor((written.length - index) / 2); length >= 1; length -= 1) {
      const first = written.slice(index, index + length);
      let passes = 1;
      for (; ; ) {
        const from = index + length * passes;
        const next = written.slice(from, from + length);
        if (next.length < length || !foldable(first, next)) break;
        if (first.some((item) => item.heads.some((head) => head.block.ds))) break;
        first.forEach((item, at) => {
          const source2 = next[at];
          if (source2) stack(item, source2);
        });
        passes += 1;
      }
      if (passes === 1) continue;
      const open = first[0];
      const close = first[length - 1];
      if (open) open.opens = true;
      if (close) close.closes = passes;
      rows.push(...first);
      folded = length * passes;
      break;
    }
    if (folded === 0) {
      const item = written[index];
      if (item) rows.push(item);
    }
    index += folded || 1;
  }
  return rows;
}
function endingSplit(left, right) {
  if (left.tail || right.tail) return 0;
  if (left.passes > 1 || right.passes > 1 || left.shared.length > 0 || right.shared.length > 0) {
    return 0;
  }
  if (!unmarked(left)) return 0;
  if (right.heads.some(
    (head) => head.block.coda || head.block.segno || head.block.repeatStart || head.block.repeatEnd
  )) {
    return 0;
  }
  if (left.prints.length !== right.prints.length) return 0;
  if (left.prints.length < MIN_REPEAT_BARS) return 0;
  if (family(headName(left)) !== family(headName(right))) return 0;
  let common = 0;
  while (common < left.prints.length && left.prints[common] === right.prints[common]) common += 1;
  const tail2 = left.prints.length - common;
  if (tail2 === 0 || common < tail2) return 0;
  return common;
}
function foldEndings(rows) {
  const out = [];
  let index = 0;
  while (index < rows.length) {
    const left = rows[index];
    const right = rows[index + 1];
    const common = left && right ? endingSplit(left, right) : 0;
    if (!left || !right || common === 0) {
      if (left) out.push(left);
      index += 1;
      continue;
    }
    const lights = nameHeads(left, right);
    const shown = left.heads[0];
    for (const head2 of right.heads) {
      if (!shown) break;
      if (head2.block.ds) shown.block.ds = true;
      if (head2.block.toCoda) {
        shown.block.toCoda = true;
        if (head2.block.toCodaAt != null) shown.block.toCodaAt = head2.block.toCodaAt;
      }
    }
    const head = right.heads[0];
    const light = (head ? lights.get(head.block.id) : "") ?? "";
    right.bars.slice(0, common).forEach((bar, at) => {
      const blockId = right.owners[at];
      if (blockId)
        left.shared.push({
          blockId,
          bar,
          at,
          head: lights.get(blockId) ?? light
        });
    });
    left.ending = common;
    left.tail = {
      bars: right.bars.slice(common),
      owners: right.owners.slice(common),
      head: light
    };
    left.passes = 2;
    out.push(left);
    index += 2;
  }
  return out;
}
function spansOfRow(owner, item) {
  if (item.tail) {
    const repeated = spanOf(`${owner}_s0`, item.bars, 1);
    repeated.opens = true;
    repeated.closes = item.passes;
    if (item.ending > 0) repeated.ending = { at: item.ending, pass: 1 };
    const tail2 = spanOf(`${owner}_e1`, item.tail.bars, 1);
    tail2.ending = { at: 0, pass: 2 };
    return [repeated, tail2];
  }
  const spans = spansOf(owner, item.bars, item.prints);
  const first = spans[0];
  const last = spans[spans.length - 1];
  if (item.opens && first) first.opens = true;
  if (item.closes > 1 && last) last.closes = item.closes;
  applyFormRepeatMarks(item, spans);
  return spans;
}
function applyFormRepeatMarks(item, spans) {
  const first = spans[0];
  const last = spans[spans.length - 1];
  if (item.heads.some((head) => head.block.repeatStart) && first) first.opens = true;
  if (item.heads.some((head) => head.block.repeatEnd) && last) {
    last.closes = last.closes && last.closes > 1 ? last.closes : 2;
  }
}
function nameBarWidth(spans) {
  const first = spans[0];
  if (!first || spans.length > 1 || first.lines.length > 1) return 1;
  return Math.min(1, (first.lines[0]?.length ?? BARS_PER_LINE) / BARS_PER_LINE);
}
function chordChart(song, form) {
  if (!song) {
    return {
      rows: [],
      drawn: /* @__PURE__ */ new Map(),
      bounds: /* @__PURE__ */ new Map(),
      named: /* @__PURE__ */ new Map(),
      endings: /* @__PURE__ */ new Set(),
      rall: null,
      final: null
    };
  }
  const written = [];
  for (const block of form.blocks) {
    const section = song.sections[block.originIndex];
    if (!section) continue;
    const bars = barNumbers(song, block).map((measure) => barOf(song, measure, block));
    const prints = bars.map(barPrint);
    const last = written[written.length - 1];
    const name = section.name.trim();
    if (last && headName(last) === name && !block.coda && samePrints(last.unit, prints)) {
      last.bars.push(...bars);
      last.owners.push(...bars.map(() => block.id));
      last.prints.push(...prints);
      const shown = last.heads[0];
      if (shown) {
        if (block.ds) shown.block.ds = true;
        if (block.toCoda) {
          shown.block.toCoda = true;
          if (block.toCodaAt != null) shown.block.toCodaAt = block.toCodaAt;
        }
      }
      continue;
    }
    written.push({
      heads: [{ block, section }],
      bars,
      owners: bars.map(() => block.id),
      prints,
      unit: prints,
      shared: [],
      passes: 1,
      opens: false,
      closes: 0,
      ending: 0,
      tail: null
    });
  }
  const drawn = /* @__PURE__ */ new Map();
  const bounds = /* @__PURE__ */ new Map();
  const named = /* @__PURE__ */ new Map();
  const endings = /* @__PURE__ */ new Set();
  const rows = foldEndings(foldRepeatedRuns(written)).map((item) => {
    const owner = item.heads[0]?.block.id ?? "";
    const spans = spansOfRow(owner, item);
    for (const span of spans) {
      if (!span.ending) continue;
      const bar = span.lines.flat()[span.ending.at];
      if (bar) endings.add(barKey(owner, bar.measure));
    }
    const sequence = [];
    for (const span of spans) {
      const unit = span.lines.flat();
      for (let index = 0; index < unit.length * span.plays; index += 1) {
        const shown = unit[index % unit.length];
        if (shown) sequence.push(shown);
      }
    }
    const point = (blockId, measure, shown) => {
      drawn.set(barKey(blockId, measure), { blockId: owner, measure: shown });
      const seen = bounds.get(blockId);
      bounds.set(blockId, {
        first: Math.min(seen?.first ?? measure, measure),
        last: Math.max(seen?.last ?? measure, measure)
      });
    };
    const titled = new Set(item.heads.map((head) => head.block.id));
    item.bars.forEach((bar, index) => {
      const owns = item.owners[index];
      const shown = sequence[index];
      if (!owns || !shown) return;
      point(owns, bar.measure, shown.measure);
      if (!titled.has(owns)) named.set(owns, owner);
    });
    for (const head of item.shared) {
      const shown = sequence[head.at];
      if (shown) point(head.blockId, head.bar.measure, shown.measure);
      if (!titled.has(head.blockId)) named.set(head.blockId, head.head || owner);
    }
    item.tail?.bars.forEach((bar, at) => {
      const blockId = item.tail?.owners[at];
      if (!blockId) return;
      point(blockId, bar.measure, bar.measure);
      if (!titled.has(blockId)) named.set(blockId, item.tail?.head || owner);
    });
    return { heads: item.heads, spans, width: nameBarWidth(spans) };
  });
  return {
    rows,
    drawn,
    bounds,
    named,
    endings,
    rall: cueOf(song, drawn, form, firstTempoChangeMeasure(song.tempoMap)),
    final: cueOf(song, drawn, form, finalMeasure(song))
  };
}
function cueOf(song, drawn, form, measure) {
  if (measure == null) return null;
  for (const [key, shown2] of drawn) {
    const cut = key.lastIndexOf("#");
    if (Number(key.slice(cut + 1)) !== measure) continue;
    return { shown: shown2, measure, blockId: key.slice(0, cut) };
  }
  const fromMap = (song.tempoMap ?? []).find((item) => item.measure === measure);
  const time = fromMap?.time ?? (Number.isFinite(song.finalAt) ? song.finalAt : void 0);
  if (time == null) return null;
  const pos = formAt(form, time + TIME_EPS4);
  if (!pos) return null;
  const originMeasure = timeToMusical(song.tempoMap ?? [], pos.originTime + TIME_EPS4).measure;
  const shown = drawn.get(barKey(pos.block.id, originMeasure));
  if (!shown) return null;
  return { shown, measure, blockId: pos.block.id };
}
function pinned(chart, blockId, measure) {
  const edge = chart.bounds.get(blockId);
  if (!edge) return measure;
  return Math.min(edge.last, Math.max(edge.first, measure));
}
function measureEndAt(map, time) {
  const point = tempoAt(map, time);
  const measure = timeToMusical(map, time).measure;
  return point.time + (measure - point.measure + 1) * secondsPerMeasure(point);
}
function showsNextChordMeasure(chart, here, next, playing, nextPlaying) {
  if (nextPlaying != null && nextPlaying !== playing) return true;
  if (here.blockId !== next.blockId) return true;
  if (next.measure < here.measure) return true;
  return chart.endings.has(barKey(next.blockId, next.measure));
}
function chordPlayhead(chart, form, time, map, chainNext = false) {
  const pos = formAt(form, time);
  if (!pos) return null;
  const measure = pinned(chart, pos.block.id, timeToMusical(map, pos.originTime).measure);
  const here = chart.drawn.get(barKey(pos.block.id, measure));
  if (!here) return null;
  const bar = measureSpan2(map, measure);
  const length = Math.max(TIME_EPS4, bar.end - bar.start);
  const phase = Math.min(1, Math.max(0, (pos.originTime - bar.start) / length));
  const playing = chart.named.get(pos.block.id) ?? pos.block.id;
  const onward = chart.drawn.get(barKey(pos.block.id, measure + 1));
  const visitEnd = pos.block.originStart + Math.max(TIME_EPS4, pos.visit.end - pos.visit.start);
  const onwardInVisit = Boolean(onward && bar.end < visitEnd - TIME_EPS4);
  let next = null;
  let nextPlaying = null;
  if (onwardInVisit && onward) {
    next = onward;
    nextPlaying = playing;
  } else if (!chainNext) {
    const played = measureEndAt(map, time);
    const after = played >= pos.visit.end - TIME_EPS4 || bar.end >= visitEnd - TIME_EPS4 ? pos.block.originEnd : measureEndAt(map, pos.originTime);
    const nextPos = formNextAt(form, time, after);
    if (nextPos) {
      const top = timeToMusical(map, nextPos.block.originStart + TIME_EPS4).measure;
      next = chart.drawn.get(barKey(nextPos.block.id, top)) ?? null;
      nextPlaying = chart.named.get(nextPos.block.id) ?? nextPos.block.id;
    }
  }
  const lastVisit = form.visits[form.visits.length - 1] === pos.visit;
  const showNext = Boolean(next) && (showsNextChordMeasure(chart, here, next, playing, nextPlaying) || lastVisit && (next.blockId !== here.blockId || next.measure !== here.measure));
  return {
    ...here,
    phase,
    playing,
    next: showNext ? next : null,
    nextPlaying: showNext ? nextPlaying : playing
  };
}

// apps/web/src/ui/master/DrumView.tsx
var import_react11 = __toESM(require_react(), 1);

// apps/web/src/store/follow-clock.ts
var import_react2 = __toESM(require_react(), 1);
var origin = { time: 0, at: 0, playing: false };
var listeners = /* @__PURE__ */ new Set();
var frame = 0;
function tick() {
  frame = 0;
  if (!origin.playing) return;
  const next = followClockTime();
  for (const listener of listeners) listener(next);
  if (listeners.size > 0) frame = requestAnimationFrame(tick);
}
function wakeFollowClock() {
  if (frame !== 0 || listeners.size === 0 || !origin.playing) return;
  frame = requestAnimationFrame(tick);
}
function setFollowClock(time, playing, at = performance.now()) {
  origin = { time, at, playing, source: void 0, lastSample: void 0, lockSource: false };
  wakeFollowClock();
}
function setFollowClockSource(source2, at = performance.now(), options) {
  const lock = options?.lock === true;
  const time = Math.max(0, source2());
  if (!lock && origin.playing && origin.source && origin.lastSample != null && Math.abs(time - origin.lastSample) < 0.25) {
    origin = { ...origin, source: source2, lockSource: false };
    return;
  }
  origin = { time, at, playing: true, source: source2, lastSample: time, lockSource: lock };
  wakeFollowClock();
}
function stopFollowClock(time = origin.time, at = performance.now()) {
  origin = { time, at, playing: false, source: void 0, lastSample: void 0, lockSource: false };
}
function followClockPlaying() {
  return origin.playing;
}
function followClockTime(now = performance.now()) {
  if (!origin.playing) return origin.time;
  if (origin.source) {
    const sampled = Math.max(0, origin.source());
    if (origin.lockSource) {
      origin = { ...origin, time: sampled, at: now, lastSample: sampled };
      return sampled;
    }
    const last = origin.lastSample;
    if (last == null || Math.abs(sampled - last) > 1e-4) {
      origin = { ...origin, time: sampled, at: now, lastSample: sampled };
      return sampled;
    }
    return Math.max(0, origin.time + (now - origin.at) / 1e3);
  }
  return Math.max(0, origin.time + (now - origin.at) / 1e3);
}
function followPacketTime(time, sent, now = Date.now()) {
  if (typeof sent !== "number" || !Number.isFinite(sent)) return time;
  const delay = (now - sent) / 1e3;
  if (delay <= 0 || delay > 0.25) return time;
  return time + delay;
}

// node_modules/zustand/esm/vanilla.mjs
var createStoreImpl = (createState) => {
  let state;
  const listeners2 = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
      listeners2.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const getInitialState = () => initialState;
  const subscribe = (listener) => {
    listeners2.add(listener);
    return () => listeners2.delete(listener);
  };
  const api = { setState, getState, getInitialState, subscribe };
  const initialState = state = createState(setState, getState, api);
  return api;
};
var createStore = ((createState) => createState ? createStoreImpl(createState) : createStoreImpl);

// node_modules/zustand/esm/react.mjs
var import_react3 = __toESM(require_react(), 1);
var identity = (arg) => arg;
function useStore(api, selector = identity) {
  const slice = import_react3.default.useSyncExternalStore(
    api.subscribe,
    import_react3.default.useCallback(() => selector(api.getState()), [api, selector]),
    import_react3.default.useCallback(() => selector(api.getInitialState()), [api, selector])
  );
  import_react3.default.useDebugValue(slice);
  return slice;
}
var createImpl = (createState) => {
  const api = createStore(createState);
  const useBoundStore = (selector) => useStore(api, selector);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
var create = ((createState) => createState ? createImpl(createState) : createImpl);

// packages/logger/src/index.ts
var LogCategory = {
  Audio: "AUDIO",
  Playback: "PLAYBACK",
  Network: "NETWORK",
  Database: "DATABASE",
  Client: "CLIENT",
  Sync: "SYNC",
  Import: "IMPORT",
  Reaper: "REAPER"
};
function formatEvent(event) {
  const payload = event.data ? ` ${JSON.stringify(event.data)}` : "";
  return `${event.ts} [${event.category}] ${event.event}${payload}`;
}
function consoleSink(event) {
  console.log(formatEvent(event));
}
function createLogger(sink = consoleSink) {
  const log = (category, event, data) => {
    sink({
      ts: (/* @__PURE__ */ new Date()).toISOString(),
      category,
      event,
      data
    });
  };
  return {
    log,
    audio: (event, data) => log(LogCategory.Audio, event, data),
    playback: (event, data) => log(LogCategory.Playback, event, data),
    network: (event, data) => log(LogCategory.Network, event, data),
    database: (event, data) => log(LogCategory.Database, event, data),
    client: (event, data) => log(LogCategory.Client, event, data),
    sync: (event, data) => log(LogCategory.Sync, event, data),
    import: (event, data) => log(LogCategory.Import, event, data),
    reaper: (event, data) => log(LogCategory.Reaper, event, data)
  };
}

// packages/audio/src/peak-meter-worklet.ts
var PEAK_METER_PROCESSOR_NAME = "dbk-peak-meter";
var PEAK_METER_PROCESSOR = `
class DbkPeakMeterProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.peaks = new Float32Array(12);
    this.holdUntil = new Float32Array(12);
    this.postAt = 0;
  }

  process(inputs, outputs) {
    const input = inputs[0];
    const frames = input && input[0] ? input[0].length : 128;
    const decay = Math.exp(-frames / sampleRate / 0.05);
    const now = currentTime;
    const count = this.peaks.length;
    for (let c = 0; c < count; c++) {
      let blockPeak = 0;
      const data = input && input[c];
      if (data) {
        for (let i = 0; i < data.length; i++) {
          const sample = data[i];
          const mag = sample < 0 ? -sample : sample;
          if (mag > blockPeak) blockPeak = mag;
        }
      }
      if (blockPeak >= this.peaks[c]) {
        this.peaks[c] = blockPeak;
        this.holdUntil[c] = now + 0.04;
      } else if (now >= this.holdUntil[c]) {
        this.peaks[c] *= decay;
      }
    }
    const output = outputs[0];
    if (output) {
      for (let i = 0; i < output.length; i++) {
        if (output[i]) output[i].fill(0);
      }
    }
    // process() runs every 128 frames \u2014 about 344 times a second. Posting each block
    // floods the main thread and allocates every time. 25ms stays inside the 40ms peak
    // hold above, so no transient is lost, and the meters only repaint per frame anyway.
    if (now - this.postAt >= 0.025) {
      this.postAt = now;
      this.port.postMessage(Array.from(this.peaks));
    }
    return true;
  }
}

registerProcessor("${PEAK_METER_PROCESSOR_NAME}", DbkPeakMeterProcessor);
`;

// packages/audio/src/flac-slice.ts
var SYNC_HIGH = 255;
var SYNC_LOW_MASK = 254;
var SYNC_LOW = 248;
var STREAMINFO_SIZE = 34;
var CRC8 = new Uint8Array(256);
for (let i2 = 0; i2 < 256; i2 += 1) {
  let c = i2;
  for (let bit = 0; bit < 8; bit += 1) {
    c = c & 128 ? (c << 1 ^ 7) & 255 : c << 1 & 255;
  }
  CRC8[i2] = c;
}
function crc8(data, from, to) {
  let c = 0;
  for (let i2 = from; i2 < to; i2 += 1) c = CRC8[c ^ data[i2]];
  return c;
}
function readCodedNumber(data, at) {
  const first = data[at];
  if (first === void 0) return null;
  if (first < 128) return { value: first, next: at + 1 };
  let width = 0;
  while (first & 128 >> width) width += 1;
  if (width < 2 || width > 7) return null;
  let value = first & 127 >> width;
  let p = at + 1;
  for (let i2 = 1; i2 < width; i2 += 1, p += 1) {
    const byte = data[p];
    if (byte === void 0 || (byte & 192) !== 128) return null;
    value = value * 64 + (byte & 63);
  }
  return { value, next: p };
}
function readFrameHeader(data, at) {
  if (at + 5 > data.length) return null;
  if (data[at] !== SYNC_HIGH || (data[at + 1] & SYNC_LOW_MASK) !== SYNC_LOW) return null;
  const blockSizeCode = data[at + 2] >> 4;
  const sampleRateCode = data[at + 2] & 15;
  if (blockSizeCode === 0 || sampleRateCode === 15) return null;
  const channelCode = data[at + 3] >> 4;
  const sampleSizeCode = data[at + 3] >> 1 & 7;
  if (channelCode > 10 || sampleSizeCode === 3 || sampleSizeCode === 7) return null;
  const coded = readCodedNumber(data, at + 4);
  if (!coded) return null;
  let p = coded.next;
  if (blockSizeCode === 6) p += 1;
  else if (blockSizeCode === 7) p += 2;
  if (sampleRateCode === 12) p += 1;
  else if (sampleRateCode === 13 || sampleRateCode === 14) p += 2;
  if (p >= data.length || crc8(data, at, p) !== data[p]) return null;
  return { length: p + 1 - at, number: coded.value };
}
function readStreamInfo(block) {
  if (block.length < STREAMINFO_SIZE) return null;
  const view = new DataView(block.buffer, block.byteOffset, block.byteLength);
  const blockSize = view.getUint16(2);
  const minBlockSize = view.getUint16(0);
  if (blockSize === 0 || blockSize !== minBlockSize) return null;
  const high = view.getUint32(10);
  const low = view.getUint32(14);
  const sampleRate = high >>> 12;
  const channels = (high >>> 9 & 7) + 1;
  const bitsPerSample = (high >>> 4 & 31) + 1;
  const totalSamples = (high & 15) * 2 ** 32 + low;
  if (sampleRate === 0) return null;
  return {
    sampleRate,
    channels,
    bitsPerSample,
    blockSize,
    totalSamples,
    duration: totalSamples / sampleRate
  };
}
var SAMPLE_COUNT_AT = 8 + 13;
function windowSamples(file, from, to) {
  if (to <= from) return 0;
  const through = Math.min(to * file.info.blockSize, file.info.totalSamples);
  return Math.max(0, through - from * file.info.blockSize);
}
function writeSampleCount(header, samples) {
  const high = Math.floor(samples / 2 ** 32) & 15;
  const low = samples % 2 ** 32;
  header[SAMPLE_COUNT_AT] = header[SAMPLE_COUNT_AT] & 240 | high;
  header[SAMPLE_COUNT_AT + 1] = Math.floor(low / 2 ** 24) & 255;
  header[SAMPLE_COUNT_AT + 2] = Math.floor(low / 2 ** 16) & 255;
  header[SAMPLE_COUNT_AT + 3] = Math.floor(low / 2 ** 8) & 255;
  header[SAMPLE_COUNT_AT + 4] = low & 255;
}
function buildHeader(streamInfo) {
  const header = new Uint8Array(8 + STREAMINFO_SIZE);
  header.set([102, 76, 97, 67], 0);
  header[4] = 128;
  header[5] = 0;
  header[6] = 0;
  header[7] = STREAMINFO_SIZE;
  header.set(streamInfo.subarray(0, STREAMINFO_SIZE), 8);
  header[SAMPLE_COUNT_AT] &= 240;
  for (let i2 = SAMPLE_COUNT_AT + 1; i2 < SAMPLE_COUNT_AT + 5; i2 += 1) header[i2] = 0;
  return header;
}
function indexFrames(bytes2, audioStart, expected) {
  const offsets = new Uint32Array(expected + 1);
  let count = 0;
  let p = audioStart;
  while (p < bytes2.length - 4) {
    if (bytes2[p] === SYNC_HIGH && (bytes2[p + 1] & SYNC_LOW_MASK) === SYNC_LOW) {
      const header = readFrameHeader(bytes2, p);
      if (header && header.number === count) {
        if (count >= expected) return null;
        offsets[count] = p;
        count += 1;
        p += header.length;
        continue;
      }
    }
    p += 1;
  }
  if (count !== expected) return null;
  offsets[count] = bytes2.length;
  return offsets;
}
function parseFlac(data) {
  const bytes2 = data instanceof Uint8Array ? data : new Uint8Array(data);
  if (bytes2.length < 8 + STREAMINFO_SIZE) return null;
  if (bytes2[0] !== 102 || bytes2[1] !== 76 || bytes2[2] !== 97 || bytes2[3] !== 67) return null;
  let p = 4;
  let streamInfo = null;
  for (; ; ) {
    if (p + 4 > bytes2.length) return null;
    const last = bytes2[p] >> 7;
    const type = bytes2[p] & 127;
    const length = bytes2[p + 1] << 16 | bytes2[p + 2] << 8 | bytes2[p + 3];
    if (type === 0) streamInfo = bytes2.subarray(p + 4, p + 4 + length);
    p += 4 + length;
    if (last) break;
  }
  if (!streamInfo || p > bytes2.length) return null;
  const info = readStreamInfo(streamInfo);
  if (!info || info.totalSamples === 0) return null;
  const frameCount = Math.ceil(info.totalSamples / info.blockSize);
  const frameOffsets = indexFrames(bytes2, p, frameCount);
  if (!frameOffsets) return null;
  return { info, frameOffsets, frameCount, bytes: bytes2, header: buildHeader(streamInfo) };
}
function frameAtTime(file, time) {
  const sample = Math.max(0, time) * file.info.sampleRate;
  const frame3 = Math.floor(sample / file.info.blockSize);
  return Math.min(frame3, file.frameCount - 1);
}
function frameStartTime(file, frame3) {
  return frame3 * file.info.blockSize / file.info.sampleRate;
}
function sliceFlac(file, from, to) {
  const first = Math.max(0, Math.min(from, file.frameCount));
  const last = Math.max(first, Math.min(to, file.frameCount));
  const start = file.frameOffsets[first];
  const end = file.frameOffsets[last];
  const out = new Uint8Array(file.header.length + (end - start));
  out.set(file.header, 0);
  writeSampleCount(out, windowSamples(file, first, last));
  out.set(file.bytes.subarray(start, end), file.header.length);
  return out;
}

// packages/audio/src/web-audio-engine.ts
var WINDOW_SECONDS = 15;
var WINDOW_LEAD_SECONDS = 7;
function dbToGain(db3) {
  return Math.pow(10, db3 / 20);
}
function isFlacFile(value) {
  return typeof value === "object" && value !== null && "frameOffsets" in value;
}
var LIBRARY_SAMPLE_RATE = 44100;
var MAX_OUTPUT_LATENCY = 0.5;
function createContext(options = {}) {
  try {
    return new AudioContext({ ...options, sampleRate: LIBRARY_SAMPLE_RATE });
  } catch {
    return new AudioContext(options);
  }
}
function destinationChannelCount(dest) {
  const max2 = Math.max(1, dest.maxChannelCount || dest.channelCount || 2);
  try {
    dest.channelCountMode = "explicit";
    dest.channelInterpretation = "discrete";
    if (dest.channelCount !== max2) dest.channelCount = max2;
  } catch {
  }
  return Math.max(1, dest.channelCount || 2);
}
function outputRoutingPlan(mode, maxChannelCount) {
  if (mode === 2) {
    return maxChannelCount >= 3 ? { channels: 3, mainChannels: [0, 1], cueChannels: [2], mainMono: false } : null;
  }
  if (maxChannelCount < 2) return null;
  if (mode === 3) {
    return { channels: 2, mainChannels: [0], cueChannels: [1], mainMono: true };
  }
  return { channels: 2, mainChannels: [0, 1], cueChannels: [0, 1], mainMono: false };
}
var WebAudioDeck = class {
  constructor(id, engine2) {
    __publicField(this, "id");
    __publicField(this, "engine");
    __publicField(this, "listeners", {
      click_eof: /* @__PURE__ */ new Set(),
      longest_eof: /* @__PURE__ */ new Set(),
      error: /* @__PURE__ */ new Set()
    });
    __publicField(this, "song", null);
    __publicField(this, "tracks", []);
    __publicField(this, "sources", []);
    __publicField(this, "startedAt", null);
    __publicField(this, "pausedAt", null);
    __publicField(this, "playing", false);
    __publicField(this, "clickDuration", 0);
    __publicField(this, "longestDuration", 0);
    __publicField(this, "clickFired", false);
    __publicField(this, "longestFired", false);
    /** Song time this run started from, so a mid-window start keeps its offset. */
    __publicField(this, "playFrom", 0);
    __publicField(this, "nextWindow", 0);
    /** Bumped whenever playback is torn down, to drop decodes that are no longer wanted. */
    __publicField(this, "epoch", 0);
    /** While the app is in the background, queue the rest of the song. Timers stop there. */
    __publicField(this, "throughEnd", false);
    __publicField(this, "pending", /* @__PURE__ */ new Map());
    /**
     * A route change or an alert can end the scheduled buffers while the deck still says
     * it is playing. After a short silence, start the song again from the position the
     * clock already has, so the show does not stay mute.
     */
    __publicField(this, "silentSince", null);
    this.id = id;
    this.engine = engine2;
  }
  applyMixer() {
    this.applyMix();
  }
  hasLiveSources() {
    return this.sources.length > 0 || this.playing && this.pending.size > 0;
  }
  get loadedSongId() {
    return this.song?.id ?? null;
  }
  get isLoaded() {
    return this.song !== null;
  }
  get isPlaying() {
    if (!this.playing || this.startedAt === null) return false;
    return this.engine.getContextTime() >= this.startedAt;
  }
  get isArmed() {
    return this.playing && this.startedAt !== null;
  }
  get clickEndsAt() {
    if (this.startedAt === null) return null;
    const cue = playNextCueSeconds(this.song, this.clickDuration);
    if (cue === null) return null;
    return this.startedAt + cue;
  }
  get longestEndsAt() {
    if (this.startedAt === null || this.longestDuration <= 0) return null;
    return this.startedAt + this.longestDuration;
  }
  async load(song, files) {
    this.stopSources();
    this.releaseTracks();
    this.song = song;
    const ctx = this.engine.context;
    this.tracks = files.tracks.map((track) => {
      const payload = track.payload;
      const flac = isFlacFile(payload) ? payload : null;
      const buffer = flac ? null : payload ?? null;
      if (!flac && !buffer) {
        throw new Error("Song cannot play: Audio is not decoded.");
      }
      const gain = ctx.createGain();
      const panner = ctx.createStereoPanner();
      gain.connect(panner);
      panner.connect(
        this.engine.mixerInput(track.asset.bus ?? "MAIN", mixerStemFromPath(track.asset.path))
      );
      return {
        id: track.id,
        asset: track.asset,
        duration: flac ? flac.info.duration : buffer?.duration ?? 0,
        buffer,
        flac,
        ready: /* @__PURE__ */ new Map(),
        gain,
        panner,
        muted: false,
        solo: false,
        gainDb: 0
      };
    });
    this.applyMix();
    const click = this.tracks.find((track) => track.asset.audioRole === "click");
    this.clickDuration = click?.duration ?? song.clickDuration ?? 0;
    this.longestDuration = this.tracks.reduce((max2, track) => Math.max(max2, track.duration), 0);
    await this.decodeWindow(0);
    this.startedAt = null;
    this.pausedAt = null;
    this.playing = false;
    this.clickFired = false;
    this.longestFired = false;
    this.engine.logger?.audio("deck_loaded", {
      deck: this.id,
      songId: song.id,
      clickDuration: this.clickDuration,
      longestDuration: this.longestDuration
    });
  }
  updateSong(song) {
    if (!this.song || this.song.id !== song.id) return;
    this.song = song;
    this.applyMix();
  }
  play(atContextTime) {
    const ctx = this.engine.context;
    const when = atContextTime ?? ctx.currentTime;
    const offset = this.pausedAt ?? 0;
    this.stopSources();
    this.startedAt = when - offset;
    this.pausedAt = null;
    this.playing = true;
    this.clickFired = false;
    this.longestFired = false;
    this.playFrom = offset;
    this.nextWindow = Math.floor(offset / WINDOW_SECONDS);
    this.throughEnd = typeof document !== "undefined" && document.visibilityState === "hidden";
    for (const track of this.tracks) {
      if (!track.buffer) continue;
      const source2 = ctx.createBufferSource();
      source2.buffer = track.buffer;
      source2.connect(track.gain);
      source2.start(when, offset);
      this.sources.push(source2);
    }
    this.ensureWindows();
    this.engine.syncTransportGate();
  }
  pause() {
    if (this.playing) this.pausedAt = this.getPosition();
    this.playing = false;
    this.stopSources();
    this.prefetchAt(this.pausedAt ?? 0);
    this.engine.syncTransportGate();
  }
  stop() {
    this.playing = false;
    this.startedAt = null;
    this.pausedAt = null;
    this.clickFired = false;
    this.longestFired = false;
    this.stopSources();
    this.engine.syncTransportGate();
  }
  seek(time) {
    const t = Math.max(0, time);
    if (this.playing) {
      this.pausedAt = t;
      this.play();
    } else {
      this.pausedAt = t;
      this.prefetchAt(t);
    }
  }
  setTrackGain(trackId, gainDb) {
    const track = this.tracks.find((item) => item.id === trackId);
    if (!track) return;
    track.gainDb = gainDb;
    this.applyMix();
  }
  setMute(trackId, mute) {
    const track = this.tracks.find((item) => item.id === trackId);
    if (!track) return;
    track.muted = mute;
    this.applyMix();
  }
  setSolo(trackId, solo) {
    const track = this.tracks.find((item) => item.id === trackId);
    if (!track) return;
    track.solo = solo;
    this.applyMix();
  }
  setPan(trackId, pan) {
    const track = this.tracks.find((item) => item.id === trackId);
    if (!track) return;
    track.panner.pan.value = Math.max(-1, Math.min(1, pan));
  }
  getPosition() {
    if (this.pausedAt !== null && !this.playing) return this.pausedAt;
    if (this.startedAt === null) return 0;
    return Math.max(0, this.engine.getContextTime() - this.startedAt);
  }
  on(event, cb) {
    const set = this.listeners[event];
    if (!set) return () => void 0;
    set.add(cb);
    return () => {
      set.delete(cb);
    };
  }
  unload() {
    this.stop();
    this.releaseTracks();
    this.song = null;
  }
  /**
   * Loading a song replaces the track list, so the previous gain/panner pairs have to be
   * disconnected here. Left attached they stay wired into the mixer graph for the rest of
   * the show — two orphan nodes per stem, every song change.
   */
  releaseTracks() {
    for (const track of this.tracks) {
      track.gain.disconnect();
      track.panner.disconnect();
      track.ready.clear();
    }
    this.pending.clear();
    this.tracks = [];
  }
  /** Longest windowed track, in windows. */
  windowCount() {
    let longest = 0;
    for (const track of this.tracks) {
      if (track.flac) longest = Math.max(longest, track.duration);
    }
    return Math.ceil(longest / WINDOW_SECONDS);
  }
  /** Queue every remaining window. The background has no timers to keep doing this. */
  armThroughEnd() {
    this.throughEnd = true;
    this.ensureWindows();
  }
  /**
   * Arms windows so the next one is always scheduled before the playhead reaches it.
   * Driven from `poll`, which the engine calls while the transport runs.
   */
  ensureWindows() {
    if (!this.playing || this.startedAt === null) return;
    const windows = this.windowCount();
    const position = this.getPosition();
    const lead = this.throughEnd ? Number.POSITIVE_INFINITY : WINDOW_LEAD_SECONDS;
    while (this.nextWindow < windows && this.nextWindow * WINDOW_SECONDS - position <= lead) {
      const index = this.nextWindow;
      this.nextWindow += 1;
      this.scheduleWindow(index);
    }
  }
  scheduleWindow(index, attempt = 0) {
    const songStart = Math.max(index * WINDOW_SECONDS, this.playFrom);
    const tracks = this.tracks.filter((track) => track.flac && track.duration > songStart);
    if (tracks.length === 0) return;
    if (tracks.every((track) => track.ready.has(index))) {
      for (const track of tracks) this.startWindow(track, index, songStart);
      return;
    }
    const epoch = this.epoch;
    void this.decodeWindow(index).then(() => {
      if (epoch !== this.epoch || !this.playing) return;
      for (const track of tracks) this.startWindow(track, index, songStart);
    }).catch(() => {
      if (epoch !== this.epoch || !this.playing) return;
      if (attempt < 1) {
        for (const track of this.tracks) track.ready.delete(index);
        this.scheduleWindow(index, attempt + 1);
        return;
      }
      for (const cb of this.listeners.error) cb({ message: "Song cannot play: Audio failed." });
    });
  }
  /**
   * Decodes window `index` for every track that plays in it. Windows are cut on frame
   * boundaries, so a decoded window starts at or just before the song time it covers.
   */
  decodeWindow(index) {
    const running = this.pending.get(index);
    if (running) return running;
    const ctx = this.engine.context;
    const from = index * WINDOW_SECONDS;
    const run = Promise.all(
      this.tracks.map(async (track) => {
        const file = track.flac;
        if (!file || track.ready.has(index) || track.duration <= from) return;
        const to = Math.min(from + WINDOW_SECONDS, track.duration);
        const slice = sliceFlac(
          file,
          frameAtTime(file, from),
          Math.min(frameAtTime(file, to) + 1, file.frameCount)
        );
        const decoded = await ctx.decodeAudioData(slice.buffer);
        track.ready.set(index, decoded);
      })
    ).then(() => void 0).finally(() => {
      this.pending.delete(index);
    });
    this.pending.set(index, run);
    return run;
  }
  /** Decodes the window holding `time`, so playing from there does not have to wait. */
  prefetchAt(time) {
    const index = Math.floor(Math.max(0, time) / WINDOW_SECONDS);
    if (!this.tracks.some((track) => track.flac)) return;
    void this.decodeWindow(index).catch(() => void 0);
  }
  /**
   * Starts one window at the context time its song position maps to. Every window and
   * every stem is placed against `startedAt` rather than against the window before it, so
   * they stay locked to the same clock however long a decode took.
   */
  startWindow(track, index, songStart) {
    const file = track.flac;
    const buffer = track.ready.get(index);
    if (!file || !buffer || this.startedAt === null) return;
    if (index !== 0) track.ready.delete(index);
    const ctx = this.engine.context;
    const at = this.startedAt + songStart;
    const end = Math.min((index + 1) * WINDOW_SECONDS, track.duration);
    const late = Math.max(0, ctx.currentTime - at);
    const start = songStart + late;
    if (start >= end) return;
    const bufferStart = frameStartTime(file, frameAtTime(file, index * WINDOW_SECONDS));
    const when = Math.max(ctx.currentTime, at);
    const source2 = ctx.createBufferSource();
    source2.buffer = buffer;
    source2.connect(track.gain);
    source2.start(when, start - bufferStart, end - start);
    source2.onended = () => {
      source2.disconnect();
      const found = this.sources.indexOf(source2);
      if (found >= 0) this.sources.splice(found, 1);
    };
    this.sources.push(source2);
    this.engine.syncTransportGate();
  }
  poll(now) {
    if (!this.playing || this.startedAt === null) return;
    this.ensureWindows();
    if (now < this.startedAt) return;
    const clickAt = this.clickEndsAt;
    if (clickAt !== null && !this.clickFired && now + 1e-9 >= clickAt) {
      this.clickFired = true;
      for (const cb of this.listeners.click_eof) cb();
    }
    const longestAt = this.longestEndsAt;
    if (longestAt !== null && !this.longestFired && now + 1e-9 >= longestAt) {
      this.longestFired = true;
      this.playing = false;
      this.stopSources();
      this.engine.syncTransportGate();
      for (const cb of this.listeners.longest_eof) cb();
    }
    this.recoverIfSilent(now);
  }
  recoverIfSilent(now) {
    if (!this.playing || this.startedAt === null || now < this.startedAt) {
      this.silentSince = null;
      return;
    }
    if (this.engine.context.state !== "running") return;
    if (this.sources.length > 0 || this.pending.size > 0 || this.tracks.length === 0) {
      this.silentSince = null;
      return;
    }
    const position = this.getPosition();
    if (this.longestDuration > 0 && position >= this.longestDuration - 0.05) {
      this.silentSince = null;
      return;
    }
    if (this.silentSince === null) {
      this.silentSince = now;
      return;
    }
    if (now - this.silentSince < 0.3) return;
    this.silentSince = null;
    this.engine.logger?.audio("deck_restarted", {
      deck: this.id,
      songId: this.song?.id,
      position
    });
    this.pausedAt = position;
    this.play();
  }
  applyMix() {
    const songId = this.song?.id;
    const songBank = songId ? this.engine.songMix(songId) : emptyMixerBank();
    const playMode = parseSongInfo(this.song?.info).playMode;
    for (const track of this.tracks) {
      const stem = mixerStemFromPath(track.asset.path);
      const songStem = stem ? songBank[stem] : emptyStrip();
      const silenced = songBank.Main.muted || (stem ? songStem.muted : false) || clickOnlyMixSilences(track.asset, playMode);
      const db3 = songBank.Main.gainDb + (stem ? songStem.gainDb : 0);
      track.gain.gain.value = silenced ? 0 : dbToGain(db3);
    }
  }
  stopSources() {
    this.epoch += 1;
    for (const source2 of this.sources) {
      source2.onended = null;
      try {
        source2.stop();
      } catch {
      }
      try {
        source2.disconnect();
      } catch {
      }
    }
    this.sources = [];
  }
};
var WebAudioEngine = class {
  constructor(logger2) {
    __publicField(this, "logger");
    __publicField(this, "ctx", null);
    __publicField(this, "mainGain", null);
    __publicField(this, "cueGain", null);
    __publicField(this, "mixerMainGain", null);
    __publicField(this, "outputGate", null);
    __publicField(this, "stemGains", /* @__PURE__ */ new Map());
    __publicField(this, "meterPeaks", emptyMixerLevels());
    __publicField(this, "decks", /* @__PURE__ */ new Map());
    __publicField(this, "songBanks", /* @__PURE__ */ new Map());
    __publicField(this, "busBank", emptyMixerBank());
    __publicField(this, "outputChannels", 2);
    __publicField(this, "outputDeviceId", "default");
    __publicField(this, "routingMode", 1);
    __publicField(this, "outputMerger", null);
    __publicField(this, "mainSplitter", null);
    __publicField(this, "mainMono", null);
    __publicField(this, "cueMono", null);
    __publicField(this, "externalCueActive", false);
    __publicField(this, "routing", {
      MAIN: ["default"],
      CUE: ["default"]
    });
    /**
     * iOS parks the context as "interrupted" for an alert or a route change.
     * Nothing else notices: the transport keeps reporting Playing while currentTime stops
     * advancing. Nothing in this app suspends the context deliberately, so any non-running
     * state here is a fault to recover from. `poll` keeps trying, because one `resume()`
     * can be refused while the session is still down.
     */
    __publicField(this, "resumeInFlight", false);
    __publicField(this, "outputLatencyHint", 0);
    this.logger = logger2;
    if (typeof document === "undefined") return;
    const arm = () => {
      for (const deck of this.decks.values()) deck.armThroughEnd();
    };
    globalThis.__dbkContinueAudio = arm;
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") arm();
    });
    document.addEventListener("pagehide", arm);
  }
  get context() {
    if (!this.ctx) {
      throw new Error("Audio engine is not initialized.");
    }
    return this.ctx;
  }
  busNode(bus) {
    const node = bus === "CUE" ? this.cueGain : this.mainGain;
    if (!node) throw new Error("Audio engine is not initialized.");
    return node;
  }
  mixerInput(_bus, stem) {
    if (!this.mixerMainGain) throw new Error("Audio engine is not initialized.");
    if (stem) {
      const node = this.stemGains.get(stem);
      if (node) return node;
    }
    return this.mixerMainGain;
  }
  getBusLevels() {
    return { ...this.meterPeaks };
  }
  songMix(songId) {
    return this.songBanks.get(songId) ?? emptyMixerBank();
  }
  busMix() {
    return this.busBank;
  }
  setSongStrip(songId, channel, patch) {
    const current = this.songMix(songId);
    const next = { ...current, [channel]: { ...current[channel], ...patch } };
    this.songBanks.set(songId, next);
    this.refreshMix();
    return next;
  }
  setBusStrip(channel, patch) {
    this.busBank = { ...this.busBank, [channel]: { ...this.busBank[channel], ...patch } };
    this.refreshMix();
    return this.busBank;
  }
  replaceSongMix(songId, bank) {
    this.songBanks.set(songId, bank);
    this.refreshMix();
  }
  replaceBusMix(bank) {
    this.busBank = bank;
    this.refreshMix();
  }
  refreshMix() {
    this.applyBusGains();
    for (const deck of this.decks.values()) deck.applyMixer();
  }
  applyBusGains() {
    if (!this.mixerMainGain) return;
    const anyBusSolo = MIXER_STEMS.some((channel) => this.busBank[channel].solo);
    const main = this.busBank.Main;
    for (const stem of MIXER_STEMS) {
      const node = this.stemGains.get(stem);
      if (!node) continue;
      const strip = this.busBank[stem];
      const silenced = strip.muted || main.muted || anyBusSolo && !strip.solo;
      node.gain.value = silenced ? 0 : dbToGain(strip.gainDb + main.gainDb);
    }
    this.mixerMainGain.gain.value = main.muted || anyBusSolo ? 0 : dbToGain(main.gainDb);
  }
  async attachPeakMeter(ctx, merger) {
    const blob = new Blob([PEAK_METER_PROCESSOR], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    try {
      await ctx.audioWorklet.addModule(url);
    } finally {
      URL.revokeObjectURL(url);
    }
    const node = new AudioWorkletNode(ctx, PEAK_METER_PROCESSOR_NAME, {
      numberOfInputs: 1,
      numberOfOutputs: 1,
      outputChannelCount: [1],
      channelCount: MIXER_CHANNELS.length,
      channelCountMode: "explicit",
      channelInterpretation: "discrete"
    });
    node.port.onmessage = (event) => {
      const peaks = event.data;
      MIXER_CHANNELS.forEach((channel, index) => {
        this.meterPeaks[channel] = peaks[index] ?? 0;
      });
    };
    const silent = ctx.createGain();
    silent.gain.value = 0;
    merger.connect(node);
    node.connect(silent);
    silent.connect(this.outputGate ?? ctx.destination);
  }
  syncTransportGate() {
    if (!this.outputGate) return;
    const live = [...this.decks.values()].some((deck) => deck.hasLiveSources());
    this.outputGate.gain.value = live || this.externalCueActive ? 1 : 0;
  }
  prime() {
    if (!this.ctx) {
      this.ctx = createContext();
      this.unlockNow(this.ctx);
      this.watchContextState(this.ctx);
      this.buildGraph(this.ctx);
      this.logger?.audio("engine_created", { sampleRate: this.ctx.sampleRate, state: this.ctx.state });
    } else {
      this.unlockNow(this.ctx);
    }
    return this.ctx;
  }
  async init() {
    this.prime();
    await this.resumeContext();
  }
  buildGraph(ctx) {
    this.mainGain = ctx.createGain();
    this.cueGain = ctx.createGain();
    this.outputGate = ctx.createGain();
    this.outputGate.gain.value = 0;
    this.mixerMainGain = ctx.createGain();
    const meterSum = ctx.createGain();
    const merger = ctx.createChannelMerger(MIXER_CHANNELS.length);
    this.mixerMainGain.connect(this.mainGain);
    this.mixerMainGain.connect(meterSum);
    MIXER_STEMS.forEach((stem, index) => {
      const gain = ctx.createGain();
      gain.connect(meterSum);
      gain.connect(stem === "Click" ? this.cueGain : this.mainGain);
      gain.connect(merger, 0, index);
      this.stemGains.set(stem, gain);
    });
    meterSum.connect(merger, 0, MIXER_STEMS.length);
    this.applyBusGains();
    this.outputGate.connect(ctx.destination);
    this.applyRoutingGraph(this.routingMode);
    this.syncTransportGate();
    void this.attachPeakMeter(ctx, merger).catch((error) => {
      this.logger?.audio("meter_worklet_failed", { error: String(error) });
    });
  }
  availableOutputChannels() {
    if (!this.ctx) return 2;
    return destinationChannelCount(this.ctx.destination);
  }
  applyRoutingGraph(mode) {
    if (!this.ctx || !this.mainGain || !this.cueGain || !this.outputGate) return;
    const plan = outputRoutingPlan(mode, this.availableOutputChannels());
    if (!plan) {
      throw new Error(`Routing mode ${mode} is not supported by this soundcard.`);
    }
    this.mainGain.disconnect();
    this.cueGain.disconnect();
    this.outputMerger?.disconnect();
    this.mainSplitter?.disconnect();
    this.mainMono?.disconnect();
    this.cueMono?.disconnect();
    this.outputMerger = this.ctx.createChannelMerger(plan.channels);
    this.mainSplitter = this.ctx.createChannelSplitter(2);
    this.mainMono = this.ctx.createGain();
    this.mainMono.channelCount = 1;
    this.mainMono.channelCountMode = "explicit";
    this.mainMono.channelInterpretation = "speakers";
    this.cueMono = this.ctx.createGain();
    this.cueMono.channelCount = 1;
    this.cueMono.channelCountMode = "explicit";
    this.cueMono.channelInterpretation = "speakers";
    if (plan.mainMono) {
      this.mainGain.connect(this.mainMono);
      this.mainMono.connect(this.outputMerger, 0, plan.mainChannels[0]);
    } else {
      this.mainGain.connect(this.mainSplitter);
      plan.mainChannels.forEach((channel, sourceChannel) => {
        this.mainSplitter?.connect(this.outputMerger, sourceChannel, channel);
      });
    }
    this.cueGain.connect(this.cueMono);
    for (const channel of plan.cueChannels) this.cueMono.connect(this.outputMerger, 0, channel);
    this.outputGate.channelCount = plan.channels;
    this.outputGate.channelCountMode = "explicit";
    this.outputGate.channelInterpretation = "discrete";
    this.outputMerger.connect(this.outputGate);
    try {
      this.ctx.destination.channelCount = plan.channels;
      this.ctx.destination.channelCountMode = "explicit";
      this.ctx.destination.channelInterpretation = "discrete";
    } catch (error) {
      this.logger?.audio("output_channel_config_failed", { error: String(error) });
    }
    this.routingMode = mode;
    this.outputChannels = this.availableOutputChannels();
    this.logger?.audio("output_routing_changed", {
      deviceId: this.outputDeviceId,
      mode,
      availableChannels: this.outputChannels,
      mainOutputs: plan.mainChannels.map((channel) => channel + 1),
      cueOutputs: plan.cueChannels.map((channel) => channel + 1)
    });
  }
  unlockNow(ctx) {
    if (ctx.state !== "running") {
      void ctx.resume();
    }
    try {
      const buffer = ctx.createBuffer(1, 1, ctx.sampleRate || 44100);
      const source2 = ctx.createBufferSource();
      source2.buffer = buffer;
      source2.connect(ctx.destination);
      source2.start(0);
    } catch (error) {
      this.logger?.audio("engine_unlock_failed", { error: String(error), state: ctx.state });
    }
  }
  watchContextState(ctx) {
    ctx.addEventListener("statechange", () => {
      this.logger?.audio("engine_state_changed", { state: ctx.state });
      if (ctx !== this.ctx || ctx.state === "running" || ctx.state === "closed") return;
      void this.resumeContext();
    });
  }
  async resumeContext() {
    const ctx = this.ctx;
    if (!ctx || ctx.state === "running" || ctx.state === "closed" || this.resumeInFlight) return;
    this.resumeInFlight = true;
    try {
      await ctx.resume();
    } catch (error) {
      this.logger?.audio("engine_resume_failed", { error: String(error), state: ctx.state });
      return;
    } finally {
      this.resumeInFlight = false;
    }
    if (ctx.state === "running") {
      this.logger?.audio("engine_resumed", {});
    }
  }
  async listOutputs() {
    if (typeof navigator === "undefined" || !navigator.mediaDevices?.enumerateDevices) {
      return [{ id: "default", label: "System Default", channels: this.outputChannels }];
    }
    const devices = (await navigator.mediaDevices.enumerateDevices()).filter(
      (device) => device.kind === "audiooutput"
    );
    if (devices.length === 0) {
      return [{ id: "default", label: "System Default", channels: this.outputChannels }];
    }
    return devices.map((device, index) => ({
      id: device.deviceId,
      label: device.label || `Soundcard ${index + 1}`,
      channels: device.deviceId === this.outputDeviceId ? this.outputChannels : 0
    }));
  }
  async selectOutput(deviceId, opts) {
    await this.init();
    await this.bindOutputDevice(deviceId, opts?.recreateIfStereo);
    if (!outputRoutingPlan(this.routingMode, this.outputChannels)) this.routingMode = 1;
    this.applyRoutingGraph(this.routingMode);
    return { channels: this.outputChannels, routingMode: this.routingMode };
  }
  refreshOutputChannels() {
    this.outputChannels = this.availableOutputChannels();
    return this.outputChannels;
  }
  async bindOutputDevice(deviceId, recreateIfStereo) {
    const sinkId = deviceId === "default" ? "" : deviceId;
    const context = this.ctx;
    if (!context?.setSinkId && sinkId) {
      throw new Error("This browser cannot select a different soundcard.");
    }
    if (context?.setSinkId) {
      const alreadyOnSink = (context.sinkId ?? "") === sinkId;
      await context.setSinkId(sinkId);
      this.outputDeviceId = deviceId;
      this.outputChannels = this.availableOutputChannels();
      if (this.outputChannels >= 3) return;
      if (alreadyOnSink && recreateIfStereo !== true) return;
    } else {
      this.outputDeviceId = deviceId;
      this.outputChannels = this.availableOutputChannels();
      return;
    }
    await this.recreateContext(sinkId);
    this.outputDeviceId = deviceId;
    this.outputChannels = this.availableOutputChannels();
  }
  async recreateContext(sinkId) {
    for (const deck of this.decks.values()) deck.unload();
    const previous = this.ctx;
    this.ctx = null;
    this.mainGain = null;
    this.cueGain = null;
    this.mixerMainGain = null;
    this.outputGate = null;
    this.stemGains.clear();
    this.outputMerger = null;
    this.mainSplitter = null;
    this.mainMono = null;
    this.cueMono = null;
    if (previous) {
      try {
        await previous.close();
      } catch {
      }
    }
    const options = {};
    if (sinkId) options.sinkId = sinkId;
    this.ctx = createContext(options);
    this.unlockNow(this.ctx);
    this.watchContextState(this.ctx);
    this.buildGraph(this.ctx);
    await this.resumeContext();
  }
  setRoutingMode(mode) {
    if (!this.ctx) {
      this.routingMode = mode;
      return;
    }
    this.applyRoutingGraph(mode);
  }
  getRoutingState() {
    return {
      deviceId: this.outputDeviceId,
      channels: this.outputChannels,
      routingMode: this.routingMode
    };
  }
  setRouting(map) {
    this.routing = map;
  }
  setGlobalGain(bus, gainDb) {
    const node = bus === "CUE" ? this.cueGain : this.mainGain;
    if (node) node.gain.value = dbToGain(gainDb);
  }
  setExternalCueActive(active) {
    this.externalCueActive = active;
    this.syncTransportGate();
  }
  fadeOut(durationSeconds) {
    if (!this.outputGate || !this.ctx) return;
    const now = this.ctx.currentTime;
    const duration = Math.max(0, durationSeconds);
    const gain = this.outputGate.gain;
    gain.cancelScheduledValues(now);
    gain.setValueAtTime(gain.value, now);
    gain.linearRampToValueAtTime(0, now + duration);
  }
  resetFadeOut() {
    if (!this.outputGate || !this.ctx) return;
    this.outputGate.gain.cancelScheduledValues(this.ctx.currentTime);
    this.syncTransportGate();
  }
  createDeck(id) {
    const existing = this.decks.get(id);
    if (existing) return existing;
    const deck = new WebAudioDeck(id, this);
    this.decks.set(id, deck);
    return deck;
  }
  getContextTime() {
    return this.ctx?.currentTime ?? 0;
  }
  /**
   * What the platform measured for the whole path to the speaker. On iOS this comes from
   * AVAudioSession, which is the only thing that knows the real figure.
   *
   * A route past the ceiling is clamped, never dropped: a Bluetooth speaker sits at a few
   * hundred milliseconds, and answering "no delay at all" for it is the largest error
   * available rather than the safest one.
   */
  setOutputLatencyHint(seconds) {
    this.outputLatencyHint = Number.isFinite(seconds) && seconds > 0 ? Math.min(seconds, MAX_OUTPUT_LATENCY) : 0;
  }
  /** Seconds from graph time to the speaker. Zero when the context is not running. */
  getOutputLatency() {
    const ctx = this.ctx;
    const output = ctx && "outputLatency" in ctx ? Number(ctx.outputLatency) : 0;
    const base = ctx && "baseLatency" in ctx ? Number(ctx.baseLatency) : 0;
    const reported = Math.max(
      Number.isFinite(output) ? output : 0,
      Number.isFinite(base) ? base : 0
    );
    const value = Math.max(this.outputLatencyHint, reported);
    if (!Number.isFinite(value) || value <= 0) return 0;
    return Math.min(value, MAX_OUTPUT_LATENCY);
  }
  poll() {
    const ctx = this.ctx;
    if (ctx && ctx.state !== "running" && ctx.state !== "closed") {
      void this.resumeContext();
    }
    const now = this.getContextTime();
    for (const deck of this.decks.values()) deck.poll(now);
  }
};
async function decodeSongBuffers(ctx, song, fetchBuffer) {
  const audioAssets = song.assets.filter(
    (asset) => asset.kind === "audio" && !isMasterPracticeAudio(asset.path)
  );
  const decoded = await Promise.all(
    audioAssets.map(async (asset) => {
      try {
        const raw = await fetchBuffer(asset.path);
        const flac = parseFlac(raw);
        if (flac && flac.info.sampleRate === ctx.sampleRate) {
          return { id: asset.id, asset, duration: flac.info.duration, payload: flac };
        }
        const buffer = await ctx.decodeAudioData(raw);
        return {
          id: asset.id,
          asset,
          duration: buffer.duration,
          payload: buffer
        };
      } catch (error) {
        if (asset.id.startsWith("mix_") && asset.audioRole !== "click") return null;
        throw error;
      }
    })
  );
  return { tracks: decoded.filter((track) => track !== null) };
}

// packages/audio/src/metronome.ts
var LOOKAHEAD_MS = 25;
var SCHEDULE_AHEAD = 0.12;
var BEAT_HZ = 1320;
var METRO_INTRO_URLS = ["/library/1.flac", "/library/2.flac"];
async function fetchIntroBytes(url) {
  const res = await fetch(url);
  if (!res.ok) return void 0;
  return res.arrayBuffer();
}
function metroIntroClickIndex(clickIndex, introCount) {
  if (clickIndex < 0 || clickIndex >= introCount) return void 0;
  return clickIndex;
}
function metronomeAudibleTime(nextSongTime, nextContextTime, contextTime) {
  return Math.max(0, nextSongTime - Math.max(0, nextContextTime - contextTime));
}
var Metronome = class {
  constructor(onRunningChange, onBeat, loadIntro = fetchIntroBytes) {
    __publicField(this, "onRunningChange", onRunningChange);
    __publicField(this, "onBeat", onBeat);
    __publicField(this, "loadIntro", loadIntro);
    __publicField(this, "ctx", null);
    __publicField(this, "master", null);
    __publicField(this, "output", null);
    __publicField(this, "timer", 0);
    __publicField(this, "nextTime", 0);
    __publicField(this, "songTime", 0);
    __publicField(this, "map", []);
    __publicField(this, "running", false);
    __publicField(this, "volume", 0.7);
    __publicField(this, "silent", false);
    __publicField(this, "intro", []);
    __publicField(this, "introArmed", false);
    __publicField(this, "introClick", 0);
    __publicField(this, "introLoad", null);
    __publicField(this, "introGen", 0);
    __publicField(this, "introReady", false);
    __publicField(this, "tick", () => {
      if (!this.running || !this.ctx || !this.master) return;
      const horizon = this.ctx.currentTime + SCHEDULE_AHEAD;
      while (this.nextTime < horizon) {
        const point = tempoAt(this.map, this.songTime);
        this.onBeat?.({ at: this.nextTime });
        this.click(this.nextTime);
        const interval = Math.max(0.05, secondsPerBeat(point));
        this.nextTime += interval;
        this.songTime += interval;
      }
      this.timer = window.setTimeout(this.tick, LOOKAHEAD_MS);
    });
  }
  get isPlaying() {
    return this.running;
  }
  get isSilent() {
    return this.silent;
  }
  get time() {
    if (!this.running || !this.ctx) return this.songTime;
    return metronomeAudibleTime(this.songTime, this.nextTime, this.ctx.currentTime);
  }
  get gain() {
    return this.volume;
  }
  attach(ctx, output = ctx.destination) {
    if (this.ctx === ctx && this.master && this.output === output) return;
    this.stop();
    this.master?.disconnect();
    if (this.ctx !== ctx) {
      this.introGen += 1;
      this.intro = [];
      this.introLoad = null;
      this.introReady = false;
    }
    this.ctx = ctx;
    this.output = output;
    this.master = ctx.createGain();
    this.master.gain.value = this.volume;
    this.master.connect(output);
  }
  async ensureIntro(ctx) {
    if (this.introLoad) return this.introLoad;
    const gen = this.introGen;
    this.introLoad = this.fetchIntro(ctx, gen).catch((error) => {
      if (gen === this.introGen) this.introLoad = null;
      throw error;
    });
    return this.introLoad;
  }
  introPrepared(ctx) {
    return this.ctx === ctx && this.introReady;
  }
  setVolume(value) {
    this.volume = Math.max(0, Math.min(1, value));
    if (this.master) this.master.gain.value = this.volume;
  }
  fadeOut(durationSeconds) {
    if (!this.ctx || !this.master) return;
    const now = this.ctx.currentTime;
    const gain = this.master.gain;
    gain.cancelScheduledValues(now);
    gain.setValueAtTime(gain.value, now);
    gain.linearRampToValueAtTime(0, now + Math.max(0, durationSeconds));
  }
  resetFadeOut() {
    if (!this.ctx || !this.master) return;
    this.master.gain.cancelScheduledValues(this.ctx.currentTime);
    this.master.gain.setValueAtTime(this.volume, this.ctx.currentTime);
  }
  start(map, fromTime = 0, opts) {
    if (!this.ctx || !this.master) return;
    this.stop();
    this.silent = opts?.silent === true;
    this.introArmed = opts?.intro === true && !this.silent;
    this.introClick = 0;
    this.master.gain.cancelScheduledValues(this.ctx.currentTime);
    this.master.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    this.map = map;
    this.running = true;
    this.onRunningChange?.(true);
    this.songTime = Math.max(0, fromTime);
    this.nextTime = this.ctx.currentTime + 0.05;
    this.tick();
  }
  stop() {
    const wasRunning = this.running;
    if (wasRunning && this.ctx) {
      this.songTime = metronomeAudibleTime(this.songTime, this.nextTime, this.ctx.currentTime);
    }
    this.running = false;
    if (wasRunning) this.onRunningChange?.(false);
    if (this.timer) {
      window.clearTimeout(this.timer);
      this.timer = 0;
    }
  }
  async fetchIntro(ctx, gen) {
    const loaded = await Promise.all(
      METRO_INTRO_URLS.map(async (url) => {
        try {
          const raw = await this.loadIntro(url);
          if (!raw) return void 0;
          return await ctx.decodeAudioData(raw.slice(0));
        } catch {
          return void 0;
        }
      })
    );
    if (gen !== this.introGen || this.ctx !== ctx) return;
    this.intro = loaded;
    this.introReady = true;
  }
  click(time) {
    if (this.silent || !this.ctx || !this.master) return;
    const osc = this.ctx.createOscillator();
    const env = this.ctx.createGain();
    osc.type = "square";
    osc.frequency.value = BEAT_HZ;
    env.gain.setValueAtTime(1, time);
    env.gain.exponentialRampToValueAtTime(1e-3, time + 0.03);
    osc.connect(env);
    env.connect(this.master);
    osc.start(time);
    osc.stop(time + 0.06);
    if (!this.introArmed) return;
    const index = metroIntroClickIndex(this.introClick, METRO_INTRO_URLS.length);
    this.introClick += 1;
    if (index == null) return;
    const buffer = this.intro[index];
    if (!buffer) return;
    const src = this.ctx.createBufferSource();
    src.buffer = buffer;
    src.connect(this.master);
    src.start(time);
  }
};

// packages/protocol/src/index.ts
var PROTOCOL_VERSION = 1;
var REMOTE_DEVICE_NAME = "REMOTE";
function masterSessionUpdate(previous, incoming) {
  const sessionId = incoming?.trim() || null;
  if (!sessionId) return { sessionId: previous, restarted: false };
  return { sessionId, restarted: Boolean(previous && previous !== sessionId) };
}
function syncMessageWantedBy(message, kind) {
  if (message.type !== "MixerState") return true;
  return kind === "remote";
}
function parseSyncMessage(raw) {
  try {
    const value = JSON.parse(raw);
    if (typeof value !== "object" || value === null || !("type" in value)) {
      return null;
    }
    const type = value.type;
    if (typeof type !== "string") return null;
    return value;
  } catch {
    return null;
  }
}

// apps/web/src/practice/gig.ts
var PRACTICE_GIG_ID = "practice";
function practiceEntryId(songId) {
  return `practice_${songId}`;
}
function practiceGig(songs) {
  return {
    id: PRACTICE_GIG_ID,
    name: "Practice",
    date: "",
    musicians: [],
    setlist: songs.map((song) => ({
      type: "song",
      entryId: practiceEntryId(song.id),
      songId: song.id,
      finishMode: FinishMode.Stop
    }))
  };
}

// apps/web/src/store/song-library.ts
var SONG_LIBRARY_GIG_ID = "__song_library__";
var SONG_LIBRARY_NAME = "Song Library";
function songLibraryEntryId(songId) {
  return `song_library_${songId}`;
}
var cachedLibrarySongs;
var cachedLibraryGig;
var cachedListedGigs;
var cachedListedSongs;
var cachedListed;
function songLibraryGig(songs, previous) {
  const performanceMode = isSongLibraryGig(previous) ? previous.performanceMode : void 0;
  const stageNames = isSongLibraryGig(previous) ? previous.stageNames : void 0;
  if (cachedLibraryGig && cachedLibrarySongs === songs && cachedLibraryGig.performanceMode === performanceMode && cachedLibraryGig.stageNames === stageNames) {
    return cachedLibraryGig;
  }
  cachedLibrarySongs = songs;
  cachedLibraryGig = {
    id: SONG_LIBRARY_GIG_ID,
    name: SONG_LIBRARY_NAME,
    date: "",
    musicians: [],
    setlist: songs.map((song) => ({
      type: "song",
      entryId: songLibraryEntryId(song.id),
      songId: song.id
    })),
    ...performanceMode ? { performanceMode } : {},
    ...stageNames ? { stageNames } : {}
  };
  return cachedLibraryGig;
}
function isSongLibraryGig(gig) {
  return gig?.id === SONG_LIBRARY_GIG_ID;
}
function listedGigs(gigs, songs) {
  if (cachedListed && cachedListedGigs === gigs && cachedListedSongs === songs) {
    return cachedListed;
  }
  const saved = gigs.filter((gig) => !isSongLibraryGig(gig));
  const previousLibrary = gigs.find((gig) => isSongLibraryGig(gig));
  cachedListedGigs = gigs;
  cachedListedSongs = songs;
  cachedListed = [songLibraryGig(songs, previousLibrary), ...saved];
  return cachedListed;
}
function setlistNameTaken(gigs, name, exceptId) {
  const key = name.trim().toLowerCase();
  if (!key || key === SONG_LIBRARY_NAME.toLowerCase()) return true;
  return gigs.some(
    (gig) => !isSongLibraryGig(gig) && gig.id !== exceptId && gig.name.trim().toLowerCase() === key
  );
}
function librarySongIdFromEntry(gig, entryId) {
  if (!gig || !entryId) return null;
  const entry = gig.setlist.find((item) => item.entryId === entryId);
  return entry && isSongEntry(entry) ? entry.songId : null;
}
function pickLibraryEntryId(songs, rememberedSongId, fallbackSongId) {
  const remembered = findSongByRef(songs, rememberedSongId ?? void 0);
  if (remembered) return songLibraryEntryId(remembered.id);
  const fallback = findSongByRef(songs, fallbackSongId ?? void 0);
  if (fallback) return songLibraryEntryId(fallback.id);
  return songs[0] ? songLibraryEntryId(songs[0].id) : null;
}
function findSongByRef(songs, songId) {
  if (!songId) return void 0;
  const exact = songs.find((song) => song.id === songId || song.folder === songId);
  if (exact) return exact;
  const resolved = resolvePublishedSongId(songId, songs);
  return resolved ? songs.find((song) => song.id === resolved) : void 0;
}
function overlayHostSongMeta(practice, host) {
  if (host.length === 0) return practice;
  return practice.map((song) => {
    const hostId = resolvePublishedSongId(song.id, host) ?? (song.folder ? resolvePublishedSongId(song.folder, host) : void 0) ?? (song.title ? resolvePublishedSongId(song.title, host) : void 0);
    const hostSong = hostId ? host.find((item) => item.id === hostId) : void 0;
    if (!hostSong) return song;
    const local = parseSongInfo(song.info);
    const remote = parseSongInfo(hostSong.info);
    const thinChart = song.sections.length === 0;
    return {
      ...song,
      title: hostSong.title?.trim() || song.title,
      key: hostSong.key ?? song.key,
      scale: hostSong.scale ?? song.scale,
      style: hostSong.style ?? song.style,
      kita: hostSong.kita ?? song.kita,
      duration: song.duration > 0 ? song.duration : hostSong.duration,
      nextSongAt: song.nextSongAt ?? hostSong.nextSongAt,
      finalAt: song.finalAt ?? hostSong.finalAt,
      tempoMap: thinChart && hostSong.tempoMap.length > 0 ? hostSong.tempoMap : song.tempoMap,
      sections: thinChart ? hostSong.sections : song.sections,
      lyrics: (song.lyrics?.length ?? 0) > 0 ? song.lyrics : hostSong.lyrics,
      chords: (song.chords?.length ?? 0) > 0 ? song.chords : hostSong.chords,
      patterns: (song.patterns?.length ?? 0) > 0 ? song.patterns : hostSong.patterns,
      info: parseSongInfo({
        ...local,
        ...remote,
        kita: remote.kita ?? hostSong.kita ?? local.kita ?? song.kita,
        pageNotes: { ...local.pageNotes, ...remote.pageNotes },
        metroNotes: { ...local.metroNotes, ...remote.metroNotes }
      })
    };
  });
}

// apps/web/src/store/soundcheck-remote.ts
function remoteGigEntries(gig, songs) {
  return gig.setlist.map((entry) => {
    if (isSongEntry(entry)) {
      const song = findSongByRef(songs, entry.songId);
      const title = song?.title?.trim() || song?.folder?.trim();
      const duration = song?.duration ?? 0;
      return {
        type: "song",
        entryId: entry.entryId,
        songId: entry.songId,
        ...entry.skipped ? { skipped: true } : {},
        ...title ? { title } : {},
        ...duration > 0 ? { duration } : {}
      };
    }
    return {
      type: entry.type,
      entryId: entry.entryId,
      label: entry.label,
      ...entry.notes?.trim() ? { notes: entry.notes } : {}
    };
  });
}
function stubSongsFromRemoteSetlist(setlist) {
  const byId = /* @__PURE__ */ new Map();
  for (const entry of setlist) {
    if (entry.type !== "song") continue;
    byId.set(
      entry.songId,
      normalizeSong({
        id: entry.songId,
        title: entry.title?.trim() || entry.songId,
        duration: entry.duration ?? 0
      })
    );
  }
  return [...byId.values()];
}
function applyRemoteControl(message, actions) {
  if (message.action === "stop") {
    actions.stop();
    return;
  }
  if (message.action === "seek") {
    if (typeof message.time === "number" && Number.isFinite(message.time)) {
      actions.seek(Math.max(0, message.time));
    }
    return;
  }
  if (message.action === "select") {
    if (message.setlistEntryId) actions.selectSetlistEntry(message.setlistEntryId);
    return;
  }
  if (message.action !== "play") return;
  const entryId = message.setlistEntryId ?? actions.selectedEntryId;
  if (entryId && entryId !== actions.selectedEntryId) {
    actions.selectSetlistEntry(entryId);
  }
  if (actions.playing && actions.playingEntryId && actions.playingEntryId === entryId) return;
  void actions.playSelected();
}
function isMixerChannel(value) {
  return Boolean(value && MIXER_CHANNELS.includes(value));
}
function enabledMixerChannels(files) {
  return MIXER_CHANNELS.filter((channel) => songHasMixerFile(files, channel));
}
function mixerFilesForChannels(channels) {
  return (channels ?? []).flatMap(
    (channel) => channel === "Main" || !MIXER_CHANNELS.includes(channel) ? [] : [mixerFileName(channel)]
  );
}
function mixerStateMessage(input) {
  return {
    type: "MixerState",
    busMix: input.busMix,
    metronomeVolume: input.metronomeVolume,
    ...input.songId ? { songId: input.songId } : {},
    ...input.songTitle ? { songTitle: input.songTitle } : {},
    ...input.songMix ? { songMix: input.songMix } : {},
    ...input.songChannels && input.songChannels.length > 0 ? { songChannels: [...input.songChannels] } : {},
    ...input.playMode ? { playMode: input.playMode } : {},
    ...input.songMixer != null ? { songMixer: input.songMixer } : {}
  };
}
function applyMixerState(message, current) {
  const songMix = { ...current.songMix };
  const fileIndex = { ...current.fileIndex };
  let songs = current.songs;
  if (message.songId) {
    if (message.songMix) songMix[message.songId] = parseMixerBank(message.songMix);
    fileIndex[message.songId] = mixerFilesForChannels(message.songChannels);
    if (message.playMode) {
      songs = songs.map(
        (song) => song.id === message.songId || song.folder === message.songId ? normalizeSong({
          ...song,
          info: { ...song.info, playMode: message.playMode }
        }) : song
      );
    }
  }
  return {
    busMix: parseMixerBank(message.busMix),
    metronomeVolume: parseMetronomeVolume(message.metronomeVolume),
    songMix,
    fileIndex,
    songs,
    remoteSongMixer: message.songMixer === true
  };
}
function applyRemoteMixer(message, actions) {
  if (message.target === "metro") {
    if (typeof message.volume === "number" && Number.isFinite(message.volume)) {
      actions.setMetronomeVolume(message.volume);
    }
    return;
  }
  if (!isMixerChannel(message.channel) || !message.patch) return;
  if (message.target === "bus") {
    actions.setBusMixStrip(message.channel, message.patch);
    return;
  }
  if (message.target === "song" && message.songId) {
    actions.setSongMixStrip(message.songId, message.channel, message.patch);
  }
}

// node_modules/idb/build/index.js
var instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);
var idbProxyableTypes;
var cursorAdvanceMethods;
function getIdbProxyableTypes() {
  return idbProxyableTypes || (idbProxyableTypes = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function getCursorAdvanceMethods() {
  return cursorAdvanceMethods || (cursorAdvanceMethods = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
var transactionDoneMap = /* @__PURE__ */ new WeakMap();
var transformCache = /* @__PURE__ */ new WeakMap();
var reverseTransformCache = /* @__PURE__ */ new WeakMap();
function promisifyRequest(request) {
  const promise = new Promise((resolve2, reject) => {
    const unlisten = () => {
      request.removeEventListener("success", success);
      request.removeEventListener("error", error);
    };
    const success = () => {
      resolve2(wrap(request.result));
      unlisten();
    };
    const error = () => {
      reject(request.error);
      unlisten();
    };
    request.addEventListener("success", success);
    request.addEventListener("error", error);
  });
  reverseTransformCache.set(promise, request);
  return promise;
}
function cacheDonePromiseForTransaction(tx) {
  if (transactionDoneMap.has(tx))
    return;
  const done = new Promise((resolve2, reject) => {
    const unlisten = () => {
      tx.removeEventListener("complete", complete);
      tx.removeEventListener("error", error);
      tx.removeEventListener("abort", error);
    };
    const complete = () => {
      resolve2();
      unlisten();
    };
    const error = () => {
      reject(tx.error || new DOMException("AbortError", "AbortError"));
      unlisten();
    };
    tx.addEventListener("complete", complete);
    tx.addEventListener("error", error);
    tx.addEventListener("abort", error);
  });
  transactionDoneMap.set(tx, done);
}
var idbProxyTraps = {
  get(target, prop, receiver) {
    if (target instanceof IDBTransaction) {
      if (prop === "done")
        return transactionDoneMap.get(target);
      if (prop === "store") {
        return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
      }
    }
    return wrap(target[prop]);
  },
  set(target, prop, value) {
    target[prop] = value;
    return true;
  },
  has(target, prop) {
    if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
      return true;
    }
    return prop in target;
  }
};
function replaceTraps(callback) {
  idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
  if (getCursorAdvanceMethods().includes(func)) {
    return function(...args) {
      func.apply(unwrap(this), args);
      return wrap(this.request);
    };
  }
  return function(...args) {
    return wrap(func.apply(unwrap(this), args));
  };
}
function transformCachableValue(value) {
  if (typeof value === "function")
    return wrapFunction(value);
  if (value instanceof IDBTransaction)
    cacheDonePromiseForTransaction(value);
  if (instanceOfAny(value, getIdbProxyableTypes()))
    return new Proxy(value, idbProxyTraps);
  return value;
}
function wrap(value) {
  if (value instanceof IDBRequest)
    return promisifyRequest(value);
  if (transformCache.has(value))
    return transformCache.get(value);
  const newValue = transformCachableValue(value);
  if (newValue !== value) {
    transformCache.set(value, newValue);
    reverseTransformCache.set(newValue, value);
  }
  return newValue;
}
var unwrap = (value) => reverseTransformCache.get(value);
function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
  const request = indexedDB.open(name, version);
  const openPromise = wrap(request);
  if (upgrade) {
    request.addEventListener("upgradeneeded", (event) => {
      upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
    });
  }
  if (blocked) {
    request.addEventListener("blocked", (event) => blocked(
      // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
      event.oldVersion,
      event.newVersion,
      event
    ));
  }
  openPromise.then((db3) => {
    if (terminated)
      db3.addEventListener("close", () => terminated());
    if (blocking) {
      db3.addEventListener("versionchange", (event) => blocking(event.oldVersion, event.newVersion, event));
    }
  }).catch(() => {
  });
  return openPromise;
}
var readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
var writeMethods = ["put", "add", "delete", "clear"];
var cachedMethods = /* @__PURE__ */ new Map();
function getMethod(target, prop) {
  if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
    return;
  }
  if (cachedMethods.get(prop))
    return cachedMethods.get(prop);
  const targetFuncName = prop.replace(/FromIndex$/, "");
  const useIndex = prop !== targetFuncName;
  const isWrite = writeMethods.includes(targetFuncName);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))
  ) {
    return;
  }
  const method = async function(storeName, ...args) {
    const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
    let target2 = tx.store;
    if (useIndex)
      target2 = target2.index(args.shift());
    return (await Promise.all([
      target2[targetFuncName](...args),
      isWrite && tx.done
    ]))[0];
  };
  cachedMethods.set(prop, method);
  return method;
}
replaceTraps((oldTraps) => ({
  ...oldTraps,
  get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
  has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
}));
var advanceMethodProps = ["continue", "continuePrimaryKey", "advance"];
var methodMap = {};
var advanceResults = /* @__PURE__ */ new WeakMap();
var ittrProxiedCursorToOriginalProxy = /* @__PURE__ */ new WeakMap();
var cursorIteratorTraps = {
  get(target, prop) {
    if (!advanceMethodProps.includes(prop))
      return target[prop];
    let cachedFunc = methodMap[prop];
    if (!cachedFunc) {
      cachedFunc = methodMap[prop] = function(...args) {
        advanceResults.set(this, ittrProxiedCursorToOriginalProxy.get(this)[prop](...args));
      };
    }
    return cachedFunc;
  }
};
async function* iterate(...args) {
  let cursor = this;
  if (!(cursor instanceof IDBCursor)) {
    cursor = await cursor.openCursor(...args);
  }
  if (!cursor)
    return;
  cursor = cursor;
  const proxiedCursor = new Proxy(cursor, cursorIteratorTraps);
  ittrProxiedCursorToOriginalProxy.set(proxiedCursor, cursor);
  reverseTransformCache.set(proxiedCursor, unwrap(cursor));
  while (cursor) {
    yield proxiedCursor;
    cursor = await (advanceResults.get(proxiedCursor) || cursor.continue());
    advanceResults.delete(proxiedCursor);
  }
}
function isIteratorProp(target, prop) {
  return prop === Symbol.asyncIterator && instanceOfAny(target, [IDBIndex, IDBObjectStore, IDBCursor]) || prop === "iterate" && instanceOfAny(target, [IDBIndex, IDBObjectStore]);
}
replaceTraps((oldTraps) => ({
  ...oldTraps,
  get(target, prop, receiver) {
    if (isIteratorProp(target, prop))
      return iterate;
    return oldTraps.get(target, prop, receiver);
  },
  has(target, prop) {
    return isIteratorProp(target, prop) || oldTraps.has(target, prop);
  }
}));

// apps/web/src/persist/seed.ts
function seedGig() {
  return {
    id: "gig_2026_09_12",
    name: "Istanbul - 12 September",
    date: "2026-09-12",
    venue: "",
    musicians: [],
    setlist: [
      { type: "song", entryId: createId("entry"), songId: "song_001" },
      { type: "song", entryId: createId("entry"), songId: "song_002" },
      { type: "song", entryId: createId("entry"), songId: "song_006" },
      { type: "song", entryId: createId("entry"), songId: "song_004" }
    ]
  };
}

// apps/web/src/persist/indexed-db.ts
var DB_NAME = "dbk-stage-control";
var DB_VERSION = 1;
var dbPromise = null;
function db() {
  if (!dbPromise) {
    dbPromise = openDB(DB_NAME, DB_VERSION, {
      upgrade(database) {
        if (!database.objectStoreNames.contains("musicians")) {
          database.createObjectStore("musicians", { keyPath: "id" });
        }
        if (!database.objectStoreNames.contains("gigs")) {
          database.createObjectStore("gigs", { keyPath: "id" });
        }
        if (!database.objectStoreNames.contains("meta")) {
          database.createObjectStore("meta");
        }
      }
    });
  }
  return dbPromise;
}
async function loadLocalLibrary() {
  const database = await db();
  const seeded = await database.get("meta", "seeded");
  if (!seeded) {
    const tx = database.transaction(["gigs", "meta"], "readwrite");
    if (!isNativeApp()) await tx.objectStore("gigs").put(seedGig());
    await tx.objectStore("meta").put("1", "seeded");
    await tx.done;
  }
  return {
    gigs: await database.getAll("gigs")
  };
}
async function saveGig(gig) {
  await (await db()).put("gigs", gig);
}
async function deleteGig(id) {
  await (await db()).delete("gigs", id);
}

// apps/web/src/practice/store.ts
var DB_NAME2 = "dbk-practice";
var DB_VERSION2 = 3;
var GIGS_KEY = "published-gigs";
var dbPromise2 = null;
function db2() {
  if (!dbPromise2) {
    dbPromise2 = openDB(DB_NAME2, DB_VERSION2, {
      async upgrade(database, _from, _to, tx) {
        if (!database.objectStoreNames.contains("files")) {
          const store = database.createObjectStore("files", { keyPath: "key" });
          store.createIndex("folder", "folder");
        }
        if (!database.objectStoreNames.contains("meta")) {
          database.createObjectStore("meta");
        }
        if (!database.objectStoreNames.contains("manifest")) {
          const store = database.createObjectStore("manifest", { keyPath: "key" });
          store.createIndex("folder", "folder");
          let cursor = await tx.objectStore("files").openCursor();
          while (cursor) {
            const { key, folder, path, size, hash } = cursor.value;
            await tx.objectStore("manifest").put({ key, folder, path, size, hash });
            cursor = await cursor.continue();
          }
        }
      },
      blocked() {
      }
    });
  }
  return dbPromise2;
}
function practiceFileKey(folder, path) {
  return `${folder}/${path}`;
}
async function writePracticeFile(folder, path, data, hash) {
  const keyFolder = folder.normalize("NFC");
  const keyPath = path.normalize("NFC");
  const database = await db2();
  const meta = {
    key: practiceFileKey(keyFolder, keyPath),
    folder: keyFolder,
    path: keyPath,
    size: data.byteLength,
    hash
  };
  await database.put("files", { ...meta, data });
  await database.put("manifest", meta);
}
async function readPracticeFileBuffer(folder, path) {
  const database = await db2();
  const exact = await database.get("files", practiceFileKey(folder, path));
  if (exact) return exact.data;
  const nfcKey = practiceFileKey(folder.normalize("NFC"), path.normalize("NFC"));
  if (nfcKey !== practiceFileKey(folder, path)) {
    const nfc = await database.get("files", nfcKey);
    if (nfc) return nfc.data;
  }
  const wantPath = fileNameOf(path).toLowerCase();
  for (const row of await database.getAll("manifest")) {
    if (samePracticeFolder(row.folder, folder) && fileNameOf(row.path).toLowerCase() === wantPath) {
      return (await database.get("files", row.key))?.data ?? null;
    }
  }
  return null;
}
async function repairManifest(database) {
  const [files, manifest] = await Promise.all([
    database.count("files"),
    database.count("manifest")
  ]);
  if (files === manifest) return;
  const tx = database.transaction(["files", "manifest"], "readwrite");
  await tx.objectStore("manifest").clear();
  let cursor = await tx.objectStore("files").openCursor();
  while (cursor) {
    const { key, folder, path, size, hash } = cursor.value;
    await tx.objectStore("manifest").put({ key, folder, path, size, hash });
    cursor = await cursor.continue();
  }
  await tx.done;
}
async function listPracticeManifest() {
  const database = await db2();
  await repairManifest(database);
  const rows = await database.getAll("manifest");
  const out = {};
  for (const row of rows) {
    const list = out[row.folder] ?? [];
    list.push({ path: row.path, size: row.size, hash: row.hash });
    out[row.folder] = list;
  }
  return out;
}
async function deletePracticeFile(folder, path) {
  const database = await db2();
  const wantFolder = folder.normalize("NFC");
  const wantPath = path.normalize("NFC");
  await dropFile(database, practiceFileKey(wantFolder, wantPath));
  const wantName = fileNameOf(path).toLowerCase();
  for (const row of await database.getAll("manifest")) {
    if (samePracticeFolder(row.folder, folder) && fileNameOf(row.path).toLowerCase() === wantName) {
      await dropFile(database, row.key);
    }
  }
}
async function dropFile(database, key) {
  await database.delete("files", key);
  await database.delete("manifest", key);
}
async function deletePracticeFolder(folder) {
  const database = await db2();
  const want = folder.normalize("NFC");
  for (const row of await database.getAll("manifest")) {
    if (row.folder === folder || row.folder.normalize("NFC") === want) {
      await dropFile(database, row.key);
    }
  }
}
async function writePublishedGigs(gigs) {
  await (await db2()).put("meta", gigs, GIGS_KEY);
}
async function readPublishedGigs() {
  const raw = await (await db2()).get("meta", GIGS_KEY);
  return Array.isArray(raw) ? raw : [];
}
function decodeText(data) {
  return new TextDecoder().decode(data);
}
function stubSong2(folder) {
  const info = parseSongInfo(void 0);
  return {
    id: folder,
    version: 1,
    title: folder,
    folder,
    duration: 0,
    assets: [],
    tempoMap: [
      {
        time: 0,
        measure: 1,
        bpm: info.bpm,
        numerator: info.numerator,
        denominator: info.denominator
      }
    ],
    sections: [],
    info
  };
}
async function loadPracticeLibrary() {
  resetSongFolders();
  const manifest = await listPracticeManifest();
  const songs = [];
  const fileIndex = {};
  for (const folder of Object.keys(manifest).sort((a, b) => a.localeCompare(b))) {
    const files = (manifest[folder] ?? []).map((item) => item.path);
    const raw = await readPracticeFileBuffer(folder, "song.json");
    let packed = null;
    if (raw) {
      try {
        const parsed = JSON.parse(decodeText(raw));
        if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
          packed = parsed;
        }
      } catch {
        packed = null;
      }
    }
    const settingsRaw = await readPracticeFileBuffer(folder, "settings.json");
    let info = parseSongInfo(packed?.info);
    if (settingsRaw) {
      try {
        const settings = JSON.parse(decodeText(settingsRaw));
        if (!packed?.info && settings.view) info = parseSongInfo(settings.view);
        info = parseSongInfo({
          ...info,
          metroNotes: { ...settings.metroNotes, ...info.metroNotes }
        });
      } catch {
      }
    }
    const base = stubSong2(folder);
    const song = packed ? {
      ...base,
      ...packed,
      folder,
      title: publishedSongTitle({
        id: typeof packed.id === "string" && packed.id.trim() ? packed.id : folder,
        folder,
        title: typeof packed.title === "string" ? packed.title : void 0
      }),
      id: typeof packed.id === "string" && packed.id.length > 0 ? packed.id : folder,
      assets: Array.isArray(packed.assets) ? packed.assets : base.assets,
      tempoMap: Array.isArray(packed.tempoMap) && packed.tempoMap.length > 0 ? packed.tempoMap : base.tempoMap,
      sections: Array.isArray(packed.sections) ? packed.sections : base.sections,
      duration: typeof packed.duration === "number" ? packed.duration : base.duration,
      info
    } : base;
    registerSongFolder(song.id, folder);
    registerSongFolder(folder, folder);
    const existing = songs.find((item) => item.id === song.id);
    const merged = [.../* @__PURE__ */ new Set([...fileIndex[song.id] ?? [], ...files])];
    if (!practiceMasterAudio(merged)) {
      const stored = [...manifest[folder] ?? [], ...manifest[song.id] ?? []].map((item) => item.path);
      const master = practiceMasterAudio(stored);
      if (master) merged.push(master);
    }
    fileIndex[song.id] = merged;
    if (existing) {
      existing.folder = folder;
      if (!existing.duration && song.duration) existing.duration = song.duration;
    } else {
      songs.push(song);
    }
  }
  return { songs, fileIndex };
}

// apps/web/src/practice/zip.ts
function normalizeZipPath(path) {
  return normalizePracticeName(path.replace(/\\/g, "/").replace(/^\.?\//, ""));
}
function folderFromSongJson(data, fallback) {
  try {
    const parsed = JSON.parse(new TextDecoder().decode(data));
    const id = typeof parsed.id === "string" ? parsed.id : "";
    const folder = typeof parsed.folder === "string" ? parsed.folder : fallback;
    return practiceExportFolder({ id: id || fallback, folder });
  } catch {
    return practiceExportFolder({ id: fallback, folder: fallback });
  }
}
async function entriesFromZip(bytes2) {
  const { unzipSync: unzipSync2 } = await Promise.resolve().then(() => (init_browser(), browser_exports));
  const unzipped = unzipSync2(bytes2);
  const entries = [];
  for (const [rawPath, data] of Object.entries(unzipped)) {
    const path = normalizeZipPath(rawPath);
    if (!path || path.endsWith("/")) continue;
    const parts = path.split("/").filter((part) => part && part !== "__MACOSX" && !part.startsWith("."));
    if (parts.length === 0) continue;
    const fileName2 = parts[parts.length - 1] ?? "";
    if (!isPracticeFile(fileName2) || fileName2.startsWith(".")) continue;
    const folder = normalizePracticeName(
      parts.length >= 2 ? parts[parts.length - 2] ?? "" : practiceSongFolder(path) ?? ""
    );
    if (!folder) continue;
    const rel = normalizePracticeName(parts[parts.length - 1] ?? fileName2);
    entries.push({ folder, path: rel, data });
  }
  return entries;
}
async function importPracticeEntries(entries) {
  const aliases = /* @__PURE__ */ new Map();
  for (const entry of entries) {
    if (entry.path.toLowerCase() !== "song.json") continue;
    aliases.set(entry.folder, folderFromSongJson(entry.data, entry.folder));
  }
  let count = 0;
  const folders = /* @__PURE__ */ new Set();
  for (const entry of entries) {
    const folder = aliases.get(entry.folder) ?? practiceExportFolder({ id: entry.folder, folder: entry.folder });
    const copy = new Uint8Array(entry.data.byteLength);
    copy.set(entry.data);
    await writePracticeFile(folder, entry.path, copy.buffer);
    folders.add(folder);
    count += 1;
  }
  return folders.size;
}
async function importPracticeZip(file) {
  const bytes2 = new Uint8Array(await file.arrayBuffer());
  return importPracticeEntries(await entriesFromZip(bytes2));
}
async function importPracticeFileList(files) {
  const entries = [];
  for (const file of files) {
    const rel = normalizeZipPath(file.webkitRelativePath || file.name);
    const parts = rel.split("/").filter(Boolean);
    if (parts.length < 2) continue;
    const fileName2 = parts[parts.length - 1] ?? file.name;
    if (!isPracticeFile(fileName2)) continue;
    const folder = normalizePracticeName(parts[parts.length - 2] ?? "");
    if (!folder) continue;
    entries.push({
      folder,
      path: normalizePracticeName(fileName2),
      data: new Uint8Array(await file.arrayBuffer())
    });
  }
  return importPracticeEntries(entries);
}
async function buildPracticeZip(files) {
  const payload = {};
  for (const file of files) {
    if (!isPracticeFile(file.path.split("/").pop() ?? file.path)) continue;
    payload[file.path] = file.data;
  }
  const { zipSync: zipSync2 } = await Promise.resolve().then(() => (init_browser(), browser_exports));
  return zipSync2(payload);
}
function practiceZipName() {
  const stamp = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  return `dbk-practice-${stamp}.zip`;
}

// apps/web/src/practice/export.ts
async function exportPracticeZip(songs, fileIndex, onlySongIds) {
  const wanted = onlySongIds ? new Set(onlySongIds) : null;
  const files = [];
  for (const song of songs) {
    if (wanted && !wanted.has(song.id)) continue;
    const folder = practiceExportFolder(song);
    const listed = filterPracticeFiles(fileIndex[song.id] ?? []);
    for (const rel of listed) {
      try {
        const buffer = await libraryApi.readBytes(song.id, rel);
        files.push({
          path: `${folder}/${rel}`,
          data: new Uint8Array(buffer)
        });
      } catch {
      }
    }
  }
  return { name: practiceZipName(), bytes: await buildPracticeZip(files) };
}
function downloadBytes(name, bytes2) {
  const copy = new Uint8Array(bytes2.byteLength);
  copy.set(bytes2);
  const blob = new Blob([copy], { type: "application/zip" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = name;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 2e3);
}

// apps/web/src/practice/handoff.ts
function practiceHandoff(opts) {
  if (opts.already) return null;
  const atCue = opts.cue != null && opts.time >= opts.cue;
  if (opts.shouldPlayNext && (opts.ended || atCue)) return "play-next";
  if (opts.ended) return "land";
  return null;
}
function shouldRewindHtmlAudioStart(currentTime, startAt) {
  return currentTime - startAt > 0.04;
}

// apps/web/src/practice/playback.ts
var MASTER_CANDIDATES = ["Master.mp3", "master.mp3", "Master.flac", "master.flac"];
var CLICK_CANDIDATES = ["Click.flac", "click.flac"];
var audio = null;
var objectUrl = null;
var loadedSongId = null;
var loadedKind = null;
var timeListener = null;
var tick2 = null;
var practiceCtx = null;
var bytes = null;
var pcm = null;
var source = null;
var tail = null;
var tailAudio = null;
var tailUrl = null;
var decodePromise = null;
var webPlaying = false;
var startOffset = 0;
var startedAt = null;
var nextSongId = null;
var nextKind = null;
var nextBytes = null;
var nextPcm = null;
var nextDecodePromise = null;
var nextSource = null;
var nextStartedAt = null;
var nextStartOffset = 0;
function emitTime(ended = false) {
  if (!ended && !webPlaying && audio?.paused) return;
  timeListener?.(practiceAudioTime(), ended);
}
function startTick() {
  if (tick2 != null) return;
  const loop = () => {
    if (webPlaying) {
      const duration = pcm?.duration ?? 0;
      if (duration > 0 && practiceAudioTime() >= duration - 0.02) {
        tick2 = null;
        webPlaying = false;
        emitTime(true);
        return;
      }
      emitTime(false);
      tick2 = requestAnimationFrame(loop);
      return;
    }
    if (!audio || audio.paused) {
      tick2 = null;
      if (audio && (audio.ended || htmlAudioFinished(audio))) {
        timeListener?.(htmlDuration(audio), true);
      }
      return;
    }
    if (htmlAudioFinished(audio)) {
      tick2 = null;
      timeListener?.(htmlDuration(audio), true);
      return;
    }
    emitTime(false);
    tick2 = requestAnimationFrame(loop);
  };
  tick2 = requestAnimationFrame(loop);
}
function stopTick() {
  if (tick2 == null) return;
  cancelAnimationFrame(tick2);
  tick2 = null;
}
function htmlDuration(node) {
  const value = node.duration;
  return Number.isFinite(value) && value > 0 ? value : node.currentTime;
}
function htmlAudioFinished(node) {
  if (node.ended) return true;
  const duration = node.duration;
  return Number.isFinite(duration) && duration > 0 && node.currentTime >= duration - 0.05;
}
function stopNode(node) {
  if (!node) return;
  node.onended = null;
  try {
    node.stop();
  } catch {
  }
  try {
    node.disconnect();
  } catch {
  }
}
function stopSource() {
  if (webPlaying && practiceCtx && startedAt != null) {
    startOffset = Math.max(0, startOffset + (practiceCtx.currentTime - startedAt));
  }
  stopNode(source);
  source = null;
  webPlaying = false;
  startedAt = null;
}
function stopArmedNext() {
  stopNode(nextSource);
  nextSource = null;
  nextStartedAt = null;
  nextStartOffset = 0;
}
function clearPracticeNext(keepBuffers = false) {
  stopArmedNext();
  if (keepBuffers) return;
  nextSongId = null;
  nextKind = null;
  nextBytes = null;
  nextPcm = null;
  nextDecodePromise = null;
}
function stopTail() {
  if (tail) {
    tail.onended = null;
    try {
      tail.stop();
    } catch {
    }
    tail.disconnect();
    tail = null;
  }
  if (tailAudio) {
    tailAudio.pause();
    tailAudio.removeAttribute("src");
    tailAudio = null;
  }
  if (tailUrl) {
    URL.revokeObjectURL(tailUrl);
    tailUrl = null;
  }
}
function parkPracticeTail() {
  stopTick();
  stopTail();
  if (source) {
    const node = source;
    node.onended = () => {
      if (tail !== node) return;
      try {
        node.disconnect();
      } catch {
      }
      tail = null;
    };
    tail = node;
    source = null;
    webPlaying = false;
    startedAt = null;
    return;
  }
  if (audio && !audio.paused) {
    const parked = audio;
    tailAudio = parked;
    tailUrl = objectUrl;
    objectUrl = null;
    audio = null;
    parked.addEventListener(
      "ended",
      () => {
        if (tailAudio !== parked) return;
        parked.removeAttribute("src");
        if (tailUrl) URL.revokeObjectURL(tailUrl);
        tailUrl = null;
        tailAudio = null;
      },
      { once: true }
    );
  }
}
function element() {
  if (!audio) {
    audio = new Audio();
    audio.preload = "auto";
    audio.playsInline = true;
    audio.setAttribute("playsinline", "true");
    audio.setAttribute("webkit-playsinline", "true");
    audio.addEventListener("timeupdate", () => emitTime(false));
    audio.addEventListener("ended", () => {
      stopTick();
      timeListener?.(htmlDuration(audio), true);
    });
  }
  return audio;
}
function waitEvent(node, type, ms) {
  return new Promise((resolve2) => {
    const done = () => {
      window.clearTimeout(timer);
      node.removeEventListener(type, done);
      resolve2();
    };
    const timer = window.setTimeout(done, ms);
    node.addEventListener(type, done, { once: true });
  });
}
function decodeAudio(ctx, data) {
  return new Promise((resolve2, reject) => {
    let settled = false;
    const ok = (buffer) => {
      if (settled) return;
      settled = true;
      resolve2(buffer);
    };
    const fail = (error) => {
      if (settled) return;
      settled = true;
      reject(error ?? new Error("decode failed"));
    };
    try {
      const pending = ctx.decodeAudioData(data, ok, fail);
      pending?.then(ok, fail);
    } catch (error) {
      fail(error);
    }
  });
}
async function decodeIfNeeded() {
  if (pcm) return pcm;
  if (!bytes || !practiceCtx) return null;
  if (decodePromise) return decodePromise;
  const ctx = practiceCtx;
  const copy = bytes.slice(0);
  decodePromise = decodeAudio(ctx, copy).then((buffer) => {
    pcm = buffer;
    return buffer;
  }).catch(() => null).finally(() => {
    decodePromise = null;
  });
  return decodePromise;
}
async function decodeNextIfNeeded() {
  if (nextPcm) return nextPcm;
  if (!nextBytes || !practiceCtx) return null;
  if (nextDecodePromise) return nextDecodePromise;
  const ctx = practiceCtx;
  const copy = nextBytes.slice(0);
  nextDecodePromise = decodeAudio(ctx, copy).then((buffer) => {
    nextPcm = buffer;
    return buffer;
  }).catch(() => null).finally(() => {
    nextDecodePromise = null;
  });
  return nextDecodePromise;
}
function startBuffer(offset, when) {
  if (!practiceCtx || !pcm) return;
  stopSource();
  startOffset = Math.max(0, Math.min(offset, Math.max(0, pcm.duration - 1e-3)));
  const node = practiceCtx.createBufferSource();
  node.buffer = pcm;
  node.connect(practiceCtx.destination);
  node.onended = () => {
    if (source !== node) return;
    webPlaying = false;
    startedAt = null;
    stopTick();
    timeListener?.(pcm?.duration ?? startOffset, true);
  };
  source = node;
  startedAt = when ?? practiceCtx.currentTime;
  webPlaying = practiceCtx.currentTime >= startedAt;
  node.start(startedAt, startOffset);
}
function startNextBuffer(offset, when) {
  if (!practiceCtx || !nextPcm) return false;
  stopArmedNext();
  nextStartOffset = Math.max(0, Math.min(offset, Math.max(0, nextPcm.duration - 1e-3)));
  const node = practiceCtx.createBufferSource();
  node.buffer = nextPcm;
  node.connect(practiceCtx.destination);
  nextSource = node;
  nextStartedAt = when;
  node.start(when, nextStartOffset);
  return true;
}
async function playHtmlAudio(startAt) {
  const node = element();
  if (node.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) {
    await waitEvent(node, "canplay", 4e3);
  }
  try {
    node.currentTime = startAt;
  } catch {
  }
  if (node.readyState >= HTMLMediaElement.HAVE_METADATA) {
    await waitEvent(node, "seeked", 600);
  }
  await node.play();
  if (shouldRewindHtmlAudioStart(node.currentTime, startAt)) {
    try {
      node.currentTime = startAt;
    } catch {
    }
  }
}
function attachPracticeContext(ctx) {
  practiceCtx = ctx;
  void decodeIfNeeded();
  void decodeNextIfNeeded();
}
function onPracticeTime(listener) {
  timeListener = listener;
}
function stopPracticeAudio() {
  stopTick();
  stopTail();
  stopSource();
  clearPracticeNext();
  startOffset = 0;
  pcm = null;
  bytes = null;
  decodePromise = null;
  if (audio) {
    audio.pause();
    audio.removeAttribute("src");
    audio.load();
  }
  if (objectUrl) {
    URL.revokeObjectURL(objectUrl);
    objectUrl = null;
  }
  loadedSongId = null;
  loadedKind = null;
}
function isPracticeAudioLoaded(songId, kind) {
  return loadedSongId === songId && Boolean(pcm || bytes || audio?.src) && (kind == null || loadedKind === kind);
}
function isPracticeNextLoaded(songId, kind) {
  return nextSongId === songId && Boolean(nextPcm || nextBytes) && (kind == null || nextKind === kind);
}
function practiceAudioArmed() {
  return Boolean(source && startedAt != null);
}
async function findPracticeAudio(songId, files, kind) {
  const folder = folderForSong(songId);
  const names = (kind === "click" ? [practiceClickAudio(files), ...CLICK_CANDIDATES] : [practiceMasterAudio(files), ...MASTER_CANDIDATES]).filter(
    (name, index, list) => Boolean(name) && list.indexOf(name) === index
  );
  for (const name of names) {
    const data = await readPracticeFileBuffer(folder, name) ?? await readPracticeFileBuffer(songId, name);
    if (data) return { path: name, data };
  }
  return null;
}
async function loadPracticeAudio(songId, files, kind = "master") {
  if (isPracticeAudioLoaded(songId, kind)) return true;
  const found = await findPracticeAudio(songId, files, kind);
  if (!found) {
    stopPracticeAudio();
    return false;
  }
  stopTick();
  stopSource();
  startOffset = 0;
  pcm = null;
  decodePromise = null;
  bytes = found.data.slice(0);
  if (objectUrl) URL.revokeObjectURL(objectUrl);
  const type = found.path.toLowerCase().endsWith(".mp3") ? "audio/mpeg" : "audio/flac";
  objectUrl = URL.createObjectURL(new Blob([found.data], { type }));
  const node = element();
  node.pause();
  node.src = objectUrl;
  loadedSongId = songId;
  loadedKind = kind;
  void decodeIfNeeded();
  return true;
}
async function loadPracticeNextAudio(songId, files, kind = "master") {
  if (isPracticeNextLoaded(songId, kind) || isPracticeAudioLoaded(songId, kind)) return true;
  const found = await findPracticeAudio(songId, files, kind);
  if (!found) {
    clearPracticeNext();
    return false;
  }
  stopArmedNext();
  nextPcm = null;
  nextDecodePromise = null;
  nextBytes = found.data.slice(0);
  nextSongId = songId;
  nextKind = kind;
  void decodeNextIfNeeded();
  return true;
}
function armPracticeNextAt(cueSongTime, startOffset2 = 0) {
  if (!practiceCtx || !nextPcm || nextSource) return Boolean(nextSource);
  const remaining = cueSongTime - practiceAudioTime();
  const when = practiceCtx.currentTime + remaining;
  if (remaining < -0.02) {
    return startNextBuffer(startOffset2, practiceCtx.currentTime);
  }
  return startNextBuffer(startOffset2, when);
}
function promoteArmedPracticeNext() {
  if (!nextSongId || !(nextPcm || nextBytes)) return false;
  parkPracticeTail();
  loadedSongId = nextSongId;
  loadedKind = nextKind;
  bytes = nextBytes;
  pcm = nextPcm;
  decodePromise = nextDecodePromise;
  const armed = nextSource;
  if (armed) {
    source = armed;
    startedAt = nextStartedAt;
    startOffset = nextStartOffset;
    webPlaying = Boolean(practiceCtx && startedAt != null && practiceCtx.currentTime >= startedAt);
    armed.onended = () => {
      if (source !== armed) return;
      webPlaying = false;
      startedAt = null;
      stopTick();
      timeListener?.(pcm?.duration ?? startOffset, true);
    };
  }
  nextSource = null;
  nextStartedAt = null;
  nextStartOffset = 0;
  nextSongId = null;
  nextKind = null;
  nextBytes = null;
  nextPcm = null;
  nextDecodePromise = null;
  startTick();
  return true;
}
async function playPracticeAudio(startAt) {
  const offset = Math.max(0, startAt ?? practiceAudioTime());
  startOffset = offset;
  if (practiceCtx?.state === "suspended") {
    await practiceCtx.resume().catch(() => void 0);
  }
  const buffer = await decodeIfNeeded();
  if (buffer && practiceCtx) {
    if (audio && !audio.paused) audio.pause();
    startBuffer(offset);
    startTick();
    return;
  }
  await playHtmlAudio(offset);
  startTick();
}
function pausePracticeAudio() {
  stopTick();
  stopTail();
  stopArmedNext();
  if (webPlaying || practiceAudioArmed()) {
    stopSource();
    return;
  }
  audio?.pause();
  if (audio) startOffset = audio.currentTime;
}
function seekPracticeAudio(time) {
  const next = Math.max(0, time);
  startOffset = next;
  stopArmedNext();
  if (webPlaying && pcm && practiceCtx) {
    startBuffer(next);
    startTick();
    return;
  }
  if (!audio) return;
  try {
    audio.currentTime = next;
  } catch {
  }
}
function practiceAudioPlaying() {
  if (webPlaying) return true;
  return Boolean(audio && !audio.paused && !audio.ended);
}
function practiceAudioTime() {
  if (source && practiceCtx && startedAt != null) {
    const duration = pcm?.duration ?? Number.POSITIVE_INFINITY;
    return Math.max(0, Math.min(duration, startOffset + (practiceCtx.currentTime - startedAt)));
  }
  if (audio && !audio.paused && !webPlaying) return audio.currentTime;
  return startOffset || audio?.currentTime || 0;
}
function practiceAudioDuration() {
  if (pcm && pcm.duration > 0) return pcm.duration;
  const value = audio?.duration;
  return Number.isFinite(value) && (value ?? 0) > 0 ? value : 0;
}

// apps/web/src/practice/github-sync.ts
var BUILD = typeof __APP_BUILD__ === "string" ? __APP_BUILD__ : "dev";
function clientLibraryUrl(relPath = "") {
  const base = import.meta.env.BASE_URL || "/";
  const root = base.endsWith("/") ? `${base}client-library` : `${base}/client-library`;
  if (!relPath) return root;
  return `${root}/${relPath.replace(/^\//, "")}`;
}
function cacheBusted(url) {
  const join = url.includes("?") ? "&" : "?";
  return `${url}${join}v=${encodeURIComponent(BUILD)}&t=${Date.now()}`;
}
function encodeRel(rel) {
  return rel.split("/").map((part) => encodeURIComponent(part)).join("/");
}
function bufferLooksLikeSongJson(data) {
  try {
    const parsed = JSON.parse(new TextDecoder().decode(data));
    return Boolean(parsed && typeof parsed === "object" && !Array.isArray(parsed));
  } catch {
    return false;
  }
}
async function practiceChartLooksValid(folder, path) {
  const raw = await readPracticeFileBuffer(folder, path);
  return Boolean(raw && bufferLooksLikeSongJson(raw));
}
async function fetchClientLibraryIndex() {
  const response = await fetch(cacheBusted(clientLibraryUrl("index.json")), { cache: "reload" });
  if (response.status === 404) return null;
  if (!response.ok) throw new Error(`Library ${response.status}`);
  return await response.json();
}
function wait(ms) {
  return new Promise((resolve2) => {
    window.setTimeout(resolve2, ms);
  });
}
async function fetchPublishedBuffer(url) {
  let lastError = "Network error";
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const response = await fetch(cacheBusted(url), { cache: "reload" });
      if (!response.ok) {
        lastError = `HTTP ${response.status}`;
        await wait(400 * attempt);
        continue;
      }
      return await response.arrayBuffer();
    } catch (error) {
      lastError = error instanceof Error ? error.message : "Network error";
      await wait(400 * attempt);
    }
  }
  throw new Error(lastError);
}
async function downloadQueue(queue, changedFolders, onProgress) {
  let files = 0;
  for (const [indexNum, item] of queue.entries()) {
    onProgress?.({
      message: `Downloading ${item.title} (${indexNum + 1}/${queue.length})\u2026`
    });
    const payload = await fetchPublishedBuffer(
      clientLibraryUrl(`songs/${encodeRel(item.folder)}/${encodeRel(item.file.path)}`)
    );
    if (item.file.path.toLowerCase() === "song.json" && !bufferLooksLikeSongJson(payload)) {
      throw new Error(`Could not download ${item.title}: song.json`);
    }
    await writePracticeFile(item.folder, item.file.path, payload, item.file.hash);
    changedFolders.add(item.folder);
    files += 1;
  }
  return files;
}
async function syncPublishedLibrary(onProgress, options = {}) {
  onProgress?.({ message: "Checking library\u2026" });
  const index = await fetchClientLibraryIndex();
  if (!index) return { songs: 0, files: 0, gigs: 0, tracks: null };
  const local = await listPracticeManifest();
  const remoteFolders = new Set(index.songs.map((song) => song.folder));
  const queue = withPublishedChartSettings(publishedLibraryMissing(index, local), index);
  for (const song of index.songs) {
    const chart = song.files.find((file) => file.path.toLowerCase() === "song.json");
    if (!chart) continue;
    if (await practiceChartLooksValid(song.folder, chart.path)) continue;
    if (queue.some((item) => item.folder === song.folder && item.file.path === chart.path)) continue;
    queue.push({ folder: song.folder, title: publishedSongTitle(song), file: chart });
  }
  const trackQueue = options.tracks === false ? [] : queue.filter((item) => isMasterPracticeAudio(item.file.path));
  const readable = queue.filter((item) => !isMasterPracticeAudio(item.file.path));
  let songs = 0;
  const changedFolders = /* @__PURE__ */ new Set();
  const files = await downloadQueue(readable, changedFolders, onProgress);
  for (const song of index.songs) {
    const remotePaths = new Set(
      song.files.filter((file) => isPracticeFile(file.path)).map((file) => file.path)
    );
    for (const item of local[song.folder] ?? []) {
      if (item.path.toLowerCase() === "song.json" && !remotePaths.has(item.path)) continue;
      if (!remotePaths.has(item.path)) {
        await deletePracticeFile(song.folder, item.path);
        changedFolders.add(song.folder);
      }
    }
    await applyPublishedSongTitle(song);
    if (changedFolders.has(song.folder) || !local[song.folder]) songs += 1;
  }
  const leftover = publishedLibraryMissing(index, await listPracticeManifest()).filter(
    (item) => !isMasterPracticeAudio(item.file.path)
  );
  if (leftover.length > 0) {
    const first = leftover[0];
    throw new Error(`Library incomplete: ${first?.title ?? "song"} (${leftover.length} files left).`);
  }
  for (const folder of localFoldersNotOnRemote(Object.keys(local), [...remoteFolders])) {
    await deletePracticeFolder(folder);
  }
  let gigs = [];
  if (index.gigs) {
    onProgress?.({ message: "Downloading setlist\u2026" });
    const payload = JSON.parse(
      new TextDecoder().decode(await fetchPublishedBuffer(clientLibraryUrl(index.gigs.path)))
    );
    gigs = Array.isArray(payload.gigs) ? payload.gigs : [];
  }
  await writePublishedGigs(gigs);
  onProgress?.({ message: "Library ready." });
  const tracks = trackQueue.length > 0 ? downloadQueue(trackQueue, /* @__PURE__ */ new Set(), options.onTracks ?? onProgress) : null;
  return { songs, files, gigs: gigs.length, tracks };
}
async function applyPublishedSongTitle(song) {
  const title = publishedSongTitle(song);
  const raw = await readPracticeFileBuffer(song.folder, "song.json");
  if (!raw) return;
  try {
    const packed = JSON.parse(new TextDecoder().decode(raw));
    const current = typeof packed.title === "string" ? packed.title.trim() : "";
    if (current === title) return;
    if (current && current !== song.folder && current !== song.id) return;
    packed.title = title;
    if (typeof packed.id !== "string" || !packed.id.trim()) packed.id = song.id;
    const body = new TextEncoder().encode(`${JSON.stringify(packed, null, 2)}
`);
    await writePracticeFile(
      song.folder,
      "song.json",
      body.buffer.slice(body.byteOffset, body.byteOffset + body.byteLength)
    );
  } catch {
  }
}

// apps/web/src/native/sync-host.ts
var SYNC_PORT = 8787;
var PRACTICE_SHARE_PORT = 8788;
function parseSyncHostname(host) {
  return host.trim().replace(/^wss?:\/\//i, "").replace(/^https?:\/\//i, "").replace(/\/.*$/, "").replace(/:\d+$/, "");
}
function practiceSharePageOrigin() {
  if (typeof window === "undefined") return null;
  if (window.location.port !== String(PRACTICE_SHARE_PORT)) return null;
  return window.location.origin;
}
function stageHomeScreenRole() {
  return practiceSharePageOrigin() !== null;
}
function httpSyncOrigin(host) {
  const page = practiceSharePageOrigin();
  if (page) return page;
  const hostname = parseSyncHostname(host);
  if (!hostname) return null;
  return `http://${hostname}:${PRACTICE_SHARE_PORT}`;
}
function syncSocketUrls(host) {
  const hostname = parseSyncHostname(host);
  if (!hostname) return [];
  return [`ws://${hostname}:${PRACTICE_SHARE_PORT}/sync`, `ws://${hostname}:${SYNC_PORT}/sync`];
}

// apps/web/src/native/sync.ts
var MASTER_HOST_KEY = "dbk-master-host";
var STAGE_NAME_KEY = "dbk-stage-name";
function clientDeviceName() {
  if (typeof navigator === "undefined") return "Client";
  const ua = navigator.userAgent;
  if (/iPad/i.test(ua) || /Macintosh/i.test(ua) && navigator.maxTouchPoints > 1) return "iPad";
  if (/Android/i.test(ua)) return "Android";
  if (/iPhone/i.test(ua)) return "iPhone";
  return "Client";
}
function isFollowerKind(kind) {
  return kind === "client" || kind === "remote";
}
function clientPeerCount(peers) {
  return peers.filter((peer) => peer.deviceKind === "client").length;
}
function helloAcknowledged(message, deviceName) {
  if (message.type === "LoadGig" || message.type === "Position") return true;
  if (message.type !== "Peers") return false;
  const name = deviceName.trim();
  if (!name) return message.peers.some((peer) => peer.deviceKind === "client");
  const key = normalizeBandName(name);
  return message.peers.some(
    (peer) => peer.deviceKind === "client" && normalizeBandName(peer.deviceName) === key
  );
}
var connections = /* @__PURE__ */ new Set();
var socket = null;
var sendImpl = () => {
};
var lastShow = "";
var lastPosition = "";
var reconnectTimer = 0;
var allowReconnect = false;
var seenMasterSessionId = null;
var nativeServerStarted = false;
var hostPumpTimer = 0;
var HOST_POLL_MS = 250;
var HEARTBEAT_MS = 2e3;
var LINK_STALE_MS = 7e3;
var heartbeatTimer = 0;
var watchdogTimer = 0;
var lastInboundAt = 0;
var sawHeartbeat = false;
var httpEpoch = 0;
var httpSession = null;
function releaseHttpSession() {
  const session = httpSession;
  httpSession = null;
  if (!session) return;
  void fetch(`${session.root}/sync-http/session/${session.id}`, {
    method: "DELETE",
    cache: "no-store",
    keepalive: true
  }).catch(() => {
  });
}
var linkState = {
  connected: false,
  hosting: false,
  endpoint: null,
  peerCount: 0,
  peers: []
};
var linkListeners = /* @__PURE__ */ new Set();
function setLink(patch) {
  linkState = { ...linkState, ...patch };
  for (const listener of linkListeners) listener(linkState);
}
function subscribeSyncLink(listener) {
  linkListeners.add(listener);
  listener(linkState);
  return () => {
    linkListeners.delete(listener);
  };
}
async function refreshJoinAddress() {
  const address = await nativeJoinAddress();
  if (address) setLink({ endpoint: address });
  return address;
}
function sendSyncMessage(message) {
  sendImpl(message);
}
function startHeartbeat() {
  if (heartbeatTimer) return;
  heartbeatTimer = window.setInterval(() => {
    sendImpl({ type: "Heartbeat" });
  }, HEARTBEAT_MS);
}
function stopHeartbeat() {
  window.clearInterval(heartbeatTimer);
  heartbeatTimer = 0;
}
function markInbound() {
  lastInboundAt = Date.now();
}
function stopLinkWatchdog() {
  window.clearInterval(watchdogTimer);
  watchdogTimer = 0;
}
function startLinkWatchdog(onDead) {
  stopLinkWatchdog();
  markInbound();
  watchdogTimer = window.setInterval(() => {
    if (!sawHeartbeat || !linkState.connected) return;
    if (Date.now() - lastInboundAt < LINK_STALE_MS) return;
    stopLinkWatchdog();
    onDead();
  }, 1e3);
}
function announceSyncHello(deviceKind, deviceName) {
  const name = deviceName.trim();
  if (!name) return;
  sendImpl({
    type: "Hello",
    protocolVersion: PROTOCOL_VERSION,
    deviceKind,
    deviceName: name,
    deviceId: deviceKind === "master" ? "master" : sessionClientId(),
    ...deviceKind === "master" ? { sessionId: masterBootSessionId() } : {}
  });
}
function rememberOutgoing(message, raw = JSON.stringify(message)) {
  if (message.type === "LoadGig") lastShow = raw;
  if (message.type === "Position") lastPosition = raw;
  if (message.type === "Stop") lastPosition = "";
  if (message.type === "LoadSong" && lastPosition) {
    try {
      lastPosition = JSON.stringify({
        ...JSON.parse(lastPosition),
        songId: message.songId,
        setlistEntryId: message.setlistEntryId,
        playing: false
      });
    } catch {
      lastPosition = "";
    }
  }
}
function lanInterfaceRank(name) {
  if (name === "en0") return 0;
  if (name.startsWith("en")) return 1;
  if (name.startsWith("pdp_ip") || name.startsWith("bridge")) return 3;
  return 2;
}
async function lanAddress() {
  try {
    const { SyncSocket: SyncSocket2 } = await Promise.resolve().then(() => (init_sync_socket(), sync_socket_exports));
    const result = await SyncSocket2.lanAddress();
    if (result.address) return result.address;
  } catch {
  }
  try {
    const { WebsocketServer: WebsocketServer2 } = await Promise.resolve().then(() => (init_esm(), esm_exports));
    const interfaces = await WebsocketServer2.getInterfaces();
    const names = Object.keys(interfaces).sort((left, right) => lanInterfaceRank(left) - lanInterfaceRank(right));
    for (const name of names) {
      if (name.startsWith("lo") || name.startsWith("utun") || name.startsWith("awdl")) continue;
      const ip = interfaces[name]?.ipv4Addresses?.find(
        (address) => !address.startsWith("127.") && !address.startsWith("169.254.")
      );
      if (ip) return ip;
    }
  } catch {
    return null;
  }
  return null;
}
async function nativeJoinAddress() {
  if (!isNativeApp()) return null;
  try {
    const ip = await lanAddress();
    return ip ? `${ip}:${SYNC_PORT}` : null;
  } catch {
    return null;
  }
}
function masterBootSessionId() {
  const key = "__dbkMasterSessionId";
  const store = globalThis;
  store.__dbkMasterSessionId ?? (store.__dbkMasterSessionId = randomUuid());
  return store.__dbkMasterSessionId;
}
function hookSyncHost(hooks) {
  const raw = typeof hooks.syncHost === "function" ? hooks.syncHost() : hooks.syncHost;
  return raw?.trim() ?? "";
}
function handleIncoming(message, hooks, fromPeer = false) {
  markInbound();
  if (message.type === "Heartbeat") {
    sawHeartbeat = true;
    return;
  }
  if (message.type === "Peers") {
    setLink({ peers: message.peers, peerCount: clientPeerCount(message.peers) });
    if (isFollowerKind(hooks.deviceKind())) {
      const update = masterSessionUpdate(seenMasterSessionId, message.masterSessionId);
      seenMasterSessionId = update.sessionId;
      if (update.restarted) hooks.onMasterSessionReset?.();
    }
    return;
  }
  if (hooks.deviceKind() === "master") {
    if (fromPeer && message.type === "Hello" && (message.deviceKind === "client" || message.deviceKind === "remote")) {
      hooks.onClientHello();
    }
    if (fromPeer && message.type === "SetlistEdit") {
      hooks.onClientSync(message);
    }
    if (fromPeer && (message.type === "RemoteControl" || message.type === "RemoteMixer")) {
      hooks.onClientSync(message);
    }
    return;
  }
  if (message.type === "Hello" && message.deviceKind === "master") {
    const update = masterSessionUpdate(seenMasterSessionId, message.sessionId);
    seenMasterSessionId = update.sessionId;
    if (update.restarted) {
      hooks.onMasterSessionReset?.();
      return;
    }
  }
  hooks.onClientSync(message);
}
var nativePeers = /* @__PURE__ */ new Map();
var httpPeerIds = /* @__PURE__ */ new Set();
var sendNativeRaw = null;
function publishNativeRoster() {
  const peers = [...nativePeers.values()];
  const raw = JSON.stringify({
    type: "Peers",
    peers,
    masterSessionId: masterBootSessionId()
  });
  setLink({ peers, peerCount: clientPeerCount(peers) });
  for (const uuid of connections) sendNativeRaw?.(uuid, raw);
}
function applyNativeHostEvent(kind, event, hooks) {
  const uuid = String(event.uuid ?? "");
  if (kind === "open") {
    if (!uuid) return;
    connections.add(uuid);
    setLink({ connected: true, hosting: true, peerCount: clientPeerCount(linkState.peers) });
    if (lastShow) sendNativeRaw?.(uuid, lastShow);
    if (lastPosition) sendNativeRaw?.(uuid, lastPosition);
    publishNativeRoster();
    return;
  }
  if (kind === "close") {
    connections.delete(uuid);
    nativePeers.delete(uuid);
    publishNativeRoster();
    return;
  }
  if (uuid) connections.add(uuid);
  const raw = String(event.message ?? "");
  const message = parseSyncMessage(raw);
  if (!message) return;
  rememberOutgoing(message, raw);
  if (message.type === "Hello") {
    for (const [id, peer] of nativePeers) {
      if (peer.deviceId === message.deviceId) nativePeers.delete(id);
    }
    nativePeers.set(uuid, {
      deviceId: message.deviceId,
      deviceKind: message.deviceKind,
      deviceName: message.deviceName
    });
    publishNativeRoster();
  }
  for (const peer of connections) {
    if (peer === uuid) continue;
    sendNativeRaw?.(peer, raw);
  }
  handleIncoming(message, hooks, true);
}
function greetNativeClient(uuid, hooks) {
  connections.add(uuid);
  if (lastShow) sendNativeRaw?.(uuid, lastShow);
  if (lastPosition) sendNativeRaw?.(uuid, lastPosition);
  hooks.onClientHello();
}
function applyNativePeers(peers, hooks) {
  const seen = /* @__PURE__ */ new Set();
  let changed = false;
  for (const peer of peers) {
    const uuid = peer.uuid?.trim();
    const deviceName = peer.deviceName?.trim();
    const deviceKind = peer.deviceKind === "remote" ? "remote" : peer.deviceKind === "client" ? "client" : null;
    if (!uuid || !deviceName || !deviceKind) continue;
    seen.add(uuid);
    httpPeerIds.add(uuid);
    const next = {
      deviceId: peer.deviceId?.trim() || uuid,
      deviceKind,
      deviceName
    };
    const prev = nativePeers.get(uuid);
    if (prev && prev.deviceId === next.deviceId && prev.deviceKind === next.deviceKind && prev.deviceName === next.deviceName) {
      connections.add(uuid);
      continue;
    }
    nativePeers.set(uuid, next);
    connections.add(uuid);
    changed = true;
    if (!prev) {
      greetNativeClient(uuid, hooks);
    }
  }
  for (const uuid of [...httpPeerIds]) {
    if (seen.has(uuid)) continue;
    httpPeerIds.delete(uuid);
    nativePeers.delete(uuid);
    connections.delete(uuid);
    changed = true;
  }
  if (changed) publishNativeRoster();
}
function startHostPump(hooks) {
  if (hostPumpTimer) return;
  const tick3 = async () => {
    try {
      const { SyncSocket: SyncSocket2 } = await Promise.resolve().then(() => (init_sync_socket(), sync_socket_exports));
      const { events, peers } = await SyncSocket2.drainHost();
      for (const event of events ?? []) {
        const kind = event.type === "open" || event.type === "close" ? event.type : "message";
        applyNativeHostEvent(kind, event, hooks);
      }
      applyNativePeers(peers ?? [], hooks);
    } catch {
    }
  };
  hostPumpTimer = window.setInterval(() => void tick3(), HOST_POLL_MS);
  void tick3();
}
async function startNativeMaster(hooks) {
  const { SyncSocket: SyncSocket2 } = await Promise.resolve().then(() => (init_sync_socket(), sync_socket_exports));
  sendNativeRaw = (uuid, message) => {
    void SyncSocket2.hostSend({ uuid, message });
  };
  if (!nativeServerStarted) {
    await SyncSocket2.startHost({ port: SYNC_PORT });
    nativeServerStarted = true;
  }
  startHostPump(hooks);
  sendImpl = (message) => {
    const raw = JSON.stringify(message);
    rememberOutgoing(message, raw);
    for (const uuid of connections) {
      if (!syncMessageWantedBy(message, nativePeers.get(uuid)?.deviceKind)) continue;
      void SyncSocket2.hostSend({ uuid, message: raw });
    }
  };
  startHeartbeat();
  hooks.onMasterOpen();
  try {
    await SyncSocket2.advertise({ port: SYNC_PORT });
  } catch {
  }
  const address = await nativeJoinAddress();
  setLink({
    connected: true,
    hosting: true,
    endpoint: address,
    peers: [...nativePeers.values()],
    peerCount: clientPeerCount([...nativePeers.values()])
  });
  return address;
}
function connectBrowserSocket(url, hooks, onConnectFail, retryAll) {
  if (socket) {
    socket.onopen = null;
    socket.onmessage = null;
    socket.onclose = null;
    try {
      socket.close();
    } catch {
    }
    socket = null;
  }
  try {
    socket = new WebSocket(url);
  } catch {
    onConnectFail();
    return;
  }
  const current = socket;
  let opened = false;
  const giveUp = window.setTimeout(() => {
    if (opened || socket !== current) return;
    current.onclose = null;
    try {
      current.close();
    } catch {
    }
    onConnectFail();
  }, 2e3);
  sendImpl = (message) => {
    if (!socket || socket.readyState !== WebSocket.OPEN) return;
    const raw = JSON.stringify(message);
    rememberOutgoing(message, raw);
    socket.send(raw);
  };
  const helloName = hooks.deviceKind() === "master" ? "Master" : hooks.deviceKind() === "remote" ? hooks.deviceName?.().trim() || REMOTE_DEVICE_NAME : hooks.deviceName?.().trim() || clientDeviceName();
  current.onopen = () => {
    if (socket !== current) return;
    window.clearTimeout(giveUp);
    opened = true;
    if (hooks.deviceKind() === "master") setLink({ connected: true, hosting: false });
    sendImpl({
      type: "Hello",
      protocolVersion: PROTOCOL_VERSION,
      deviceKind: hooks.deviceKind(),
      deviceName: helloName,
      deviceId: hooks.deviceKind() === "master" ? "master" : sessionClientId(),
      ...hooks.deviceKind() === "master" ? { sessionId: masterBootSessionId() } : {}
    });
    if (hooks.deviceKind() === "master") hooks.onMasterOpen();
  };
  current.onmessage = (event) => {
    if (socket !== current) return;
    const message = parseSyncMessage(String(event.data));
    if (!message) return;
    if (helloAcknowledged(message, helloName)) setLink({ connected: true, hosting: false });
    handleIncoming(message, hooks, true);
  };
  current.onclose = () => {
    if (socket !== current) return;
    window.clearTimeout(giveUp);
    setLink({ connected: false, hosting: false, peerCount: 0, peers: [] });
    window.clearTimeout(reconnectTimer);
    if (!allowReconnect) return;
    if (!opened) {
      onConnectFail();
      return;
    }
    reconnectTimer = window.setTimeout(retryAll, 2e3);
  };
}
function sessionClientId() {
  const key = "dbk-client-id";
  const existing = sessionStorage.getItem(key);
  if (existing) return existing;
  const id = `client_${randomUuid()}`;
  sessionStorage.setItem(key, id);
  return id;
}
function dropCurrentLink() {
  httpEpoch += 1;
  releaseHttpSession();
  void dropNativeClientListeners();
  void Promise.resolve().then(() => (init_sync_socket(), sync_socket_exports)).then(({ SyncSocket: SyncSocket2 }) => SyncSocket2.close()).catch(() => void 0);
  if (socket) {
    socket.onopen = null;
    socket.onmessage = null;
    socket.onclose = null;
    try {
      socket.close();
    } catch {
    }
    socket = null;
  }
  sendImpl = () => {
  };
  setLink({ connected: false, hosting: false, peerCount: 0, peers: [] });
}
function disconnectSyncTransport() {
  seenMasterSessionId = null;
  allowReconnect = false;
  stopHeartbeat();
  stopLinkWatchdog();
  sawHeartbeat = false;
  httpEpoch += 1;
  releaseHttpSession();
  window.clearTimeout(reconnectTimer);
  void dropNativeClientListeners();
  void Promise.resolve().then(() => (init_sync_socket(), sync_socket_exports)).then(({ SyncSocket: SyncSocket2 }) => SyncSocket2.close()).catch(() => void 0);
  if (socket) {
    socket.onopen = null;
    socket.onmessage = null;
    socket.onclose = null;
    try {
      socket.close();
    } catch {
    }
    socket = null;
  }
  sendImpl = () => {
  };
  setLink({ connected: false, hosting: false, peerCount: 0, peers: [] });
}
async function connectSyncTransport(hooks) {
  window.clearTimeout(reconnectTimer);
  allowReconnect = true;
  if (isNativeApp() && hooks.deviceKind() === "master") {
    return startNativeMaster(hooks);
  }
  const host = hookSyncHost(hooks);
  const protocol = window.location.protocol === "https:" ? "wss" : "ws";
  const hostname = parseSyncHostname(host) || practiceSharePageOrigin()?.replace(/^https?:\/\//, "").replace(/:\d+$/, "") || "";
  const urls = hostname ? syncSocketUrls(hostname) : [`${protocol}://${window.location.host}/sync`];
  const httpRoot = practiceSharePageOrigin() ?? httpSyncOrigin(host);
  setLink({
    connected: false,
    hosting: false,
    endpoint: hostname ? `${hostname}:${SYNC_PORT}` : null,
    peerCount: 0,
    peers: []
  });
  const retry = () => {
    if (!allowReconnect) return;
    if (isFollowerKind(hooks.deviceKind()) && !hookSyncHost(hooks) && !practiceSharePageOrigin()) return;
    void connectSyncTransport(hooks);
  };
  if (hooks.deviceKind() === "master") startHeartbeat();
  else {
    startLinkWatchdog(() => {
      dropCurrentLink();
      window.clearTimeout(reconnectTimer);
      reconnectTimer = window.setTimeout(retry, 250);
    });
  }
  if (httpRoot) connectPreferSocket(httpRoot, urls, hooks, retry);
  else connectFollower(urls, hooks, retry);
  return hostname ? `${hostname}:${SYNC_PORT}` : null;
}
function connectPreferSocket(httpRoot, urls, hooks, retryAll) {
  let index = 0;
  const trySocket = () => {
    if (!allowReconnect) return;
    const url = urls[index];
    if (!url) {
      void connectHttpFollower(httpRoot, hooks, retryAll).catch(() => {
        if (!allowReconnect) return;
        window.clearTimeout(reconnectTimer);
        reconnectTimer = window.setTimeout(retryAll, 2e3);
      });
      return;
    }
    index += 1;
    const onFail = () => {
      if (!allowReconnect) return;
      trySocket();
    };
    if (isNativeApp()) void connectNativeClientSocket(url, hooks, onFail, retryAll);
    else connectBrowserSocket(url, hooks, onFail, retryAll);
  };
  trySocket();
}
async function connectHttpFollower(root, hooks, retryAll) {
  const epoch = ++httpEpoch;
  const helloName = hooks.deviceKind() === "remote" ? hooks.deviceName?.().trim() || REMOTE_DEVICE_NAME : hooks.deviceName?.().trim() || clientDeviceName();
  const helloMessage = {
    type: "Hello",
    protocolVersion: PROTOCOL_VERSION,
    deviceKind: hooks.deviceKind(),
    deviceName: helloName,
    deviceId: hooks.deviceKind() === "master" ? "master" : sessionClientId()
  };
  const hello = JSON.stringify(helloMessage);
  rememberOutgoing(helloMessage, hello);
  const created = await fetch(`${root}/sync-http/session`, {
    method: "POST",
    cache: "no-store",
    headers: { "Content-Type": "text/plain;charset=UTF-8" },
    body: hello,
    signal: AbortSignal.timeout(4e3)
  });
  if (!created.ok) throw new Error("http session");
  const { id, messages } = await created.json();
  if (!id) throw new Error("http session");
  httpSession = { root, id };
  setLink({ connected: false, hosting: false });
  const postMessage2 = async (raw) => {
    if (epoch !== httpEpoch) return;
    await fetch(`${root}/sync-http/session/${id}`, {
      method: "POST",
      body: raw,
      cache: "no-store",
      headers: { "Content-Type": "text/plain;charset=UTF-8" },
      signal: AbortSignal.timeout(4e3)
    });
  };
  sendImpl = (message) => {
    if (epoch !== httpEpoch) return;
    const raw = JSON.stringify(message);
    rememberOutgoing(message, raw);
    void postMessage2(raw);
  };
  const markLive = () => {
    if (epoch === httpEpoch) setLink({ connected: true, hosting: false });
  };
  const applyBatch = (raws) => {
    for (const raw of raws) {
      const message = parseSyncMessage(raw);
      if (!message) continue;
      if (helloAcknowledged(message, helloName)) markLive();
      handleIncoming(message, hooks, true);
    }
  };
  applyBatch(messages ?? []);
  let misses = 0;
  const poll = async () => {
    while (allowReconnect && epoch === httpEpoch) {
      try {
        const res = await fetch(`${root}/sync-http/session/${id}`, { cache: "no-store" });
        if (!res.ok) throw new Error("poll");
        misses = 0;
        const data = await res.json();
        applyBatch(data.messages ?? []);
      } catch {
        if (epoch !== httpEpoch || !allowReconnect) return;
        misses += 1;
        if (misses < 3) continue;
        setLink({ connected: false, hosting: false, peerCount: 0, peers: [] });
        retryAll();
        return;
      }
    }
  };
  void poll();
}
function connectFollower(urls, hooks, retryAll) {
  let index = 0;
  const attempt = () => {
    const url = urls[index];
    if (!url) {
      window.clearTimeout(reconnectTimer);
      reconnectTimer = window.setTimeout(retryAll, 2e3);
      return;
    }
    index += 1;
    if (isNativeApp()) void connectNativeClientSocket(url, hooks, attempt, retryAll);
    else connectBrowserSocket(url, hooks, attempt, retryAll);
  };
  attempt();
}
var nativeClientUnsubs = [];
async function dropNativeClientListeners() {
  const pending = nativeClientUnsubs;
  nativeClientUnsubs = [];
  await Promise.all(pending.map((handle) => handle.remove().catch(() => void 0)));
}
async function connectNativeClientSocket(url, hooks, onConnectFail, retryAll) {
  const { SyncSocket: SyncSocket2 } = await Promise.resolve().then(() => (init_sync_socket(), sync_socket_exports));
  await dropNativeClientListeners();
  try {
    await SyncSocket2.close();
  } catch {
  }
  sendImpl = (message) => {
    const raw = JSON.stringify(message);
    rememberOutgoing(message, raw);
    void SyncSocket2.send({ message: raw });
  };
  nativeClientUnsubs = await Promise.all([
    SyncSocket2.addListener("message", (event) => {
      const message = parseSyncMessage(String(event.data ?? ""));
      if (!message) return;
      handleIncoming(message, hooks, true);
    }),
    SyncSocket2.addListener("close", () => {
      setLink({ connected: false, hosting: false, peerCount: 0, peers: [] });
      window.clearTimeout(reconnectTimer);
      if (!allowReconnect) return;
      reconnectTimer = window.setTimeout(retryAll, 2e3);
    })
  ]);
  try {
    await SyncSocket2.wakeLocalNetwork();
    await Promise.race([
      SyncSocket2.connect({ url }),
      new Promise((_, reject) => {
        window.setTimeout(() => reject(new Error("timeout")), 2500);
      })
    ]);
    setLink({ connected: true, hosting: false });
    sendImpl({
      type: "Hello",
      protocolVersion: PROTOCOL_VERSION,
      deviceKind: hooks.deviceKind(),
      deviceName: hooks.deviceKind() === "remote" ? hooks.deviceName?.().trim() || REMOTE_DEVICE_NAME : hooks.deviceName?.().trim() || clientDeviceName(),
      deviceId: hooks.deviceKind() === "master" ? "master" : sessionClientId()
    });
  } catch {
    try {
      await SyncSocket2.close();
    } catch {
    }
    setLink({ connected: false, hosting: false, peerCount: 0, peers: [] });
    if (!allowReconnect) return;
    onConnectFail();
  }
}

// apps/web/src/practice/pull.ts
function joinUrl(base, path) {
  const trimmed = base.replace(/\/$/, "");
  return `${trimmed}${path.startsWith("/") ? path : `/${path}`}`;
}
function practiceHostFromInput(value) {
  const raw = value.trim().replace(/^https?:\/\//, "").replace(/\/.*$/, "");
  if (!raw) return "";
  if (raw.includes(":")) return `http://${raw}`;
  if (raw === "localhost" || raw === "127.0.0.1") {
    return `http://${raw}:${window.location.port || "5173"}`;
  }
  return `http://${raw}:${PRACTICE_SHARE_PORT}`;
}
async function fetchPracticeIndex(base) {
  const response = await fetch(joinUrl(base, "/practice/index.json"));
  if (!response.ok) throw new Error(`Practice index ${response.status}`);
  return await response.json();
}
async function pullPracticeFromHost(base) {
  const index = await fetchPracticeIndex(base);
  const local = await listPracticeManifest();
  let songs = 0;
  for (const song of index.songs) {
    const have = new Map((local[song.folder] ?? []).map((item) => [item.path, item.size]));
    let changed = false;
    for (const file of song.files) {
      if (!isPracticeFile(file.path)) continue;
      if (have.get(file.path) === file.size) continue;
      const response = await fetch(
        joinUrl(
          base,
          `/practice/songs/${encodeURIComponent(song.folder)}/${file.path.split("/").map((part) => encodeURIComponent(part)).join("/")}`
        )
      );
      if (!response.ok) continue;
      await writePracticeFile(song.folder, file.path, await response.arrayBuffer());
      changed = true;
    }
    if (changed || !local[song.folder]) songs += 1;
  }
  return songs;
}

// apps/web/src/ui/master/song-mixer.ts
async function loadSongMixer(songId) {
  try {
    const settings = await readSongSettings(songId);
    if (settings.mixer != null) return parseMixerBank(settings.mixer);
    return null;
  } catch {
    return null;
  }
}
async function loadSongMixers(songIds) {
  const entries = await Promise.all(
    songIds.map(async (songId) => {
      const bank = await loadSongMixer(songId);
      return bank ? [songId, bank] : null;
    })
  );
  const out = {};
  for (const entry of entries) {
    if (entry) out[entry[0]] = entry[1];
  }
  return out;
}
async function saveSongMixer(songId, bank) {
  await updateSongSettings(songId, (settings) => ({ ...settings, mixer: bank }));
}

// apps/web/src/store/stage-connect.ts
function stageConnectOn(state) {
  if (state.deviceKind === "remote") return state.clientSession === "stage" && state.syncConnected;
  if (state.deviceKind === "client") return state.clientSession === "stage" && state.syncConnected;
  return state.syncConnected && isBandNameConnected(VOCAL_BAND_NAME, state.syncPeers);
}

// apps/web/src/store/master-store.ts
var AUDIO_DEVICE_KEY = "dbk-audio-device";
var AUDIO_ROUTING_KEY = "dbk-audio-routing";
var PLAYHEAD_TRIM_KEY = "dbk-playhead-trim";
var PLAYHEAD_TRIM_MAX_MS = 500;
var ACTIVE_GIG_KEY = "dbk-active-gig";
function readStored(key) {
  try {
    return typeof localStorage === "undefined" ? null : localStorage.getItem(key);
  } catch {
    return null;
  }
}
function writeStored(key, value) {
  try {
    localStorage?.setItem(key, value);
  } catch {
  }
}
function storedAudioDevice() {
  return readStored(AUDIO_DEVICE_KEY) || "default";
}
function storedPlayheadTrim() {
  const ms = Number(readStored(PLAYHEAD_TRIM_KEY));
  if (!Number.isFinite(ms)) return 0;
  return Math.max(-PLAYHEAD_TRIM_MAX_MS, Math.min(PLAYHEAD_TRIM_MAX_MS, Math.round(ms))) / 1e3;
}
function storedRoutingMode() {
  const value = Number(readStored(AUDIO_ROUTING_KEY));
  return value === 2 || value === 3 ? value : 1;
}
function storedStageName() {
  return readStored(STAGE_NAME_KEY)?.trim() || null;
}
function setlistStartsOpen() {
  if (typeof window === "undefined") return true;
  return window.innerWidth >= 560;
}
var STAGE_ZOOM_MIN = 0.6;
var STAGE_ZOOM_MAX = 2;
function isStageContentPage(page) {
  return page === "lyrics" || page === "nota" || page === "chords" || page === "drums";
}
function stagePageCanZoom(page) {
  return isStageContentPage(page) && page !== "nota";
}
function clampStageZoom(value) {
  return Math.min(STAGE_ZOOM_MAX, Math.max(STAGE_ZOOM_MIN, Math.round(value * 10) / 10));
}
var logger = createLogger(false ? void 0 : () => void 0);
var engine = new WebAudioEngine(logger);
var beatListeners = /* @__PURE__ */ new Set();
var lastMetronomeBeat = null;
function notifyMetronomeBeat(beat) {
  lastMetronomeBeat = beat;
  for (const listener of beatListeners) listener(beat);
}
function clearMetronomeBeat() {
  lastMetronomeBeat = null;
  remoteMetroSeq = null;
}
function metronomeVisualNow() {
  return typeof performance !== "undefined" ? performance.now() / 1e3 : 0;
}
function audioBeatDelay(audioAt) {
  return Math.max(0, audioAt - engine.getContextTime());
}
function remoteMetronomeVisualAt(delaySeconds) {
  return metronomeVisualNow() + Math.max(0, delaySeconds ?? 0);
}
var remoteMetroSeq = null;
var metronomeSeq = 0;
var metronomeStartGen = 0;
function takeRemoteMetronomeSeq(prev, seq) {
  if (typeof seq !== "number" || !Number.isFinite(seq)) return null;
  if (prev != null && seq <= prev) return null;
  return seq;
}
var metronome = new Metronome(
  (running) => engine.setExternalCueActive(running),
  (beat) => {
    const delay = audioBeatDelay(beat.at) + visualLatency();
    notifyMetronomeBeat({ at: remoteMetronomeVisualAt(delay) });
    const state = useMasterStore.getState();
    if (state.deviceKind !== "master") return;
    if (!state.metronomePlaying && !usesFreeMetroTransport(state)) return;
    sendSync({
      type: "Metronome",
      seq: ++metronomeSeq,
      ...delay > 0 ? { in: delay } : {}
    });
  },
  readMetroIntroBuffer
);
function onMetronomeBeat(listener) {
  beatListeners.add(listener);
  if (lastMetronomeBeat) listener(lastMetronomeBeat);
  return () => {
    beatListeners.delete(listener);
  };
}
if (typeof document !== "undefined") {
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState !== "visible") return;
    if (useMasterStore.getState().deviceKind !== "master") return;
    void applyNativeOutputLatency();
  });
}
function preloadMetroIntro() {
  if (useMasterStore.getState().deviceKind === "client") return;
  try {
    const ctx = engine.prime();
    metronome.attach(ctx, engine.busNode("CUE"));
    void metronome.ensureIntro(ctx);
  } catch {
  }
}
var gestureUnlockInstalled = false;
if (typeof window !== "undefined" && !gestureUnlockInstalled) {
  gestureUnlockInstalled = true;
  const kick = () => {
    attachPracticeContext(engine.prime());
    preloadMetroIntro();
  };
  window.addEventListener("pointerdown", kick, true);
  window.addEventListener("keydown", kick, true);
}
var controller = new PlaybackController({
  engine,
  logger,
  loadBuffers: async (song) => {
    await engine.init();
    const files = useMasterStore.getState().fileIndex[song.id] ?? [];
    const playable = performanceAudioSong(songWithMixerStems(song, files));
    return decodeSongBuffers(engine.context, playable, async (path) => {
      try {
        return await libraryApi.readBytes(song.id, path);
      } catch {
        throw new Error(`Song cannot play: ${assetMessage(path)}`);
      }
    });
  }
});
function assetMessage(path) {
  if (path.toLowerCase().includes("click")) return "Click track missing.";
  if (path.includes("backing")) return "Backing track missing.";
  return `${path} missing.`;
}
function deckReadyAt(index) {
  const snap = controller.getSnapshot();
  return snap.currentIndex === index && (snap.state === PlaybackState.Ready || snap.state === PlaybackState.Playing || snap.state === PlaybackState.Transitioning);
}
function isDeckPlayMode(mode) {
  return mode === PlayMode.Playback || mode === PlayMode.ClickOnly;
}
function filesForSong(song, fileIndex) {
  return [
    ...fileIndex[song.id] ?? [],
    ...song.folder && song.folder !== song.id ? fileIndex[song.folder] ?? [] : []
  ];
}
function playbackSongs(songs, fileIndex, gig, forceClickOnly = false) {
  const overlaid = songsForSetlistPerformance(songs, fileIndex, gig?.performanceMode);
  const hydrated = overlaid.map(
    (song) => performanceAudioSong(songWithMixerStems(song, filesForSong(song, fileIndex)))
  );
  return forceClickOnly ? songsForcedClickOnly(hydrated, fileIndex) : hydrated;
}
function panicClickOnly(state) {
  return state.panicActive || state.panicResumeAt != null;
}
function songPlaying(state) {
  return state.playback.state === PlaybackState.Playing || state.playback.state === PlaybackState.Transitioning;
}
function panicBlocksFollow(state) {
  return state.panicActive || state.panicResumeAt != null;
}
function stagePlayheadTime(state) {
  if (panicBlocksFollow(state)) return state.panicTargetTime;
  const playing = state.playback.state === PlaybackState.Playing || state.playback.state === PlaybackState.Transitioning;
  return playing ? state.playback.clock?.time ?? state.previewTime : state.previewTime;
}
function showIsRunning(state) {
  return state.metronomePlaying || state.playback.state === PlaybackState.Playing || state.playback.state === PlaybackState.Transitioning;
}
function setlistLocked(state) {
  if (state.deviceKind !== "master" && stageConnectOn(state)) return false;
  return showIsRunning(state);
}
function elifCanEditSetlist(state) {
  return state.deviceKind === "client" && state.clientSession === "stage" && state.syncConnected;
}
function nextMasterEntryId(current, incoming, playing = true) {
  if (!incoming) return current;
  if (!playing && current) return current;
  return incoming;
}
function clientRowPatch(state, incoming, options = {}) {
  const { playing = true, reporting = false } = options;
  const masterEntryId = nextMasterEntryId(state.masterEntryId, incoming, playing);
  const moved = masterEntryId !== state.masterEntryId || !reporting && Boolean(incoming);
  if (!moved) {
    return {
      masterEntryId,
      readingEntryId: state.readingEntryId,
      selectedEntryId: state.selectedEntryId
    };
  }
  return {
    masterEntryId,
    readingEntryId: null,
    selectedEntryId: masterEntryId ?? state.selectedEntryId
  };
}
function positionKeepsThePage(previous, message) {
  if (!message.playing) return false;
  const clock = previous.playback.clock;
  if (!clock || previous.playback.state !== PlaybackState.Playing) return false;
  const row = clientRowPatch(previous, message.setlistEntryId, {
    playing: message.playing,
    reporting: true
  });
  if (row.masterEntryId !== previous.masterEntryId || row.readingEntryId !== previous.readingEntryId || row.selectedEntryId !== previous.selectedEntryId) {
    return false;
  }
  if (nextJustJoinedStage(previous.justJoinedStage, message.playing) !== previous.justJoinedStage) {
    return false;
  }
  return clock.songId === message.songId && clock.setlistEntryId === message.setlistEntryId && clock.measure === message.measure && clock.section === message.section && clock.playing === message.playing && clock.nextSongId === message.nextSongId && (clock.finishMode ?? void 0) === (message.finishMode || void 0);
}
function nextJustJoinedStage(justJoinedStage, consume) {
  return justJoinedStage && !consume ? true : false;
}
function setlistChangeKeepsPlayback(state) {
  if (state.metronomePlaying) return true;
  const playback = state.playback;
  return playback.state === PlaybackState.Playing || playback.state === PlaybackState.Transitioning || state.playbackPaused;
}
function audioGraphLive(state) {
  if (state.metronomePlaying) return true;
  return state.playback.state === PlaybackState.Playing || state.playback.state === PlaybackState.Transitioning;
}
var tickHandle = 0;
var metroTickHandle = 0;
var freeVisualSongId = null;
var lastBroadcast = 0;
var lastBroadcastSongId = null;
var lastPlaybackStoreAt = 0;
var lastPracticeStoreAt = 0;
var practiceHandoffEntryId = null;
var applyPanicResume = null;
var PLAYBACK_UI_MS = 80;
function visualLatency() {
  return engine.getOutputLatency() + useMasterStore.getState().playheadTrim;
}
function audibleEngineTime() {
  return Math.max(0, (controller.getClock()?.time ?? 0) - visualLatency());
}
async function applyNativeOutputLatency() {
  if (!isNativeApp()) return;
  try {
    const { SyncSocket: SyncSocket2 } = await Promise.resolve().then(() => (init_sync_socket(), sync_socket_exports));
    const { seconds } = await SyncSocket2.outputLatency();
    if (typeof seconds === "number") engine.setOutputLatencyHint(seconds);
  } catch {
  }
}
function audibleMetronomeTime() {
  return Math.max(0, metronome.time - visualLatency());
}
function playbackStoreNeedsWrite(previous, next, playing) {
  if (next.endedToEntryId) return true;
  if (previous.state !== next.state) return true;
  if (previous.currentIndex !== next.currentIndex) return true;
  if (previous.errorMessage !== next.errorMessage) return true;
  if (previous.clock?.songId !== next.clock?.songId) return true;
  if (previous.clock?.setlistEntryId !== next.clock?.setlistEntryId) return true;
  if (!playing) return true;
  const now = performance.now();
  if (now - lastPlaybackStoreAt >= PLAYBACK_UI_MS) {
    lastPlaybackStoreAt = now;
    return true;
  }
  return false;
}
function sendSync(message) {
  sendSyncMessage(message);
}
function loadGigMessage(state) {
  const gig = state.gigs.find((item) => item.id === state.gigId);
  if (!gig) return null;
  return {
    type: "LoadGig",
    gigId: gig.id,
    name: gig.name,
    setlistEntryIds: gig.setlist.map((entry) => entry.entryId),
    setlist: remoteGigEntries(gig, state.songs),
    selectedEntryId: state.selectedEntryId ?? void 0,
    performanceMode: parseSetlistPerformanceMode(gig.performanceMode),
    stageNames: padStageNames(gig.stageNames)
  };
}
function broadcastShow() {
  const message = loadGigMessage(useMasterStore.getState());
  if (message) sendSync(message);
}
var lastMixerBroadcast = 0;
var mixerBroadcastTimer = 0;
function mixerSnapshot(state) {
  const gig = currentGig(state);
  const entry = state.selectedEntryId ? gig?.setlist.find((item) => item.entryId === state.selectedEntryId) : void 0;
  const songEntry = entry && isSongEntry(entry) ? entry : void 0;
  const song = songEntry ? findSongByRef(state.songs, songEntry.songId) : void 0;
  const files = song ? filesForSong(song, state.fileIndex) : void 0;
  const playMode = effectivePlayMode(song, files, gig?.performanceMode);
  const songMixer = Boolean(
    song && isDeckPlayMode(playMode) && !songUsesMetronome(song, files, gig?.performanceMode)
  );
  return mixerStateMessage({
    busMix: state.busMix,
    metronomeVolume: state.metronomeVolume,
    songId: songEntry?.songId ?? song?.id,
    songTitle: song?.title,
    songMix: song ? state.songMix[song.id] ?? emptyMixerBank() : void 0,
    songChannels: song && songMixer ? enabledMixerChannels(files) : void 0,
    playMode,
    songMixer
  });
}
function broadcastMixer(force = false) {
  const state = useMasterStore.getState();
  if (state.deviceKind !== "master") return;
  const now = performance.now();
  if (!force && now - lastMixerBroadcast < 80) {
    window.clearTimeout(mixerBroadcastTimer);
    mixerBroadcastTimer = window.setTimeout(() => broadcastMixer(true), 80);
    return;
  }
  window.clearTimeout(mixerBroadcastTimer);
  mixerBroadcastTimer = 0;
  lastMixerBroadcast = now;
  sendSync(mixerSnapshot(state));
}
function broadcastSelection() {
  const state = useMasterStore.getState();
  if (isFreeSetlistMode(currentGig(state)?.performanceMode)) return;
  const gig = state.gigs.find((item) => item.id === state.gigId);
  const entry = state.selectedEntryId && gig ? withKeyChangeElifs(gig.setlist, state.songs).find(
    (item) => item.entryId === state.selectedEntryId
  ) : void 0;
  if (!entry) return;
  const song = isSongEntry(entry) ? state.songs.find((item) => item.id === entry.songId) : void 0;
  sendSync({
    type: "LoadSong",
    songId: isSongEntry(entry) ? entry.songId : entry.entryId,
    setlistEntryId: entry.entryId,
    title: song?.title ?? entry.entryId
  });
  broadcastMixer(true);
}
function broadcastPlay() {
  const state = useMasterStore.getState();
  const gig = state.gigs.find((item) => item.id === state.gigId);
  const clock = controller.getClock();
  const entryId = clock?.setlistEntryId ?? state.selectedEntryId;
  const entry = entryId ? gig?.setlist.find((item) => item.entryId === entryId) : void 0;
  if (!entry || !isSongEntry(entry)) return;
  if (isFreeSetlistMode(currentGig(state)?.performanceMode) || selectedSongIsFree(state)) {
    broadcastSelection();
    return;
  }
  sendSync({
    type: "Play",
    songId: clock?.songId ?? entry.songId,
    setlistEntryId: entry.entryId,
    at: clock?.time ?? state.previewTime,
    sent: Date.now()
  });
}
function elifSetlistEditAllowed(state, message) {
  const name = message.deviceName.trim();
  if (!name || name === REMOTE_DEVICE_NAME) return false;
  return !state.gigId || message.gigId === state.gigId;
}
function applySetlistToGig(current, incoming) {
  const setlist = applyRemoteSetlist(current.setlist, incoming);
  if (!elifPlacementValid(setlist)) return null;
  return { ...current, setlist };
}
function keepPlaybackForSetlist(previous, setlist) {
  const clockId = previous.clock?.setlistEntryId;
  const clockStillThere = clockId ? setlist.some((entry) => entry.entryId === clockId) : false;
  return clockStillThere ? previous : {
    ...previous,
    state: PlaybackState.Idle,
    clock: null
  };
}
function applyMasterRemoteMixer(message, get) {
  const state = get();
  if (state.deviceKind !== "master") return;
  applyRemoteMixer(message, {
    setSongMixStrip: state.setSongMixStrip,
    setBusMixStrip: state.setBusMixStrip,
    setMetronomeVolume: state.setMetronomeVolume
  });
}
function applyMasterRemoteControl(message, get) {
  const state = get();
  if (state.deviceKind !== "master") return;
  applyRemoteControl(message, {
    selectSetlistEntry: state.selectSetlistEntry,
    playSelected: () => void state.playSelected(),
    stop: state.stop,
    seek: state.seek,
    selectedEntryId: state.selectedEntryId,
    playing: state.playback.state === PlaybackState.Playing || state.playback.state === PlaybackState.Transitioning,
    playingEntryId: state.playback.clock?.setlistEntryId ?? null
  });
}
function applyClientSync(message, get, set) {
  if (message.type !== "Position" && message.type !== "Seek" && message.type !== "MixerState" && message.type !== "Metronome") {
    stopPracticeAudio();
  }
  if (message.type === "RemoteControl") {
    applyMasterRemoteControl(message, get);
    return;
  }
  if (message.type === "RemoteMixer") {
    applyMasterRemoteMixer(message, get);
    return;
  }
  if (message.type === "MixerState") {
    if (get().deviceKind !== "remote") return;
    set(applyMixerState(message, get()));
    return;
  }
  if (message.type === "SetlistEdit") {
    const state = get();
    if (!elifSetlistEditAllowed(state, message)) return;
    if (state.deviceKind === "master") {
      const current2 = currentGig(state);
      if (!current2) return;
      const next2 = applySetlistToGig(current2, message.setlist);
      if (!next2) return;
      void state.updateGig(() => next2);
      return;
    }
    const current = currentGig(state);
    if (!current) return;
    const next = applySetlistToGig(current, message.setlist);
    if (!next) return;
    const currentId = state.selectedEntryId;
    const stillThere = currentId ? next.setlist.some((entry) => entry.entryId === currentId) : false;
    const free = isFreeSetlistMode(next.performanceMode);
    set({
      gigs: [next],
      selectedEntryId: stillThere ? currentId : firstSongEntryId(next),
      playback: free ? {
        ...state.playback,
        state: PlaybackState.Idle,
        clock: null
      } : keepPlaybackForSetlist(state.playback, next.setlist)
    });
    if (free && !stillThere) get().stopMetronome();
    return;
  }
  if (message.type === "LoadGig") {
    const setlist = message.setlist ?? [];
    const previous = get();
    const sameShow = previous.gigId === message.gigId;
    const current = sameShow ? currentGig(previous) : void 0;
    const gig = {
      id: message.gigId,
      name: message.name,
      date: current?.date ?? "",
      musicians: current?.musicians ?? [],
      setlist: sameShow && current ? applyRemoteSetlist(current.setlist, setlist) : setlist,
      performanceMode: parseSetlistPerformanceMode(message.performanceMode),
      stageNames: mergeStageNames(message.stageNames, currentGig(previous)?.stageNames)
    };
    const currentId = previous.selectedEntryId;
    const stillThere = currentId ? gig.setlist.some((entry) => entry.entryId === currentId) : false;
    const incomingSelected = typeof message.selectedEntryId === "string" && gig.setlist.some((entry) => entry.entryId === message.selectedEntryId) ? message.selectedEntryId : void 0;
    const free = isFreeSetlistMode(gig.performanceMode);
    const wasFree = isFreeSetlistMode(current?.performanceMode);
    const remoteSongs = previous.deviceKind === "remote" ? stubSongsFromRemoteSetlist(setlist) : void 0;
    set({
      gigs: [gig],
      gigId: gig.id,
      // Reporting: a gig packet carries the running order, and every edit to the setlist sends
      // one. Taking the row off those would drag a band member back off a song they had opened
      // whenever anyone touched the list.
      ...clientRowPatch(previous, incomingSelected, { reporting: true }),
      ...incomingSelected ? {} : { selectedEntryId: stillThere ? currentId : firstSongEntryId(gig) },
      justJoinedStage: nextJustJoinedStage(previous.justJoinedStage, Boolean(incomingSelected)),
      ...remoteSongs ? { songs: remoteSongs } : {},
      playback: free || !sameShow ? {
        ...previous.playback,
        state: PlaybackState.Idle,
        clock: null
      } : keepPlaybackForSetlist(previous.playback, gig.setlist)
    });
    if (free || !sameShow) stopFollowClock(0);
    if (wasFree && !free || free && !stillThere) get().stopMetronome();
    return;
  }
  if (message.type === "LoadSong") {
    if (isFreeSetlistMode(currentGig(get())?.performanceMode)) return;
    set({
      ...clientRowPatch(get(), message.setlistEntryId),
      justJoinedStage: nextJustJoinedStage(get().justJoinedStage, true)
    });
    if (liveSongIsBackingTracks(get())) {
      clearMetronomeBeat();
      if (get().metronomePlaying) set({ metronomePlaying: false });
    }
    return;
  }
  if (message.type === "Stop") {
    const previous = get().playback;
    const clock = previous.clock;
    stopFollowClock(0);
    clearMetronomeBeat();
    set({
      previewTime: 0,
      metronomePlaying: false,
      playback: {
        ...previous,
        state: PlaybackState.Idle,
        clock: clock ? {
          songId: clock.songId,
          setlistEntryId: clock.setlistEntryId,
          time: 0,
          measure: clock.measure,
          beat: clock.beat,
          section: clock.section,
          playing: false,
          nextSongId: clock.nextSongId,
          finishMode: clock.finishMode
        } : null
      }
    });
    return;
  }
  if (message.type === "Seek") {
    if (isFreeSetlistMode(currentGig(get())?.performanceMode) || selectedSongIsFree(get())) return;
    const playing = get().playback.state === PlaybackState.Playing || get().playback.state === PlaybackState.Transitioning;
    const seekTime = followPacketTime(message.time, message.sent);
    setFollowClock(seekTime, playing);
    set({ previewTime: seekTime });
    return;
  }
  if (message.type === "Metronome") {
    if (!clientStageLive(get())) return;
    if (liveSongIsBackingTracks(get())) {
      clearMetronomeBeat();
      if (get().metronomePlaying) set({ metronomePlaying: false });
      return;
    }
    if (message.playing === false) {
      clearMetronomeBeat();
      if (!usesFreeMetroTransport(get())) set({ metronomePlaying: false });
      return;
    }
    const nextSeq = takeRemoteMetronomeSeq(remoteMetroSeq, message.seq);
    if (nextSeq == null) return;
    remoteMetroSeq = nextSeq;
    notifyMetronomeBeat({ at: remoteMetronomeVisualAt(message.in) });
    if (!usesFreeMetroTransport(get())) set({ metronomePlaying: true });
    return;
  }
  if (message.type === "Play") {
    const freeSetlist2 = isFreeSetlistMode(currentGig(get())?.performanceMode);
    if (freeSetlist2 || songEntryIsFree(get(), message.setlistEntryId ?? get().selectedEntryId)) {
      if (message.setlistEntryId && (!freeSetlist2 || get().justJoinedStage)) {
        set({
          ...clientRowPatch(get(), message.setlistEntryId),
          justJoinedStage: nextJustJoinedStage(get().justJoinedStage, true)
        });
      }
      return;
    }
    const previous = get().playback;
    const at = followPacketTime(message.at, message.sent);
    setFollowClock(at, true);
    set({
      ...clientRowPatch(get(), message.setlistEntryId),
      justJoinedStage: nextJustJoinedStage(get().justJoinedStage, true),
      previewTime: at,
      playback: {
        ...previous,
        state: PlaybackState.Playing,
        clock: {
          songId: message.songId,
          setlistEntryId: message.setlistEntryId,
          time: at,
          measure: previous.clock?.measure ?? 1,
          beat: previous.clock?.beat ?? 1,
          section: previous.clock?.section,
          playing: true,
          nextSongId: previous.clock?.nextSongId,
          finishMode: previous.clock?.finishMode
        }
      }
    });
    if (liveSongIsBackingTracks(get())) {
      clearMetronomeBeat();
      if (get().metronomePlaying) set({ metronomePlaying: false });
    }
    return;
  }
  if (message.type !== "Position") return;
  const freeSetlist = isFreeSetlistMode(currentGig(get())?.performanceMode);
  if (freeSetlist || songEntryIsFree(get(), message.setlistEntryId ?? get().selectedEntryId)) {
    if (message.setlistEntryId && (!freeSetlist || get().justJoinedStage)) {
      set({
        ...clientRowPatch(get(), message.setlistEntryId, {
          playing: message.playing,
          reporting: true
        }),
        justJoinedStage: nextJustJoinedStage(get().justJoinedStage, message.playing)
      });
    }
    return;
  }
  const followTime = followPacketTime(message.time, message.sent);
  if (message.playing) {
    setFollowClock(followTime, true);
  } else {
    stopFollowClock(followTime);
  }
  if (positionKeepsThePage(get(), message)) {
    if (liveSongIsBackingTracks(get())) {
      clearMetronomeBeat();
      if (get().metronomePlaying) set({ metronomePlaying: false });
    }
    return;
  }
  set({
    ...clientRowPatch(get(), message.setlistEntryId, {
      playing: message.playing,
      reporting: true
    }),
    justJoinedStage: nextJustJoinedStage(get().justJoinedStage, message.playing),
    previewTime: followTime,
    playback: {
      state: message.playing ? PlaybackState.Playing : PlaybackState.Idle,
      clock: {
        songId: message.songId,
        setlistEntryId: message.setlistEntryId,
        time: followTime,
        measure: message.measure,
        beat: message.beat,
        section: message.section,
        playing: message.playing,
        nextSongId: message.nextSongId,
        finishMode: message.finishMode
      },
      currentIndex: -1,
      errorMessage: null,
      primaryDeck: get().playback.primaryDeck,
      outgoingDeck: null,
      preloadedSongId: null,
      endedToEntryId: null
    }
  });
  if (liveSongIsBackingTracks(get())) {
    clearMetronomeBeat();
    if (get().metronomePlaying) set({ metronomePlaying: false });
  }
}
var unsubSyncLink = null;
function connectSync(get, set) {
  if (!unsubSyncLink) {
    unsubSyncLink = subscribeSyncLink((link) => {
      const previous = get();
      const dropped = clientStageLive(previous) && previous.syncConnected && !link.connected;
      set({
        syncConnected: link.connected,
        syncPeers: link.peers,
        ...link.endpoint ? { joinAddress: link.endpoint } : {}
      });
      if (dropped && !stageHomeScreenRole()) get().leaveStage();
    });
  }
  void connectSyncTransport({
    deviceKind: () => get().deviceKind,
    deviceName: () => get().stageName ?? "",
    syncHost: () => get().syncHost,
    onMasterOpen: () => {
      broadcastShow();
      broadcastSelection();
      broadcastMixer(true);
    },
    onClientHello: () => {
      broadcastShow();
      broadcastSelection();
      broadcastMixer(true);
      broadcastClock(controller.getSnapshot(), true);
    },
    onMasterSessionReset: () => {
      if (stageHomeScreenRole()) return;
      get().leaveStage();
    },
    onClientSync: (message) => applyClientSync(message, get, set)
  }).then((address) => {
    if (address) set({ joinAddress: address });
  });
}
function broadcastClock(snapshot, force = false) {
  if (useMasterStore.getState().deviceKind !== "master") return;
  if (isFreeSetlistMode(currentGig(useMasterStore.getState())?.performanceMode) || selectedSongIsFree(useMasterStore.getState())) return;
  const clock = snapshot.clock;
  if (!clock) return;
  const now = performance.now();
  const songChanged = snapshot.clock.songId !== lastBroadcastSongId;
  if (!force && now - lastBroadcast < 80 && snapshot.state !== PlaybackState.Transitioning && !songChanged) {
    return;
  }
  lastBroadcast = now;
  lastBroadcastSongId = snapshot.clock.songId;
  const state = useMasterStore.getState();
  const time = panicBlocksFollow(state) ? state.panicTargetTime : clock.time;
  sendSync({
    type: "Position",
    songId: clock.songId,
    setlistEntryId: clock.setlistEntryId,
    time,
    measure: clock.measure,
    beat: clock.beat,
    section: clock.section,
    playing: clock.playing,
    nextSongId: clock.nextSongId,
    finishMode: clock.finishMode,
    sent: Date.now()
  });
}
function startTick2() {
  cancelAnimationFrame(tickHandle);
  const loop = () => {
    const snap = controller.tick();
    const playing = snap.state === PlaybackState.Playing || snap.state === PlaybackState.Transitioning;
    if (playing) {
      setFollowClockSource(() => audibleEngineTime(), performance.now(), { lock: true });
    }
    const resumeAt = useMasterStore.getState().panicResumeAt;
    if (resumeAt != null) {
      const time = snap.clock?.time ?? 0;
      if (!playing || time + 0.02 >= resumeAt) applyPanicResume?.();
    }
    broadcastClock(snap, !playing);
    if (playing) {
      tickHandle = requestAnimationFrame(loop);
    }
  };
  tickHandle = requestAnimationFrame(loop);
}
function stopMetronomeTick() {
  cancelAnimationFrame(metroTickHandle);
  metroTickHandle = 0;
}
function startMetronomeTick() {
  stopMetronomeTick();
  const loop = () => {
    const state = useMasterStore.getState();
    if (!state.metronomePlaying) {
      metroTickHandle = 0;
      return;
    }
    setFollowClockSource(() => audibleMetronomeTime(), performance.now(), { lock: true });
    const now = performance.now();
    if (now - lastPlaybackStoreAt >= PLAYBACK_UI_MS) {
      lastPlaybackStoreAt = now;
      useMasterStore.setState({ previewTime: audibleMetronomeTime() });
    }
    metroTickHandle = requestAnimationFrame(loop);
  };
  metroTickHandle = requestAnimationFrame(loop);
}
function firstSongEntryId(gig) {
  return gig?.setlist.find(isSongEntry)?.entryId ?? null;
}
function songForSelectedEntry(state) {
  const gig = currentGig(state);
  const selected = state.selectedEntryId ? gig?.setlist.find((entry) => entry.entryId === state.selectedEntryId) : void 0;
  if (selected && isSongEntry(selected)) {
    const found = findSongByRef(state.songs, selected.songId);
    if (found) return found;
  }
  const id = state.selectedEntryId;
  if (!id) return void 0;
  return state.songs.find(
    (item) => practiceEntryId(item.id) === id || practiceEntryId(item.folder ?? "") === id || item.id === id
  ) ?? (id.startsWith("practice_") ? findSongByRef(state.songs, id.slice("practice_".length)) : void 0);
}
function orderOnlyGig(gig) {
  const { songSettings: _songSettings, ...rest } = gig;
  return {
    ...rest,
    setlist: gig.setlist.map(
      (entry) => isSongEntry(entry) ? {
        type: "song",
        entryId: entry.entryId,
        songId: entry.songId,
        ...entry.skipped ? { skipped: true } : {}
      } : entry
    )
  };
}
function saveGig2(gig) {
  const next = saveGig(orderOnlyGig(gig));
  const shows = useMasterStore.getState().gigs.filter((item) => !isSongLibraryGig(item));
  persistLibraryGigs(shows.some((item) => item.id === gig.id) ? shows.map((item) => item.id === gig.id ? gig : item) : [...shows, gig]);
  return next;
}
function persistLibraryGigs(gigs) {
  const shows = gigs.filter((gig) => !isSongLibraryGig(gig)).map(orderOnlyGig);
  void writeLibraryGigs(shows).catch(() => void 0);
}
function publishableGigs(state) {
  const shows = state.gigs.filter((gig) => !isSongLibraryGig(gig)).map(orderOnlyGig);
  return [
    ...shows.filter((gig) => gig.id === state.gigId),
    ...shows.filter((gig) => gig.id !== state.gigId)
  ];
}
var localPackTimer = 0;
var localPackFull = false;
async function postLocalClientPack(gigs, full) {
  const response = await fetch("/client-library/publish", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ gigs, gigsOnly: !full })
  });
  if (!response.ok) throw new Error("Could not update local client library.");
}
function shareLocalClientPack(get, full = false) {
  if (get().deviceKind !== "master" || isNativeApp()) return;
  if (full) localPackFull = true;
  window.clearTimeout(localPackTimer);
  localPackTimer = window.setTimeout(() => {
    const doFull = localPackFull;
    localPackFull = false;
    void postLocalClientPack(publishableGigs(get()), doFull).catch(() => void 0);
  }, full ? 0 : 400);
}
async function migrateLegacySongInfo(songs, gigs) {
  return Promise.all(
    songs.map(async (song) => {
      const current = parseSongInfo(song.info);
      const legacyGig = gigs.find(
        (gig) => gig.setlist.some((entry) => isSongEntry(entry) && entry.songId === song.id)
      );
      const legacyEntry = legacyGig?.setlist.find(
        (entry) => isSongEntry(entry) && entry.songId === song.id
      );
      const legacySettings = legacyGig?.songSettings?.[song.id];
      const info = parseSongInfo({
        ...current,
        ...legacySettings?.info,
        playMode: legacySettings?.playMode ?? (legacyEntry && isSongEntry(legacyEntry) ? legacyEntry.playMode : void 0) ?? current.playMode,
        startAt: legacySettings?.startAt ?? (legacyEntry && isSongEntry(legacyEntry) ? legacyEntry.startAt : void 0) ?? current.startAt,
        pageNotes: legacySettings?.notes ?? current.pageNotes
      });
      if (JSON.stringify(info) === JSON.stringify(current)) return song;
      void writeSongInfo(song.id, info).catch(() => void 0);
      return { ...song, info };
    })
  );
}
async function withLiveHostSongMeta(songs) {
  if (songs.length === 0 || isNativeApp()) return songs;
  try {
    const host = await libraryApi.loadIndex();
    return overlayHostSongMeta(songs, host.songs);
  } catch {
    return songs;
  }
}
async function assignLibraryPlayModes(songs, fileIndex, persist) {
  return Promise.all(
    songs.map(async (song) => {
      const playable = performanceAudioSong(song);
      const listed = filesForSong(playable, fileIndex);
      const files = listed.length > 0 ? listed : void 0;
      const current = parseSongInfo(playable.info);
      const playMode = savedOrDefaultLibraryPlayMode(current, playable, files);
      if (current.playMode === playMode) return playable;
      const info = parseSongInfo({ ...current, playMode });
      if (persist) void writeSongInfo(playable.id, info).catch(() => void 0);
      return { ...playable, info };
    })
  );
}
async function practiceFileOverride(songId, relPath) {
  const song = useMasterStore.getState().songs.find((item) => item.id === songId);
  return await readPracticeFileBuffer(song?.folder ?? songId, relPath) ?? await readPracticeFileBuffer(songId, relPath);
}
function practiceClock(entry, time, playing) {
  return {
    songId: entry.songId,
    setlistEntryId: entry.entryId,
    time,
    measure: 1,
    beat: 1,
    playing
  };
}
function remapPublishedGigs(gigs, songs) {
  return gigs.map((gig) => ({
    ...gig,
    setlist: gig.setlist.map((entry) => {
      if (!isSongEntry(entry)) return entry;
      const songId = resolvePublishedSongId(entry.songId, songs) ?? entry.songId;
      return { ...entry, songId };
    })
  }));
}
function applyClientLibrary(songs, fileIndex, publishedGigs = [], keepSongId) {
  const remapped = dropMissingSetlistSongs(remapPublishedGigs(publishedGigs, songs), songs);
  const usable = remapped.filter(
    (gig2) => gig2.setlist.some((entry) => isSongEntry(entry) && songs.some((song) => song.id === entry.songId))
  );
  const gig = usable[0] ?? practiceGig(songs);
  const gigs = usable.length ? usable : gig.setlist.length ? [gig] : [];
  const keep = keepSongId && songs.some((song) => song.id === keepSongId) ? keepSongId : gig.setlist.find(
    (entry) => isSongEntry(entry) && songs.some((song) => song.id === entry.songId)
  )?.songId ?? songs[0]?.id;
  const selected = gig.setlist.find((entry) => isSongEntry(entry) && entry.songId === keep)?.entryId ?? firstSongEntryId(gig);
  return {
    songs,
    fileIndex,
    gigs,
    gigId: gigs[0]?.id ?? null,
    selectedEntryId: selected,
    previewTime: 0,
    hostOk: true
  };
}
function startAtOf(gig, entryId, songs = []) {
  if (!gig || !entryId) return 0;
  const entry = gig.setlist.find((item) => item.entryId === entryId);
  if (!entry || !isSongEntry(entry)) return 0;
  const song = findSongByRef(songs, entry.songId);
  if (firstSectionNamed(song?.sections, "SERBEST")) return 0;
  return entryStartAt(entry, song);
}
function nextUnskippedSongEntryId(gig, currentId) {
  if (!gig || !currentId) return null;
  const songs = gig.setlist.filter(isSongEntry);
  const from = songs.findIndex((entry) => entry.entryId === currentId);
  if (from < 0) return null;
  for (let i2 = from + 1; i2 < songs.length; i2++) {
    const entry = songs[i2];
    if (entry && !entry.skipped) return entry.entryId;
  }
  return null;
}
function songUsesMetronome(song, files, performanceMode) {
  const mode = effectivePlayMode(song, files, performanceMode);
  return mode === PlayMode.View || mode === PlayMode.Playback && !hasPlaybackAudio(song, files);
}
function clientStageLive(state) {
  return state.deviceKind === "client" && state.clientSession === "stage" && state.syncConnected;
}
function clientPracticeMode(state) {
  return state.deviceKind === "client" && !clientStageLive(state);
}
function songEntryIsFree(state, entryId = state.selectedEntryId) {
  const gig = currentGig(state);
  if (!entryId || isMetronomeSetlistMode(gig?.performanceMode)) return false;
  const entry = gig?.setlist.find((item) => item.entryId === entryId);
  if (!entry || !isSongEntry(entry)) return false;
  const song = findSongByRef(state.songs, entry.songId);
  if (!song) return false;
  return isFreePlayMode(effectivePlayMode(song, filesForSong(song, state.fileIndex), gig?.performanceMode));
}
function selectedSongIsFree(state) {
  return songEntryIsFree(state);
}
function pageEntryId(state) {
  if (state.deviceKind !== "client") return state.selectedEntryId;
  if (state.readingEntryId) return state.readingEntryId;
  if (showIsRunning(state)) return state.masterEntryId ?? state.selectedEntryId;
  return state.selectedEntryId ?? state.masterEntryId;
}
function pageEntrySongId(state) {
  const entryId = pageEntryId(state);
  const gig = currentGig(state);
  if (!entryId || !gig) return entryId;
  const direct = gig.setlist.find((entry) => entry.entryId === entryId);
  if (direct && isSongEntry(direct)) return entryId;
  return pageSongEntryId(withKeyChangeElifs(gig.setlist, state.songs), entryId);
}
function followsSharedPlayhead(state) {
  if (state.deviceKind === "client" && !clientStageLive(state)) return false;
  if (state.readingEntryId) return false;
  if (!stageConnectOn(state)) return false;
  if (isFreeSetlistMode(currentGig(state)?.performanceMode)) return false;
  return !songEntryIsFree(state, pageEntrySongId(state));
}
function usesFreeMetroTransport(state) {
  return isFreeSetlistMode(currentGig(state)?.performanceMode) || selectedSongIsFree(state);
}
function followsFreeMasterClicks(state) {
  if (!usesFreeMetroTransport(state)) return false;
  return state.deviceKind === "master" || clientStageLive(state);
}
function practiceAudioKind(state, song = songForSelectedEntry(state)) {
  if (!clientPracticeMode(state) || !song) return null;
  const gig = currentGig(state);
  const setlistMode = parseSetlistPerformanceMode(gig?.performanceMode);
  if (isMetronomeSetlistMode(setlistMode) || isFreeSetlistMode(setlistMode)) return null;
  const files = filesForSong(song, state.fileIndex);
  const entry = gig?.setlist.find(
    (item) => isSongEntry(item) && (item.songId === song.id || item.songId === song.folder)
  );
  const declared = entryPlayMode(entry && isSongEntry(entry) ? entry : void 0, song.info);
  if (setlistMode === SetlistPerformanceMode.FollowSongInfo && declared === PlayMode.Playback) {
    if (practiceMasterAudio(files)) return "master";
  }
  return null;
}
function practicePlaysMasterMix(state, song = songForSelectedEntry(state)) {
  return practiceAudioKind(state, song) != null;
}
function queuePracticeAudio(state, song) {
  const target = song ?? songForSelectedEntry(state);
  if (!target) return;
  const kind = practiceAudioKind(state, target);
  if (!kind) return;
  try {
    attachPracticeContext(engine.prime());
  } catch {
  }
  void loadPracticeAudio(target.id, filesForSong(target, state.fileIndex), kind);
}
function nextPracticeMix(state) {
  if (!practiceShouldPlayNext(state)) return null;
  const gig = currentGig(state);
  const nextId = nextUnskippedSongEntryId(gig, state.selectedEntryId);
  const nextEntry = nextId ? gig?.setlist.find((item) => item.entryId === nextId) : void 0;
  if (!nextEntry || !isSongEntry(nextEntry)) return null;
  const song = findSongByRef(state.songs, nextEntry.songId);
  if (!song) return null;
  const kind = practiceAudioKind(state, song);
  if (!kind) return null;
  return { song, kind };
}
function queuePracticeNextAudio(state) {
  const next = nextPracticeMix(state);
  if (!next) return;
  try {
    attachPracticeContext(engine.prime());
  } catch {
  }
  if (isPracticeNextLoaded(next.song.id, next.kind) || isPracticeAudioLoaded(next.song.id, next.kind)) {
    return;
  }
  void loadPracticeNextAudio(next.song.id, filesForSong(next.song, state.fileIndex), next.kind);
}
function practiceBlocksSongSelect(state) {
  if (!clientPracticeMode(state)) return false;
  return state.metronomePlaying || state.playback.state === PlaybackState.Playing || state.playback.state === PlaybackState.Transitioning;
}
function songRefMap(songs) {
  const map = /* @__PURE__ */ new Map();
  for (const item of songs) {
    map.set(item.id, item);
    if (item.folder) map.set(item.folder, item);
  }
  return map;
}
function practiceShouldPlayNext(state) {
  if (!practicePlaysMasterMix(state)) return false;
  const gig = currentGig(state);
  if (!gig || !state.selectedEntryId) return false;
  const index = gig.setlist.findIndex((item) => item.entryId === state.selectedEntryId);
  if (index < 0) return false;
  const songsByRef = songRefMap(state.songs);
  if (songFollowedByElif(gig.setlist, index, songsByRef)) return false;
  const nextId = nextUnskippedSongEntryId(gig, state.selectedEntryId);
  if (!nextId) return false;
  const nextEntry = gig.setlist.find((item) => item.entryId === nextId);
  if (!nextEntry || !isSongEntry(nextEntry)) return false;
  return practicePlaysMasterMix(state, findSongByRef(state.songs, nextEntry.songId));
}
function practiceEndedSelectionId(state) {
  const gig = currentGig(state);
  if (!gig || !state.selectedEntryId) return null;
  const index = gig.setlist.findIndex((item) => item.entryId === state.selectedEntryId);
  if (index < 0) return null;
  const songsByRef = songRefMap(state.songs);
  if (!songFollowedByElif(gig.setlist, index, songsByRef)) return null;
  return nextEndedSelectionId(gig.setlist, index, songsByRef);
}
function livePerformanceEntryId(state) {
  const playing = state.playback.state === PlaybackState.Playing || state.playback.state === PlaybackState.Transitioning;
  if (playing && state.playback.clock?.setlistEntryId) return state.playback.clock.setlistEntryId;
  return state.selectedEntryId;
}
function liveSongIsBackingTracks(state) {
  const gig = currentGig(state);
  if (!gig || isMetronomeSetlistMode(gig.performanceMode) || isFreeSetlistMode(gig.performanceMode)) {
    return false;
  }
  const entryId = livePerformanceEntryId(state);
  const entry = entryId ? gig.setlist.find((item) => item.entryId === entryId) : void 0;
  if (!entry || !isSongEntry(entry)) return false;
  const song = findSongByRef(state.songs, entry.songId);
  return entryPlayMode(entry, song?.info) === PlayMode.Playback;
}
function usesContinuousMetroTransport(state) {
  if (practicePlaysMasterMix(state)) return false;
  if (usesFreeMetroTransport(state)) return true;
  const gig = currentGig(state);
  const mode = parseSetlistPerformanceMode(gig?.performanceMode);
  if (isFreeSetlistMode(mode)) return false;
  const canDriveMetro = state.deviceKind === "master" || clientPracticeMode(state);
  if (!canDriveMetro) return false;
  if (isMetronomeSetlistMode(mode)) return true;
  if (mode !== SetlistPerformanceMode.FollowSongInfo) return false;
  const entry = state.selectedEntryId ? gig?.setlist.find((item) => item.entryId === state.selectedEntryId) : void 0;
  if (!entry || !isSongEntry(entry)) return false;
  const song = findSongByRef(state.songs, entry.songId);
  const files = song ? filesForSong(song, state.fileIndex) : void 0;
  return songUsesMetronome(song, files, gig?.performanceMode);
}
var MIX_SAVE_MS = 350;
var songMixSaveTimers = /* @__PURE__ */ new Map();
var gigMixSaveTimer = 0;
var gigMixSaveGigId = null;
var fadeStopTimer = 0;
function cancelFadeStop() {
  if (fadeStopTimer) window.clearTimeout(fadeStopTimer);
  fadeStopTimer = 0;
  engine.resetFadeOut();
  metronome.resetFadeOut();
}
function applyGigMix(gig, set) {
  const { busMix, metronomeVolume } = gigMixerState(gig);
  engine.replaceBusMix(busMix);
  metronome.setVolume(metronomeVolume);
  set({ busMix, metronomeVolume });
}
function persistGigMixNow(get, set, gigId) {
  const state = get();
  if (state.deviceKind !== "master") return;
  const current = state.gigs.find((item) => item.id === gigId);
  if (!current || isSongLibraryGig(current)) return;
  const next = { ...current, busMix: state.busMix, metronomeVolume: state.metronomeVolume };
  void saveGig2(next);
  set({ gigs: get().gigs.map((item) => item.id === next.id ? next : item) });
  shareLocalClientPack(get);
}
function scheduleGigMixSave(get, set) {
  const gigId = get().gigId;
  if (!gigId || gigId === SONG_LIBRARY_GIG_ID || get().deviceKind !== "master") return;
  window.clearTimeout(gigMixSaveTimer);
  gigMixSaveGigId = gigId;
  gigMixSaveTimer = window.setTimeout(() => {
    if (gigMixSaveGigId) persistGigMixNow(get, set, gigMixSaveGigId);
  }, MIX_SAVE_MS);
}
function flushGigMixSave(get, set) {
  window.clearTimeout(gigMixSaveTimer);
  gigMixSaveTimer = 0;
  const gigId = gigMixSaveGigId ?? get().gigId;
  gigMixSaveGigId = null;
  if (gigId) persistGigMixNow(get, set, gigId);
}
function scheduleSongMixSave(songId, get) {
  if (get().deviceKind !== "master") return;
  const prev = songMixSaveTimers.get(songId);
  if (prev) window.clearTimeout(prev);
  songMixSaveTimers.set(
    songId,
    window.setTimeout(() => {
      songMixSaveTimers.delete(songId);
      const bank = get().songMix[songId];
      if (bank) void saveSongMixer(songId, bank);
    }, MIX_SAVE_MS)
  );
}
var LIBRARY_LOAD_MS = 8e3;
var loadInFlight = null;
var loadInFlightKey = null;
function raceTimeout(promise, ms, fallback) {
  return new Promise((resolve2, reject) => {
    const timer = window.setTimeout(() => resolve2(fallback), ms);
    promise.then(
      (value) => {
        window.clearTimeout(timer);
        resolve2(value);
      },
      (error) => {
        window.clearTimeout(timer);
        reject(error);
      }
    );
  });
}
async function runLibraryLoad(kind, options, get, set) {
  try {
    if (kind === "client") {
      await loadLibraryNow(kind, options, get, set);
      return;
    }
    await Promise.race([
      loadLibraryNow(kind, options, get, set),
      new Promise((_, reject) => {
        window.setTimeout(() => reject(new Error("Library load timed out.")), LIBRARY_LOAD_MS);
      })
    ]);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not load library.";
    if (kind === "client") {
      set({
        ready: false,
        libraryStatus: message,
        practiceBusy: null
      });
      return;
    }
    const songs = get().songs;
    const gigs = get().gigs.length > 0 ? get().gigs : [songLibraryGig(songs)];
    set({
      ready: true,
      songs,
      fileIndex: get().fileIndex,
      gigs,
      gigId: get().gigId ?? SONG_LIBRARY_GIG_ID,
      hostOk: get().hostOk || !isNativeApp(),
      libraryStatus: songs.length > 0 ? get().libraryStatus : message
    });
  }
}
async function loadLibraryNow(kind, options, get, set) {
  set({
    deviceKind: kind,
    syncHost: kind === "client" || kind === "remote" ? null : options?.syncHost?.trim() || get().syncHost,
    libraryStatus: null
  });
  if (kind === "remote") {
    set({
      ready: true,
      songs: [],
      fileIndex: {},
      gigs: [],
      gigId: null,
      selectedEntryId: null,
      remoteSongMixer: false,
      hostOk: true,
      clientSession: "practice",
      stageName: REMOTE_DEVICE_NAME,
      setlistOpen: setlistStartsOpen(),
      libraryStatus: null
    });
    return;
  }
  if (kind === "master") {
    connectSync(get, set);
    void applyNativeOutputLatency();
  }
  let songs = [];
  let fileIndex = {};
  let hostOk = false;
  try {
    if (kind === "client") {
      setLibraryFileOverride(practiceFileOverride);
      const practice = await loadPracticeLibrary();
      if (practice.songs.length > 0) {
        songs = practice.songs;
        fileIndex = practice.fileIndex;
        hostOk = true;
      } else if (isNativeApp()) {
        const index = await libraryApi.loadIndex();
        songs = index.songs;
        fileIndex = index.fileIndex;
        hostOk = songs.length > 0;
      }
      if (!isNativeApp()) {
        const report = (message) => set({ libraryStatus: message, practiceBusy: message });
        report("Updating library\u2026");
        let tracks = null;
        try {
          const result = await syncPublishedLibrary((progress) => report(progress.message), {
            tracks: !stageHomeScreenRole(),
            onTracks: (progress) => set({ libraryStatus: progress.message })
          });
          tracks = result.tracks;
        } catch (error) {
          if (songs.length === 0) throw error;
        }
        const again = await loadPracticeLibrary();
        if (again.songs.length > 0) {
          songs = again.songs;
          fileIndex = again.fileIndex;
        }
        hostOk = songs.length > 0;
        clearNotaLayoutMemory();
        set({ practiceBusy: null, libraryStatus: null });
        if (tracks) {
          void tracks.then(() => get().reloadPracticeLibrary()).catch(() => void 0).finally(() => set({ libraryStatus: null }));
        }
      }
    } else {
      const index = await libraryApi.loadIndex();
      songs = index.songs;
      fileIndex = index.fileIndex;
      hostOk = songs.length > 0 || !isNativeApp();
    }
  } catch (error) {
    if (kind === "client" && !isNativeApp()) throw error;
    hostOk = kind === "client";
  }
  songs = songs.map((song) => normalizeSong(song, song.folder ?? song.id));
  if (kind === "client") {
    songs = await withLiveHostSongMeta(songs);
  } else {
    songs = await assignLibraryPlayModes(songs, fileIndex, true);
  }
  if (songs.length > 0) {
    set({ songs, fileIndex, hostOk });
  }
  let songMix = {};
  try {
    songMix = kind === "master" ? await raceTimeout(loadSongMixers(songs.map((song) => song.id)), 3e3, {}) : {};
  } catch {
    songMix = {};
  }
  for (const [songId, bank] of Object.entries(songMix)) {
    engine.replaceSongMix(songId, bank);
  }
  if (kind === "client") {
    const published = await readPublishedGigs();
    const selected = options?.syncHost ? null : songs[0]?.id;
    const next = applyClientLibrary(songs, fileIndex, published, selected);
    set({
      ready: true,
      ...next,
      hostOk,
      libraryStatus: null,
      practiceBusy: null,
      // Stage opens on the lyric page. Practice opens on the score.
      masterPage: stageHomeScreenRole() ? "lyrics" : "nota",
      clientSession: "practice",
      syncHost: null,
      setlistOpen: setlistStartsOpen(),
      songMix
    });
    const songId = next.gigs[0]?.setlist.find(isSongEntry)?.songId;
    if (songId) {
      queuePracticeAudio({ ...get(), ...next }, findSongByRef(next.songs, songId));
    }
    if (options?.syncHost) get().joinStage(options.syncHost);
    return;
  }
  let local = { gigs: [] };
  try {
    local = await raceTimeout(loadLocalLibrary(), 3e3, { gigs: [] });
  } catch {
    local = { gigs: [] };
  }
  const legacyGigs = local.gigs.filter((item) => item.id !== SONG_LIBRARY_GIG_ID);
  songs = await migrateLegacySongInfo(songs, legacyGigs);
  let savedGigs = legacyGigs.map(orderOnlyGig);
  try {
    const shipped = await readShippedGigs();
    if (shipped.length) {
      const merged = mergeShippedGigs(savedGigs, shipped, songs);
      const keep = new Set(merged.map((gig2) => gig2.id));
      await Promise.all(savedGigs.filter((gig2) => !keep.has(gig2.id)).map((gig2) => deleteGig(gig2.id)));
      savedGigs = merged;
    }
  } catch {
  }
  try {
    await raceTimeout(Promise.all(savedGigs.map((gig2) => saveGig(orderOnlyGig(gig2)))), 3e3, void 0);
    persistLibraryGigs(savedGigs);
  } catch {
  }
  const allGigs = listedGigs(savedGigs, songs);
  const libraryGig = allGigs[0] ?? songLibraryGig(songs);
  const storedGigId = readStored(ACTIVE_GIG_KEY);
  const gigId = (storedGigId && allGigs.some((item) => item.id === storedGigId) ? storedGigId : savedGigs[0]?.id) ?? SONG_LIBRARY_GIG_ID;
  const gig = allGigs.find((item) => item.id === gigId) ?? libraryGig;
  const selectedEntryId = gigId === SONG_LIBRARY_GIG_ID ? pickLibraryEntryId(songs, null, null) : firstSongEntryId(gig);
  writeStored(ACTIVE_GIG_KEY, gigId);
  if (gig) await controller.setShow(gig, playbackSongs(songs, fileIndex, gig));
  const showMix = gigMixerState(gig);
  engine.replaceBusMix(showMix.busMix);
  metronome.setVolume(showMix.metronomeVolume);
  set({
    ready: true,
    songs,
    fileIndex,
    gigs: allGigs,
    gigId,
    hostOk,
    selectedEntryId,
    previewTime: startAtOf(gig, selectedEntryId, songs),
    songMix,
    busMix: showMix.busMix,
    metronomeVolume: showMix.metronomeVolume,
    libraryStatus: null
  });
  if (kind === "master") {
    void get().setAudioDevice(get().audioDeviceId).then(() => preloadMetroIntro());
  }
  broadcastShow();
  if (kind === "master") shareLocalClientPack(get, true);
}
var useMasterStore = create((set, get) => {
  const armContinuousNextVisual = () => {
    const state = get();
    if (usesFreeMetroTransport(state) || isFreeSetlistMode(currentGig(state)?.performanceMode) || isMetronomeSetlistMode(currentGig(state)?.performanceMode)) {
      return;
    }
    if (!usesContinuousMetroTransport(state)) return;
    const gig = currentGig(state);
    const nextId = nextUnskippedSongEntryId(gig, state.selectedEntryId);
    if (!nextId) {
      if (!state.metronomePlaying) metronome.stop();
      return;
    }
    const entry = gig?.setlist.find((item) => item.entryId === nextId);
    if (!entry || !isSongEntry(entry)) return;
    const song = findSongByRef(state.songs, entry.songId);
    if (!song) return;
    try {
      const ctx = engine.prime();
      metronome.attach(ctx, engine.busNode("CUE"));
      metronome.setVolume(state.metronomeVolume);
      const parsed = parseSongInfo(song.info);
      metronome.start(metronomeTempoMap(parsed), 0, { silent: true });
    } catch {
    }
  };
  const endMetronome = () => {
    metronomeStartGen += 1;
    freeVisualSongId = null;
    stopMetronomeTick();
    const time = audibleMetronomeTime();
    metronome.stop();
    clearMetronomeBeat();
    const playing = get().playback.state === PlaybackState.Playing || get().playback.state === PlaybackState.Transitioning;
    if (!playing) stopFollowClock(time);
    set({ metronomePlaying: false });
    if (get().deviceKind === "master") sendSync({ type: "Metronome", playing: false });
    armContinuousNextVisual();
  };
  const syncFreeVisualMetronome = () => {
    const state = get();
    if (state.deviceKind !== "master") return;
    if (state.metronomePlaying || !usesFreeMetroTransport(state)) {
      if (freeVisualSongId && !state.metronomePlaying) {
        freeVisualSongId = null;
        metronome.stop();
        clearMetronomeBeat();
        sendSync({ type: "Metronome", playing: false });
      }
      return;
    }
    const song = songForSelectedEntry(state);
    if (!song) {
      if (freeVisualSongId) {
        freeVisualSongId = null;
        metronome.stop();
        clearMetronomeBeat();
        sendSync({ type: "Metronome", playing: false });
      }
      return;
    }
    if (freeVisualSongId === song.id && metronome.isPlaying && metronome.isSilent) return;
    try {
      const ctx = engine.prime();
      metronome.attach(ctx, engine.busNode("CUE"));
      metronome.setVolume(state.metronomeVolume);
      const parsed = parseSongInfo(song.info);
      freeVisualSongId = song.id;
      metronome.start(metronomeTempoMap(parsed), 0, { silent: true });
    } catch (err2) {
      freeVisualSongId = null;
      logger.audio("free_visual_metro_failed", {
        error: err2 instanceof Error ? err2.message : String(err2)
      });
    }
  };
  const engineSongs = (songs = get().songs, gig = currentGig(get())) => playbackSongs(songs, get().fileIndex, gig, panicClickOnly(get()));
  const clearPanic = (restoreMix = true) => {
    const wasClick = panicClickOnly(get());
    set({
      panicActive: false,
      panicResumeAt: null
    });
    if (restoreMix && wasClick) controller.replaceSongs(engineSongs());
  };
  const finishPanicJump = () => {
    const { panicTargetTime } = get();
    const target = Math.max(0, panicTargetTime);
    set({
      panicActive: false,
      panicResumeAt: null,
      previewTime: target
    });
    controller.replaceSongs(engineSongs());
    controller.seek(target);
    sendSync({ type: "Seek", time: target, sent: Date.now() });
    const snap = controller.getSnapshot();
    if (snap.state === PlaybackState.Playing || snap.state === PlaybackState.Transitioning) {
      broadcastClock(snap, true);
    }
  };
  applyPanicResume = finishPanicJump;
  controller.subscribe((playback) => {
    if (get()?.deviceKind !== "master") return;
    const playing = playback.state === PlaybackState.Playing || playback.state === PlaybackState.Transitioning;
    if (playing) {
      setFollowClockSource(() => audibleEngineTime(), performance.now(), { lock: true });
    } else if (!get().metronomePlaying) {
      stopFollowClock(playback.clock?.time ?? 0);
    }
    if (!playbackStoreNeedsWrite(get().playback, playback, playing)) {
      if (playing) startTick2();
      return;
    }
    const entryId = playback.clock?.setlistEntryId;
    if (playback.endedToEntryId) {
      const nextId = playback.endedToEntryId;
      set({ playback });
      queueMicrotask(() => {
        if (get().deviceKind !== "master") return;
        if (get().selectedEntryId !== nextId) get().selectSetlistEntry(nextId);
        const gig = currentGig(get());
        const entry = gig?.setlist.find((item) => item.entryId === nextId);
        if (!entry || !isSongEntry(entry)) return;
        const song = findSongByRef(get().songs, entry.songId);
        const files = song ? filesForSong(song, get().fileIndex) : void 0;
        const mode = effectivePlayMode(song, files, gig?.performanceMode);
        if (mode === PlayMode.Free) return;
        if (mode === PlayMode.View) {
          if (!shouldAutoStartMetronome(song)) return;
          const startAt = songChainStartAt(song, entry);
          get().startMetronome(startAt);
          return;
        }
        if (firstSectionNamed(song?.sections, "SERBEST")) return;
        void get().playSelected();
      });
    } else if (playing && entryId && get().selectedEntryId !== entryId && !followsSharedPlayhead(get()) && !isFreeSetlistMode(currentGig(get())?.performanceMode) && !selectedSongIsFree(get())) {
      set({
        playback,
        selectedEntryId: entryId,
        previewTime: playback.clock?.time ?? 0,
        playbackPaused: false
      });
    } else {
      set({
        playback,
        ...playing ? { playbackPaused: false } : {},
        ...!playing && playback.clock && !get().metronomePlaying ? { previewTime: playback.clock.time } : {}
      });
    }
    if (!playing && panicClickOnly(get())) clearPanic();
    if (playing) startTick2();
  });
  return {
    ready: false,
    songs: [],
    fileIndex: {},
    gigs: [],
    gigId: null,
    librarySongId: null,
    selectedEntryId: null,
    masterEntryId: null,
    readingEntryId: null,
    justJoinedStage: false,
    previewTime: 0,
    playbackPaused: false,
    panicActive: false,
    panicTargetTime: 0,
    panicResumeAt: null,
    playback: controller.getSnapshot(),
    hostOk: false,
    deviceKind: "master",
    syncHost: null,
    syncConnected: false,
    syncPeers: [],
    joinAddress: null,
    stageName: storedStageName(),
    clientSession: "practice",
    practiceBusy: null,
    libraryStatus: null,
    practiceLibraryRev: 0,
    masterPage: "chords",
    setlistOpen: setlistStartsOpen(),
    stagePinNonce: 0,
    autoScroll: true,
    editOpen: false,
    stageZooms: {
      lyrics: 1,
      nota: 1,
      chords: 1,
      drums: 1
    },
    songMix: {},
    remoteSongMixer: false,
    busMix: emptyMixerBank(),
    audioOutputs: [],
    audioDeviceId: storedAudioDevice(),
    audioOutputChannels: 2,
    audioRoutingMode: storedRoutingMode(),
    playheadTrim: storedPlayheadTrim(),
    audioError: null,
    audioHint: null,
    metronomePlaying: false,
    metronomeVolume: 0.7,
    load: async (kind = "master", options) => {
      const key = `${kind}|${options?.syncHost?.trim() ?? ""}`;
      if (loadInFlight && loadInFlightKey === key) return loadInFlight;
      loadInFlightKey = key;
      const run = runLibraryLoad(kind, options, get, set).finally(() => {
        if (loadInFlightKey === key) {
          loadInFlight = null;
          loadInFlightKey = null;
        }
      });
      loadInFlight = run;
      return run;
    },
    joinRemote: (host) => {
      if (get().deviceKind !== "remote") return;
      const value = host.trim().replace(/^https?:\/\//, "").replace(/\/.*$/, "");
      if (!value) return;
      localStorage.setItem(MASTER_HOST_KEY, value);
      set({
        syncHost: value,
        stageName: REMOTE_DEVICE_NAME,
        clientSession: "stage",
        setlistOpen: setlistStartsOpen()
      });
      connectSync(get, set);
    },
    leaveRemote: () => {
      if (get().deviceKind !== "remote") return;
      disconnectSyncTransport();
      set({
        syncHost: null,
        clientSession: "practice",
        syncConnected: false,
        gigs: [],
        gigId: null,
        selectedEntryId: null,
        songs: [],
        remoteSongMixer: false,
        previewTime: 0,
        playback: {
          ...get().playback,
          state: PlaybackState.Idle,
          clock: null
        }
      });
    },
    remoteSelect: (entryId) => {
      if (get().deviceKind !== "remote") return;
      set({ selectedEntryId: entryId, previewTime: 0 });
      sendSync({ type: "RemoteControl", action: "select", setlistEntryId: entryId });
    },
    remotePlay: (entryId) => {
      if (get().deviceKind !== "remote") return;
      const id = entryId ?? get().selectedEntryId;
      if (!id) return;
      sendSync({ type: "RemoteControl", action: "play", setlistEntryId: id });
    },
    remoteStop: () => {
      if (get().deviceKind !== "remote") return;
      sendSync({ type: "RemoteControl", action: "stop" });
    },
    remoteSeek: (time) => {
      if (get().deviceKind !== "remote") return;
      const clamped = Math.max(0, time);
      set({ previewTime: clamped });
      sendSync({ type: "RemoteControl", action: "seek", time: clamped });
    },
    joinStage: (host) => {
      const served = typeof window !== "undefined" && window.location.port === String(PRACTICE_SHARE_PORT);
      const value = parseSyncHostname(host) || (served ? window.location.hostname : "");
      if (!value) return;
      stopPracticeAudio();
      localStorage.removeItem(STAGE_NAME_KEY);
      localStorage.setItem(MASTER_HOST_KEY, value);
      set({
        syncHost: value,
        stageName: "Client",
        clientSession: "stage",
        setlistOpen: setlistStartsOpen(),
        masterEntryId: null,
        readingEntryId: null,
        justJoinedStage: true
      });
      connectSync(get, set);
    },
    leaveStage: () => {
      disconnectSyncTransport();
      stopFollowClock(0);
      stopPracticeAudio();
      const { songs, fileIndex, selectedEntryId, gigs } = get();
      const current = selectedEntryId ? gigs.find((gig) => gig.setlist.some((item) => item.entryId === selectedEntryId))?.setlist.find((item) => item.entryId === selectedEntryId) : void 0;
      const keep = current && isSongEntry(current) ? current.songId : songs[0]?.id;
      set({
        syncHost: null,
        clientSession: "practice",
        setlistOpen: setlistStartsOpen(),
        syncConnected: false,
        masterEntryId: null,
        readingEntryId: null,
        justJoinedStage: false
      });
      void readPublishedGigs().then((published) => {
        if (get().clientSession === "stage") return;
        const next = applyClientLibrary(get().songs, get().fileIndex, published, keep);
        set(next);
        queuePracticeAudio({ ...get(), ...next }, keep ? findSongByRef(get().songs, keep) : void 0);
      });
    },
    selectPracticeSong: (songId) => {
      if (clientStageLive(get())) {
        const found = findSongByRef(get().songs, songId);
        const onSetlist = currentGig(get())?.setlist.find(
          (item) => isSongEntry(item) && (item.songId === songId || item.songId === found?.id || item.songId === found?.folder)
        );
        set({ readingEntryId: onSetlist?.entryId ?? practiceEntryId(found?.id ?? songId) });
        return;
      }
      if (get().clientSession === "stage") return;
      if (practiceBlocksSongSelect(get())) return;
      if (get().metronomePlaying) endMetronome();
      if (get().playback.state === PlaybackState.Playing) get().pausePractice();
      const gig = currentGig(get()) ?? get().gigs[0];
      const song = findSongByRef(get().songs, songId);
      const entry = gig?.setlist.find(
        (item) => isSongEntry(item) && (item.songId === songId || item.songId === song?.id || item.songId === song?.folder)
      );
      const id = song?.id ?? songId;
      set({
        selectedEntryId: entry?.entryId ?? practiceEntryId(id),
        previewTime: 0
      });
      queuePracticeAudio(get(), song ?? findSongByRef(get().songs, id));
    },
    reloadPracticeLibrary: async () => {
      clearNotaLayoutMemory();
      const index = await loadPracticeLibrary();
      const published = await readPublishedGigs();
      const current = (currentGig(get()) ?? get().gigs[0])?.setlist.find(isSongEntry)?.songId;
      const songs = await withLiveHostSongMeta(index.songs);
      const next = applyClientLibrary(songs, index.fileIndex, published, current);
      set({
        ...next,
        practiceLibraryRev: get().practiceLibraryRev + 1
      });
      const songId = next.gigs.find((gig) => gig.id === next.gigId)?.setlist.find(isSongEntry)?.songId;
      if (songId) {
        queuePracticeAudio({ ...get(), ...next }, findSongByRef(next.songs, songId));
      }
    },
    refreshPracticeCharts: async () => {
      if (get().deviceKind !== "client" || isNativeApp()) return;
      if (get().clientSession === "stage") return;
      try {
        await syncPublishedLibrary(void 0, { tracks: false });
        await get().reloadPracticeLibrary();
      } catch {
      }
    },
    importPracticePackage: async (file) => {
      set({ practiceBusy: "Importing\u2026" });
      try {
        await importPracticeZip(file);
        await get().reloadPracticeLibrary();
      } finally {
        set({ practiceBusy: null });
      }
    },
    importPracticeFolder: async (files) => {
      set({ practiceBusy: "Importing\u2026" });
      try {
        await importPracticeFileList(files);
        await get().reloadPracticeLibrary();
      } finally {
        set({ practiceBusy: null });
      }
    },
    pullPracticeLibrary: async (host) => {
      set({ practiceBusy: "Updating from master\u2026" });
      try {
        const raw = host?.trim() || get().syncHost || "";
        const base = raw ? practiceHostFromInput(raw) : window.location.origin;
        await pullPracticeFromHost(base);
        await get().reloadPracticeLibrary();
      } finally {
        set({ practiceBusy: null });
      }
    },
    syncClientLibrary: async () => {
      if (get().clientSession === "stage") return;
      set({ practiceBusy: "Updating library\u2026", libraryStatus: "Updating library\u2026" });
      try {
        const result = await syncPublishedLibrary(
          (progress) => set({ libraryStatus: progress.message, practiceBusy: progress.message })
        );
        const tracks = result.tracks ? await result.tracks : 0;
        await get().reloadPracticeLibrary();
        set({
          libraryStatus: result.files + tracks > 0 ? `Updated ${result.files + tracks} files.` : result.gigs === 0 && result.songs === 0 ? "No published library yet." : "Library up to date."
        });
      } catch (error) {
        set({
          libraryStatus: error instanceof Error ? error.message : "Could not update library."
        });
      } finally {
        set({ practiceBusy: null });
      }
    },
    publishClientLibrary: async () => {
      if (get().deviceKind === "client") return;
      set({ practiceBusy: "Publishing\u2026" });
      try {
        const response = await fetch("/client-library/publish", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            gigs: publishableGigs(get())
          })
        });
        if (!response.ok) {
          throw new Error("Publish from the Mac with npm run dev, then push main.");
        }
        const result = await response.json();
        set({
          libraryStatus: `Published ${result.songs ?? 0} songs. Push main so phones update.`
        });
      } catch (error) {
        set({
          libraryStatus: error instanceof Error ? error.message : "Could not publish."
        });
      } finally {
        set({ practiceBusy: null });
      }
    },
    exportPracticePackage: async (songIds) => {
      if (get().deviceKind === "client") return;
      set({ practiceBusy: "Exporting\u2026" });
      try {
        const pack = await exportPracticeZip(get().songs, get().fileIndex, songIds);
        downloadBytes(pack.name, pack.bytes);
      } finally {
        set({ practiceBusy: null });
      }
    },
    playPractice: async () => {
      const state = get();
      const entry = state.selectedEntryId ? currentGig(state)?.setlist.find((item) => item.entryId === state.selectedEntryId) : void 0;
      if (!entry || !isSongEntry(entry)) return;
      practiceHandoffEntryId = null;
      try {
        attachPracticeContext(engine.prime());
      } catch {
      }
      onPracticeTime((time, ended) => {
        const current = useMasterStore.getState();
        const duration2 = practiceAudioDuration();
        const playing = !ended && practiceAudioPlaying();
        if (playing) setFollowClockSource(() => practiceAudioTime());
        else stopFollowClock(time);
        const cue = playNextCueSeconds(
          current.songs.find((item) => item.id === entry.songId),
          duration2
        );
        const stillThisEntry = current.selectedEntryId === entry.entryId;
        const action = practiceHandoff({
          ended,
          time,
          cue,
          shouldPlayNext: stillThisEntry && practiceShouldPlayNext(current),
          already: practiceHandoffEntryId === entry.entryId
        });
        if (stillThisEntry && practiceShouldPlayNext(current)) {
          queuePracticeNextAudio(current);
          const next = nextPracticeMix(current);
          if (next && cue != null) {
            const gig = currentGig(current);
            const nextId = nextUnskippedSongEntryId(gig, current.selectedEntryId);
            armPracticeNextAt(cue, startAtOf(gig, nextId, current.songs));
          }
        }
        if (action) {
          practiceHandoffEntryId = entry.entryId;
          if (action === "play-next") {
            if (!promoteArmedPracticeNext()) parkPracticeTail();
            const store2 = useMasterStore.getState();
            const gig = currentGig(store2);
            const nextId = nextUnskippedSongEntryId(gig, store2.selectedEntryId);
            if (nextId) {
              store2.selectSetlistEntry(nextId, { playNext: true });
              queueMicrotask(() => {
                void useMasterStore.getState().playPractice();
              });
            }
            return;
          }
          const store = useMasterStore.getState();
          store.pausePractice();
          const landOn = practiceEndedSelectionId(useMasterStore.getState());
          if (landOn) useMasterStore.getState().selectSetlistEntry(landOn, { land: true });
          return;
        }
        const now = performance.now();
        if (playing && !ended && now - lastPracticeStoreAt < PLAYBACK_UI_MS) return;
        lastPracticeStoreAt = now;
        useMasterStore.setState({
          previewTime: time,
          songs: duration2 > 0 ? current.songs.map(
            (song2) => song2.id === entry.songId && !(song2.duration > 0) ? { ...song2, duration: duration2 } : song2
          ) : current.songs,
          playback: {
            ...current.playback,
            state: playing ? PlaybackState.Playing : PlaybackState.Idle,
            clock: practiceClock(entry, time, playing)
          }
        });
      });
      const song = state.songs.find((item) => item.id === entry.songId);
      const files = [
        ...state.fileIndex[entry.songId] ?? [],
        ...song?.folder ? state.fileIndex[song.folder] ?? [] : []
      ];
      const kind = practiceAudioKind(state, song);
      if (!kind) return;
      if (!isPracticeAudioLoaded(entry.songId, kind)) {
        const ok = await loadPracticeAudio(entry.songId, files, kind);
        if (!ok) return;
      }
      const startAt = get().previewTime;
      const already = practiceAudioPlaying() || practiceAudioArmed();
      if (!already) {
        try {
          await playPracticeAudio(startAt);
        } catch {
          const ok = await loadPracticeAudio(entry.songId, files, kind);
          if (!ok) return;
          try {
            await playPracticeAudio(get().previewTime);
          } catch {
            return;
          }
        }
      }
      queuePracticeNextAudio(get());
      const duration = practiceAudioDuration();
      const playhead = practiceAudioTime();
      setFollowClockSource(() => practiceAudioTime());
      set({
        songs: duration > 0 ? get().songs.map(
          (song2) => song2.id === entry.songId && !(song2.duration > 0) ? { ...song2, duration } : song2
        ) : get().songs,
        playback: {
          ...get().playback,
          state: PlaybackState.Playing,
          clock: practiceClock(entry, playhead, true)
        }
      });
    },
    pausePractice: () => {
      pausePracticeAudio();
      const time = practiceAudioTime();
      stopFollowClock(time);
      const entry = get().selectedEntryId ? currentGig(get())?.setlist.find((item) => item.entryId === get().selectedEntryId) : void 0;
      set({
        previewTime: time,
        playback: {
          ...get().playback,
          state: PlaybackState.Idle,
          clock: entry && isSongEntry(entry) ? practiceClock(entry, time, false) : get().playback.clock
        }
      });
    },
    seekPractice: (time) => {
      seekPracticeAudio(time);
      const entry = get().selectedEntryId ? currentGig(get())?.setlist.find((item) => item.entryId === get().selectedEntryId) : void 0;
      const playing = get().playback.state === PlaybackState.Playing;
      setFollowClock(time, playing);
      set({
        previewTime: time,
        playback: entry && isSongEntry(entry) ? { ...get().playback, clock: practiceClock(entry, time, playing) } : get().playback
      });
    },
    setClientHost: (host) => {
      get().joinStage(host);
    },
    setStageName: (name) => {
      const trimmed = name?.trim() || null;
      if (trimmed) localStorage.setItem(STAGE_NAME_KEY, trimmed);
      else localStorage.removeItem(STAGE_NAME_KEY);
      set({ stageName: trimmed });
      if (trimmed && get().clientSession === "stage" && get().syncConnected) {
        announceSyncHello(get().deviceKind, trimmed);
      }
    },
    refreshJoinAddress: async () => {
      const address = await refreshJoinAddress();
      if (address) set({ joinAddress: address });
    },
    setMasterPage: (page) => set(
      (state) => (
        // Pressing the page you are already on is how a player asks to be taken back to the
        // song they are on, after reading ahead. Nothing about the page changes, so there is
        // nothing for the stage to react to — this gives it something.
        state.masterPage === page ? { stagePinNonce: state.stagePinNonce + 1 } : { masterPage: page }
      )
    ),
    refreshAudioOutputs: async () => {
      try {
        const channels = engine.refreshOutputChannels();
        const outputs = await engine.listOutputs();
        const routing = engine.getRoutingState();
        set({
          audioOutputs: outputs,
          audioOutputChannels: channels || routing.channels,
          audioError: null
        });
      } catch (error) {
        set({ audioError: error instanceof Error ? error.message : String(error) });
      }
    },
    recheckAudioOutputs: async () => {
      try {
        const channels = engine.refreshOutputChannels();
        if (channels >= 3) {
          const requestedMode = get().audioRoutingMode;
          let mode = engine.getRoutingState().routingMode;
          if (requestedMode !== mode) {
            try {
              engine.setRoutingMode(requestedMode);
              mode = requestedMode;
            } catch {
            }
          }
          const outputs = await engine.listOutputs();
          set({
            audioOutputs: outputs,
            audioOutputChannels: channels,
            audioRoutingMode: mode,
            audioError: null,
            audioHint: null
          });
          return;
        }
        if (audioGraphLive(get())) {
          const outputs = await engine.listOutputs();
          set({
            audioOutputs: outputs,
            audioOutputChannels: channels,
            audioError: null,
            audioHint: "Stop playback, then Recheck to apply a new speaker layout."
          });
          return;
        }
        await get().setAudioDevice(get().audioDeviceId, { recreateIfStereo: true });
      } catch (error) {
        set({ audioError: error instanceof Error ? error.message : String(error) });
      }
    },
    setAudioDevice: async (deviceId, opts) => {
      if (get().deviceKind === "client") return;
      const sameDevice = get().audioDeviceId === deviceId && engine.getRoutingState().deviceId === deviceId;
      const recreateIfStereo = opts?.recreateIfStereo ?? !sameDevice;
      if (!sameDevice || recreateIfStereo) {
        controller.stopImmediate();
        metronome.stop();
        clearMetronomeBeat();
        if (get().deviceKind === "master") sendSync({ type: "Metronome", playing: false });
        set({ metronomePlaying: false, audioError: null, audioHint: null });
      }
      try {
        const selected = await engine.selectOutput(deviceId, { recreateIfStereo });
        const requestedMode = get().audioRoutingMode;
        let mode = selected.routingMode;
        if (requestedMode !== mode) {
          try {
            engine.setRoutingMode(requestedMode);
            mode = requestedMode;
          } catch {
          }
        }
        localStorage.setItem(AUDIO_DEVICE_KEY, deviceId);
        localStorage.setItem(AUDIO_ROUTING_KEY, String(mode));
        const outputs = await engine.listOutputs();
        set({
          audioOutputs: outputs,
          audioDeviceId: deviceId,
          audioOutputChannels: selected.channels,
          audioRoutingMode: mode,
          audioError: null,
          audioHint: null
        });
        preloadMetroIntro();
      } catch (error) {
        set({ audioError: error instanceof Error ? error.message : String(error) });
      }
    },
    setAudioRoutingMode: (mode) => {
      if (get().deviceKind === "client") return;
      try {
        engine.setRoutingMode(mode);
        localStorage.setItem(AUDIO_ROUTING_KEY, String(mode));
        set({ audioRoutingMode: mode, audioError: null, audioHint: null });
      } catch (error) {
        set({ audioError: error instanceof Error ? error.message : String(error) });
      }
    },
    setPlayheadTrim: (ms) => {
      const clamped = Math.max(
        -PLAYHEAD_TRIM_MAX_MS,
        Math.min(PLAYHEAD_TRIM_MAX_MS, Math.round(Number.isFinite(ms) ? ms : 0))
      );
      writeStored(PLAYHEAD_TRIM_KEY, String(clamped));
      set({ playheadTrim: clamped / 1e3 });
    },
    toggleSetlistOpen: () => set((state) => ({ setlistOpen: !state.setlistOpen })),
    toggleEditOpen: () => set((state) => ({ editOpen: !state.editOpen })),
    setStageZoom: (value) => set((state) => {
      if (!stagePageCanZoom(state.masterPage)) return {};
      const page = state.masterPage;
      const zoom = clampStageZoom(value);
      if (zoom === state.stageZooms[page]) return {};
      return { stageZooms: { ...state.stageZooms, [page]: zoom } };
    }),
    setSongMixStrip: (songId, channel, patch) => {
      if (get().deviceKind === "remote") {
        const current = get().songMix[songId] ?? emptyMixerBank();
        const next = { ...current, [channel]: { ...current[channel], ...patch } };
        set({ songMix: { ...get().songMix, [songId]: next } });
        sendSync({ type: "RemoteMixer", target: "song", songId, channel, patch });
        return;
      }
      if (get().deviceKind !== "master") return;
      const id = findSongByRef(get().songs, songId)?.id ?? songId;
      const bank = engine.setSongStrip(id, channel, patch);
      set({ songMix: { ...get().songMix, [id]: bank } });
      scheduleSongMixSave(id, get);
      broadcastMixer(patch.muted !== void 0 || patch.solo !== void 0);
    },
    setBusMixStrip: (channel, patch) => {
      if (get().deviceKind === "remote") {
        const current = get().busMix;
        const busMix2 = { ...current, [channel]: { ...current[channel], ...patch } };
        set({ busMix: busMix2 });
        sendSync({ type: "RemoteMixer", target: "bus", channel, patch });
        return;
      }
      if (get().deviceKind !== "master") return;
      const busMix = engine.setBusStrip(channel, patch);
      set({ busMix });
      scheduleGigMixSave(get, set);
      broadcastMixer(patch.muted !== void 0 || patch.solo !== void 0);
    },
    setGigId: async (id) => {
      if (get().deviceKind === "client") return;
      if (get().gigId === id) return;
      flushGigMixSave(get, set);
      const state = get();
      const leaving = currentGig(state);
      const librarySongId = isSongLibraryGig(leaving) ? librarySongIdFromEntry(leaving, state.selectedEntryId) ?? state.librarySongId : state.librarySongId;
      const fallbackSongId = librarySongIdFromEntry(leaving, state.selectedEntryId);
      const gig = state.gigs.find((item) => item.id === id) ?? (id === SONG_LIBRARY_GIG_ID ? songLibraryGig(state.songs) : void 0);
      if (!gig) return;
      const selectedEntryId = id === SONG_LIBRARY_GIG_ID ? pickLibraryEntryId(state.songs, librarySongId, fallbackSongId) : firstSongEntryId(gig);
      await controller.setShow(gig, playbackSongs(state.songs, state.fileIndex, gig));
      applyGigMix(gig, set);
      set({
        gigId: id,
        librarySongId,
        selectedEntryId,
        previewTime: startAtOf(gig, selectedEntryId, state.songs)
      });
      writeStored(ACTIVE_GIG_KEY, id);
      broadcastShow();
      broadcastSelection();
      shareLocalClientPack(get);
    },
    updateGig: async (recipe) => {
      if (get().deviceKind === "client") {
        if (!elifCanEditSetlist(get())) return;
        const state2 = get();
        const { gigs: gigs2, gigId: gigId2, selectedEntryId: selectedEntryId2 } = state2;
        const current2 = gigs2.find((item) => item.id === gigId2);
        if (!current2) return;
        const next2 = recipe(current2);
        if (!elifPlacementValid(next2.setlist)) return;
        const stillThere2 = selectedEntryId2 ? next2.setlist.some((entry) => entry.entryId === selectedEntryId2) : false;
        set({
          gigs: gigs2.map((item) => item.id === next2.id ? next2 : item),
          selectedEntryId: stillThere2 ? selectedEntryId2 : firstSongEntryId(next2)
        });
        sendSync({
          type: "SetlistEdit",
          gigId: next2.id,
          deviceName: get().stageName ?? "",
          setlist: remoteGigEntries(next2, get().songs)
        });
        return;
      }
      const state = get();
      const { gigs, gigId, songs, selectedEntryId } = state;
      const current = gigs.find((item) => item.id === gigId);
      if (!current || isSongLibraryGig(current)) return;
      const next = recipe(current);
      const nextGigs = gigs.map((item) => item.id === next.id ? next : item);
      const sameOrder = current.setlist.length === next.setlist.length && current.setlist.every((entry, index) => entry.entryId === next.setlist[index]?.entryId);
      const stillThere = selectedEntryId ? next.setlist.some((entry) => entry.entryId === selectedEntryId) : false;
      const liveEntryId = state.playback.clock?.setlistEntryId;
      const keepPlayback = setlistChangeKeepsPlayback(state) && (!liveEntryId || next.setlist.some((entry) => entry.entryId === liveEntryId));
      set({
        gigs: nextGigs,
        selectedEntryId: stillThere ? selectedEntryId : firstSongEntryId(next),
        previewTime: stillThere ? state.previewTime : startAtOf(next, firstSongEntryId(next), songs)
      });
      const nextSongs = playbackSongs(songs, get().fileIndex, next);
      if (sameOrder || keepPlayback) {
        controller.replaceSongs(nextSongs);
        controller.replaceShow(next);
      } else {
        await controller.setShow(next, nextSongs);
      }
      broadcastShow();
      await saveGig2(next);
      if (!sameOrder) shareLocalClientPack(get);
    },
    saveSetlist: async (name, initialSongId) => {
      if (get().deviceKind === "client") return false;
      const trimmed = name.trim();
      if (!trimmed || !initialSongId || setlistNameTaken(get().gigs, trimmed)) return false;
      flushGigMixSave(get, set);
      const { gigs, songs, busMix, metronomeVolume } = get();
      const gig = {
        id: createId("gig"),
        name: trimmed,
        date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
        musicians: [],
        setlist: [
          {
            type: "song",
            entryId: createId("entry"),
            songId: initialSongId
          }
        ],
        busMix,
        metronomeVolume
      };
      await saveGig2(gig);
      await controller.setShow(gig, playbackSongs(songs, get().fileIndex, gig));
      applyGigMix(gig, set);
      set({
        gigs: listedGigs([...gigs, gig], songs),
        gigId: gig.id,
        selectedEntryId: firstSongEntryId(gig),
        previewTime: startAtOf(gig, firstSongEntryId(gig), songs)
      });
      writeStored(ACTIVE_GIG_KEY, gig.id);
      broadcastShow();
      broadcastSelection();
      shareLocalClientPack(get);
      return true;
    },
    renameSetlist: async (name) => {
      if (get().deviceKind === "client") return false;
      const trimmed = name.trim();
      const current = currentGig(get());
      if (!current || isSongLibraryGig(current)) return false;
      if (!trimmed || setlistNameTaken(get().gigs, trimmed, current.id)) return false;
      if (current.name === trimmed) return true;
      const next = { ...current, name: trimmed };
      await saveGig2(next);
      set({ gigs: get().gigs.map((item) => item.id === next.id ? next : item) });
      broadcastShow();
      shareLocalClientPack(get);
      return true;
    },
    deleteCurrentSetlist: async () => {
      if (get().deviceKind === "client") return;
      window.clearTimeout(gigMixSaveTimer);
      gigMixSaveTimer = 0;
      gigMixSaveGigId = null;
      const { gigs, gigId, songs } = get();
      if (!gigId || gigId === SONG_LIBRARY_GIG_ID) return;
      await deleteGig(gigId);
      const remaining = listedGigs(
        gigs.filter((item) => item.id !== gigId),
        songs
      );
      const next = remaining.find((item) => !isSongLibraryGig(item)) ?? remaining[0];
      if (next) {
        const selectedEntryId = isSongLibraryGig(next) ? pickLibraryEntryId(songs, get().librarySongId, null) : firstSongEntryId(next);
        await controller.setShow(next, playbackSongs(songs, get().fileIndex, next));
        applyGigMix(next, set);
        set({
          gigs: remaining,
          gigId: next.id,
          selectedEntryId,
          previewTime: startAtOf(next, selectedEntryId, songs)
        });
        writeStored(ACTIVE_GIG_KEY, next.id);
        broadcastShow();
        broadcastSelection();
        shareLocalClientPack(get);
        return;
      }
      const library = songLibraryGig(songs);
      await controller.setShow(library, playbackSongs(songs, get().fileIndex, library));
      applyGigMix(library, set);
      set({
        gigs: [library],
        gigId: library.id,
        selectedEntryId: pickLibraryEntryId(songs, get().librarySongId, null),
        previewTime: 0
      });
      writeStored(ACTIVE_GIG_KEY, library.id);
      broadcastShow();
      shareLocalClientPack(get);
    },
    selectSetlistEntry: (entryId, options) => {
      const pressedCurrent = get().selectedEntryId === entryId;
      const cuePressedSong = () => {
        if (!options?.fromStart) return;
        const gig2 = currentGig(get());
        const entry = gig2?.setlist.find((item) => item.entryId === entryId);
        if (!gig2 || !entry || !isSongEntry(entry)) return;
        if (get().deviceKind === "client") {
          if (clientPracticeMode(get()) && practicePlaysMasterMix(get())) get().seekPractice(0);
          else set({ previewTime: 0 });
          return;
        }
        const snap = controller.getSnapshot();
        const live = snap.state === PlaybackState.Playing || snap.state === PlaybackState.Transitioning;
        const thisSong = snap.clock?.setlistEntryId === entryId;
        if (!live && get().metronomePlaying && pressedCurrent) {
          get().startMetronome(0);
          return;
        }
        set({ previewTime: 0 });
        const index = gig2.setlist.findIndex((item) => item.entryId === entryId);
        const deckOnThis = index >= 0 && snap.currentIndex === index;
        if (live && thisSong || !live && deckOnThis) controller.seek(0);
        if ((!live || thisSong) && !isFreeSetlistMode(gig2.performanceMode) && !songEntryIsFree(get(), entryId)) {
          sendSync({ type: "Seek", time: 0, sent: Date.now() });
        }
      };
      if (stageConnectOn(get()) && !isFreeSetlistMode(currentGig(get())?.performanceMode) && !songEntryIsFree(get(), entryId)) {
        if (get().deviceKind === "client" && showIsRunning(get()) && !elifCanEditSetlist(get())) {
          set({ readingEntryId: null });
          return;
        }
        set({ selectedEntryId: entryId, readingEntryId: null });
        if (get().deviceKind === "master") broadcastSelection();
        cuePressedSong();
        syncFreeVisualMetronome();
        return;
      }
      if (get().deviceKind === "client") {
        if (practiceBlocksSongSelect(get()) && !options?.playNext && !options?.land) return;
        if (get().metronomePlaying) endMetronome();
        if (clientPracticeMode(get()) && get().playback.state === PlaybackState.Playing && !options?.playNext) {
          get().pausePractice();
        }
        const gig2 = currentGig(get());
        const entry = gig2?.setlist.find((item) => item.entryId === entryId);
        set({
          selectedEntryId: entryId,
          readingEntryId: null,
          previewTime: options?.fromStart ? 0 : startAtOf(gig2, entryId, get().songs)
        });
        if (clientPracticeMode(get()) && entry && isSongEntry(entry) && practicePlaysMasterMix(get())) {
          queuePracticeAudio(get(), findSongByRef(get().songs, entry.songId));
        }
        cuePressedSong();
        return;
      }
      cancelFadeStop();
      const currentId = get().selectedEntryId;
      if (currentId === entryId) {
        set({ selectedEntryId: entryId });
        if (options?.fromStart) broadcastSelection();
        cuePressedSong();
        return;
      }
      const playback = get().playback;
      const playing = playback.state === PlaybackState.Playing || playback.state === PlaybackState.Transitioning;
      if (playing && playback.clock?.setlistEntryId === entryId) {
        set({
          selectedEntryId: entryId,
          previewTime: options?.fromStart ? 0 : playback.clock.time
        });
        broadcastSelection();
        cuePressedSong();
        return;
      }
      if (playing || get().playbackPaused) {
        controller.stopImmediate();
        if (stageConnectOn(get()) && songEntryIsFree(get(), entryId)) {
          sendSync({ type: "Stop" });
        }
      }
      if (get().metronomePlaying) {
        metronome.stop();
        clearMetronomeBeat();
        if (get().deviceKind === "master") sendSync({ type: "Metronome", playing: false });
      }
      clearPanic(false);
      const gig = currentGig(get());
      const librarySongId = isSongLibraryGig(gig) ? librarySongIdFromEntry(gig, entryId) ?? get().librarySongId : get().librarySongId;
      set({
        selectedEntryId: entryId,
        librarySongId,
        previewTime: options?.fromStart ? 0 : startAtOf(gig, entryId, get().songs),
        metronomePlaying: false,
        playbackPaused: false,
        panicActive: false,
        panicResumeAt: null
      });
      controller.replaceSongs(engineSongs());
      broadcastSelection();
      cuePressedSong();
      syncFreeVisualMetronome();
    },
    seek: (time) => {
      if (get().deviceKind === "client") {
        if (clientPracticeMode(get())) {
          if (practicePlaysMasterMix(get()) || get().playback.state === PlaybackState.Playing) {
            get().seekPractice(time);
            return;
          }
          const song2 = songForSelectedEntry(get());
          const duration2 = song2?.duration ?? time;
          const clamped2 = Math.max(0, Math.min(time, duration2));
          set({ previewTime: clamped2 });
          if (get().metronomePlaying) get().startMetronome(clamped2);
          return;
        }
        if (!clientStageLive(get())) {
          const song2 = songForSelectedEntry(get());
          const duration2 = song2?.duration ?? time;
          set({ previewTime: Math.max(0, Math.min(time, duration2)) });
        }
        return;
      }
      const { selectedEntryId, songs } = get();
      const gig = currentGig(get());
      const entry = selectedEntryId ? gig?.setlist.find((item) => item.entryId === selectedEntryId) : void 0;
      const song = entry && isSongEntry(entry) ? songs.find((item) => item.id === entry.songId) : void 0;
      const duration = song?.duration ?? time;
      const clamped = Math.max(0, Math.min(time, duration));
      set({ previewTime: clamped });
      const index = entry && gig ? gig.setlist.findIndex((item) => item.entryId === entry.entryId) : -1;
      if (index >= 0 && controller.getSnapshot().currentIndex === index) {
        controller.seek(clamped);
      }
      if (!isFreeSetlistMode(gig?.performanceMode) && !selectedSongIsFree(get())) {
        sendSync({ type: "Seek", time: clamped, sent: Date.now() });
      }
    },
    playSelected: async () => {
      if (get().deviceKind === "client") return;
      cancelFadeStop();
      engine.prime();
      get().stopMetronome();
      const { selectedEntryId } = get();
      const gig = currentGig(get());
      if (!gig || !selectedEntryId) return;
      const index = gig.setlist.findIndex((entry2) => entry2.entryId === selectedEntryId);
      const entry = gig.setlist[index];
      if (index < 0 || !entry || !isSongEntry(entry)) return;
      const snap = controller.getSnapshot();
      const sameSong = snap.currentIndex === index || snap.clock?.setlistEntryId === selectedEntryId;
      if (snap.state === PlaybackState.Loading) return;
      if (snap.state === PlaybackState.Playing || snap.state === PlaybackState.Transitioning) {
        if (sameSong) {
          get().pause();
          return;
        }
        controller.stopImmediate();
      }
      const song = get().songs.find((item) => item.id === entry.songId);
      const files = song ? filesForSong(song, get().fileIndex) : void 0;
      if (usesFreeMetroTransport(get()) || effectivePlayMode(song, files, gig.performanceMode) === PlayMode.Free) {
        return;
      }
      if (effectivePlayMode(song, files, gig.performanceMode) === PlayMode.View) {
        get().startMetronome(get().previewTime);
        return;
      }
      let startTime = get().previewTime;
      const currentSection = sectionAt(song?.sections ?? [], startTime);
      if (sectionNamed(currentSection, "SERBEST")) {
        const following = sectionAfter(song?.sections, currentSection);
        if (following) {
          startTime = following.start;
          set({ previewTime: startTime });
        } else {
          const nextId = nextUnskippedSongEntryId(gig, selectedEntryId);
          if (!nextId) {
            get().stop();
            return;
          }
          get().selectSetlistEntry(nextId);
          const nextEntry = gig.setlist.find((item) => item.entryId === nextId);
          const nextSong = nextEntry && isSongEntry(nextEntry) ? get().songs.find((item) => item.id === nextEntry.songId) : void 0;
          if (!firstSectionNamed(nextSong?.sections, "SERBEST")) {
            await get().playSelected();
          }
          return;
        }
      }
      if (controller.getSnapshot().currentIndex !== index) {
        await controller.selectIndex(index);
      }
      const after = controller.getSnapshot();
      if (after.currentIndex !== index || after.state === PlaybackState.Error) return;
      if (after.state === PlaybackState.Playing || after.state === PlaybackState.Transitioning) return;
      controller.seek(startTime);
      await controller.play();
      set({ playbackPaused: false });
      startTick2();
      broadcastPlay();
    },
    play: async () => {
      if (get().deviceKind === "client") return;
      void applyNativeOutputLatency();
      cancelFadeStop();
      const { gigId, gigs, selectedEntryId, playback } = get();
      const gig = gigs.find((item) => item.id === gigId);
      if (!gig) return;
      let index = selectedEntryId ? gig.setlist.findIndex((entry) => entry.entryId === selectedEntryId) : -1;
      const at = gig.setlist[index];
      if (index < 0 || !at || !isSongEntry(at)) {
        index = gig.setlist.findIndex(isSongEntry);
      }
      if (index < 0) return;
      const busy = playback.state === PlaybackState.Playing || playback.state === PlaybackState.Transitioning;
      if (busy && playback.currentIndex !== index) {
        controller.stopImmediate();
      }
      if (controller.getSnapshot().currentIndex !== index) {
        await controller.selectIndex(index);
      }
      controller.seek(get().previewTime);
      await controller.play();
      set({ playbackPaused: false });
      startTick2();
      broadcastPlay();
    },
    pause: () => {
      if (get().deviceKind === "client") return;
      if (get().metronomePlaying) {
        endMetronome();
        return;
      }
      const time = controller.getClock()?.time ?? get().previewTime;
      controller.pause();
      stopFollowClock(time);
      clearPanic();
      set({ previewTime: time, playbackPaused: true });
      broadcastClock(controller.getSnapshot(), true);
    },
    stop: () => {
      if (get().deviceKind === "client") return;
      cancelFadeStop();
      stopMetronomeTick();
      metronome.stop();
      clearMetronomeBeat();
      if (get().deviceKind === "master") sendSync({ type: "Metronome", playing: false });
      controller.stopImmediate();
      stopFollowClock(0);
      clearPanic(false);
      set({
        previewTime: 0,
        metronomePlaying: false,
        playbackPaused: false,
        panicActive: false,
        panicResumeAt: null
      });
      controller.replaceSongs(engineSongs());
      sendSync({ type: "Stop" });
    },
    fadeStop: () => {
      if (get().deviceKind === "client" || fadeStopTimer) return;
      const durationSeconds = 1.5;
      engine.fadeOut(durationSeconds);
      metronome.fadeOut(durationSeconds);
      fadeStopTimer = window.setTimeout(() => {
        fadeStopTimer = 0;
        stopMetronomeTick();
        metronome.stop();
        clearMetronomeBeat();
        if (get().deviceKind === "master") sendSync({ type: "Metronome", playing: false });
        controller.stopImmediate();
        engine.resetFadeOut();
        metronome.resetFadeOut();
        clearPanic(false);
        set({
          previewTime: 0,
          metronomePlaying: false,
          playbackPaused: false,
          panicActive: false,
          panicResumeAt: null
        });
        controller.replaceSongs(engineSongs());
        sendSync({ type: "Stop" });
      }, durationSeconds * 1e3);
    },
    next: async () => {
      if (get().deviceKind === "client") return;
      await controller.next();
    },
    previous: async () => {
      if (get().deviceKind === "client") return;
      await controller.previous();
    },
    startMetronome: (fromTime = 0) => {
      const state = get();
      if (usesFreeMetroTransport(state)) return;
      const practiceClient = clientPracticeMode(state);
      if (state.deviceKind === "client" && !practiceClient) return;
      cancelFadeStop();
      const song = songForSelectedEntry(state);
      if (!song) return;
      const time = Math.max(0, fromTime);
      const tailPlaying = !practiceClient && (state.playback.state === PlaybackState.Playing || state.playback.state === PlaybackState.Transitioning) && state.playback.outgoingDeck != null;
      if (practiceClient) {
        pausePracticeAudio();
        stopFollowClock(time);
      } else if (!tailPlaying) {
        controller.stopImmediate();
        controller.seek(time);
      }
      const startId = ++metronomeStartGen;
      try {
        const ctx = engine.prime();
        metronome.attach(ctx, engine.busNode("CUE"));
        metronome.setVolume(state.metronomeVolume);
        const parsed = parseSongInfo(song.info);
        const silent = setlistModeIsSilent(currentGig(state)?.performanceMode);
        const begin = () => {
          if (startId !== metronomeStartGen) return;
          set({
            metronomePlaying: true,
            previewTime: time,
            playbackPaused: false,
            ...practiceClient ? {
              playback: {
                ...get().playback,
                state: PlaybackState.Idle,
                clock: null
              }
            } : {}
          });
          metronome.start(metronomeTempoMap(parsed), time, { silent, intro: !silent });
          setFollowClockSource(() => audibleMetronomeTime(), performance.now(), { lock: true });
          startMetronomeTick();
          if (get().deviceKind === "master") broadcastSelection();
        };
        if (silent || metronome.introPrepared(ctx)) {
          begin();
          return;
        }
        void metronome.ensureIntro(ctx).then(begin, (err2) => {
          if (startId !== metronomeStartGen) return;
          begin();
          logger.audio("metronome_intro_failed", {
            error: err2 instanceof Error ? err2.message : String(err2)
          });
        });
      } catch (err2) {
        stopMetronomeTick();
        metronome.stop();
        clearMetronomeBeat();
        set({ metronomePlaying: false });
        armContinuousNextVisual();
        logger.audio("metronome_start_failed", {
          error: err2 instanceof Error ? err2.message : String(err2)
        });
      }
    },
    stopMetronome: () => endMetronome(),
    syncFreeVisualMetronome,
    previewContinuousNextMetronome: () => {
      if (get().metronomePlaying) return;
      if (!usesContinuousMetroTransport(get())) {
        metronome.stop();
        return;
      }
      armContinuousNextVisual();
    },
    setMetronomeVolume: (value) => {
      const next = Math.max(0, Math.min(1, value));
      if (get().deviceKind === "remote") {
        set({ metronomeVolume: next });
        sendSync({ type: "RemoteMixer", target: "metro", volume: next });
        return;
      }
      if (get().deviceKind !== "master") return;
      metronome.setVolume(next);
      set({ metronomeVolume: next });
      scheduleGigMixSave(get, set);
      broadcastMixer();
    },
    saveSongInfo: async (songId, info) => {
      if (get().deviceKind === "client") return;
      const previousMode = parseSongInfo(get().songs.find((song) => song.id === songId)?.info).playMode;
      const parsed = parseSongInfo(info);
      const songs = get().songs.map(
        (song) => song.id === songId ? { ...song, kita: parsed.kita, info: parsed } : song
      );
      controller.replaceSongs(
        playbackSongs(songs, get().fileIndex, get().gigs.find((item) => item.id === get().gigId), panicClickOnly(get()))
      );
      set({ songs });
      void writeSongInfo(songId, parsed).catch(() => void 0);
      void updateSongSettings(songId, (current) => ({
        ...current,
        metroNotes: parsed.metroNotes
      })).catch(() => void 0);
      try {
        const { selectedEntryId, gigs, gigId, metronomePlaying } = get();
        const gig = gigs.find((item) => item.id === gigId);
        const entry = selectedEntryId ? gig?.setlist.find((item) => item.entryId === selectedEntryId) : void 0;
        if (!entry || !isSongEntry(entry) || entry.songId !== songId || !gig) {
          if (metronomePlaying) {
            metronome.start(metronomeTempoMap(parsed), metronome.time);
          }
          return;
        }
        const index = gig.setlist.indexOf(entry);
        const audioPlaying = get().playback.state === PlaybackState.Playing || get().playback.state === PlaybackState.Transitioning;
        if (previousMode === parsed.playMode) {
          if (metronomePlaying) {
            metronome.start(metronomeTempoMap(parsed), metronome.time);
          }
          return;
        }
        const time = audioPlaying ? get().playback.clock?.time ?? get().previewTime : metronomePlaying ? metronome.time : get().previewTime;
        if (audioPlaying || metronomePlaying) {
          if (parsed.playMode === PlayMode.View) {
            get().startMetronome(0);
            return;
          }
          if (parsed.playMode === PlayMode.Free) {
            get().stop();
            return;
          }
          if (audioPlaying && isDeckPlayMode(previousMode)) {
            return;
          }
          stopMetronomeTick();
          metronome.stop();
          set({ metronomePlaying: false, previewTime: time });
          if (!deckReadyAt(index)) {
            await controller.selectIndex(index);
          }
          const after = controller.getSnapshot();
          if (after.currentIndex !== index || after.state === PlaybackState.Error) return;
          controller.seek(time);
          await controller.play();
          startTick2();
          broadcastPlay();
          return;
        }
        if (isDeckPlayMode(parsed.playMode) && !deckReadyAt(index)) {
          await controller.selectIndex(index);
        }
      } finally {
        syncFreeVisualMetronome();
      }
    },
    setSetlistPerformanceMode: async (mode) => {
      if (get().deviceKind === "client") return;
      const current = currentGig(get());
      if (!current) return;
      const previous = parseSetlistPerformanceMode(current.performanceMode);
      const nextMode = parseSetlistPerformanceMode(mode);
      if (previous === nextMode) return;
      const next = { ...current, performanceMode: nextMode };
      if (!isSongLibraryGig(current)) await saveGig2(next);
      set({ gigs: get().gigs.map((item) => item.id === next.id ? next : item) });
      controller.replaceSongs(playbackSongs(get().songs, get().fileIndex, next, panicClickOnly(get())));
      broadcastShow();
      shareLocalClientPack(get);
      const { selectedEntryId, songs, fileIndex, metronomePlaying, playback } = get();
      const entry = selectedEntryId ? next.setlist.find((item) => item.entryId === selectedEntryId) : void 0;
      if (!entry || !isSongEntry(entry)) return;
      const song = songs.find((item) => item.id === entry.songId);
      const files = song ? fileIndex[song.id] : void 0;
      const previousEffective = effectivePlayMode(song, files, previous);
      const effective = effectivePlayMode(song, files, nextMode);
      const audioPlaying = playback.state === PlaybackState.Playing || playback.state === PlaybackState.Transitioning;
      const index = next.setlist.indexOf(entry);
      if (!audioPlaying && !metronomePlaying) {
        if (isDeckPlayMode(effective) && !deckReadyAt(index)) {
          await controller.selectIndex(index);
        }
        if (usesContinuousMetroTransport(get()) && !isFreeSetlistMode(nextMode)) {
          get().previewContinuousNextMetronome();
        }
        syncFreeVisualMetronome();
        return;
      }
      if (effective === PlayMode.Free || isFreeSetlistMode(nextMode)) {
        get().stop();
        syncFreeVisualMetronome();
        return;
      }
      if (effective === PlayMode.View) {
        clearPanic();
        get().startMetronome(0);
        return;
      }
      if (audioPlaying && isDeckPlayMode(previousEffective) && isDeckPlayMode(effective)) {
        return;
      }
      stopMetronomeTick();
      metronome.stop();
      set({ metronomePlaying: false, previewTime: 0 });
      if (!deckReadyAt(index)) await controller.selectIndex(index);
      const after = controller.getSnapshot();
      if (after.currentIndex !== index || after.state === PlaybackState.Error) return;
      controller.seek(0);
      await controller.play();
      startTick2();
      broadcastPlay();
    },
    setPanicTarget: (time) => {
      const song = selectedSongOf(get());
      const snapped = snapToSectionBoundary(song?.sections, time);
      set({ panicTargetTime: snapped });
      broadcastClock(controller.getSnapshot(), true);
    },
    setPanic: (on) => {
      if (get().deviceKind === "client") return;
      const state = get();
      const gig = currentGig(state);
      const entry = state.selectedEntryId ? gig?.setlist.find((item) => item.entryId === state.selectedEntryId) : void 0;
      const song = entry && isSongEntry(entry) ? state.songs.find((item) => item.id === entry.songId) : void 0;
      const files = song ? state.fileIndex[song.id] : void 0;
      const mode = effectivePlayMode(song, files, gig?.performanceMode);
      if (!song || !isDeckPlayMode(mode) || !hasClickFlac(song, files)) return;
      if (on) {
        if (state.panicActive || state.panicResumeAt != null) return;
        if (!songPlaying(state)) return;
        const time2 = state.playback.clock?.time ?? state.previewTime;
        const starts2 = measureStartTimes(song.tempoMap, song.duration);
        const target = panicDefaultTarget(song.sections, starts2, time2);
        set({
          panicActive: true,
          panicTargetTime: target,
          panicResumeAt: null
        });
        controller.replaceSongs(engineSongs());
        broadcastClock(controller.getSnapshot(), true);
        return;
      }
      if (!state.panicActive && state.panicResumeAt == null) return;
      const playing = state.playback.state === PlaybackState.Playing || state.playback.state === PlaybackState.Transitioning;
      if (!playing) {
        finishPanicJump();
        return;
      }
      const time = state.playback.clock?.time ?? state.previewTime;
      const starts = measureStartTimes(song.tempoMap, song.duration);
      const resumeAt = nextMeasureStart(starts, time, song.duration);
      set({ panicActive: false, panicResumeAt: resumeAt });
    }
  };
});
function selectedSongOf(state) {
  const gig = currentGig(state);
  const entry = state.selectedEntryId ? gig?.setlist.find((item) => item.entryId === state.selectedEntryId) : void 0;
  return entry && isSongEntry(entry) ? state.songs.find((item) => item.id === entry.songId) : void 0;
}
function currentGig(state) {
  return state.gigs.find((gig) => gig.id === state.gigId) ?? (state.gigId === SONG_LIBRARY_GIG_ID ? songLibraryGig(state.songs) : void 0);
}

// apps/web/src/ui/master/count-section.ts
var TIME_EPS5 = 0.02;
function isCountSection(song, section) {
  const first = song?.sections[0];
  if (!first || !section) return false;
  return Math.abs(section.start - first.start) < TIME_EPS5 && Math.abs(section.end - first.end) < TIME_EPS5;
}
function skipsCountIn(song) {
  const second = song?.sections[1];
  return Boolean(
    firstSectionNamed(song?.sections, "COUNT") && second && (song?.info?.startAt ?? 0) >= second.start - TIME_EPS5
  );
}
function hidesCountSection(song, section) {
  return skipsCountIn(song) && section?.name.trim().toUpperCase() === "COUNT";
}

// apps/web/src/ui/master/DirectPassMark.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
function DirectPassMark(props) {
  if (!skipsCountIn(props.song)) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "span",
    {
      className: `direct-pass-mark${props.setlist ? " is-setlist" : ""}`,
      role: "img",
      "aria-label": "Direct pass \u2014 no count-in",
      title: "Direct pass \u2014 no count-in"
    }
  );
}

// apps/web/src/ui/master/StageSetlist.tsx
var import_react4 = __toESM(require_react(), 1);

// apps/web/src/ui/shared/icons.tsx
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
function ViewIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "path",
      {
        fillRule: "evenodd",
        d: "M8.6 4.4h6.8L20.2 21H3.8Zm1.5 2.8h3.8L16.8 19H7.2Z"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M11.15 3.2h1.7l4.7 14.6-1.7.55z" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("rect", { x: "14.15", y: "10.4", width: "3.9", height: "3.1", rx: "0.5", transform: "rotate(-20 16.1 11.95)" })
  ] });
}
function NotationIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("ellipse", { cx: "6.8", cy: "18", rx: "3.4", ry: "2.25", transform: "rotate(-32 6.8 18)" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("ellipse", { cx: "15.4", cy: "18", rx: "3.4", ry: "2.25", transform: "rotate(-32 15.4 18)" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("rect", { x: "9.35", y: "4.6", width: "1.7", height: "13.4" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("rect", { x: "17.95", y: "4.6", width: "1.7", height: "13.4" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M9.35 4.35h11.55v2.45H9.35z" })
  ] });
}
function EighthNoteIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("ellipse", { cx: "8.2", cy: "18.1", rx: "3.5", ry: "2.3", transform: "rotate(-28 8.2 18.1)" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("rect", { x: "11.15", y: "4.2", width: "1.75", height: "13.8" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M12.9 4.2c3.4 1.1 5.8 3.4 6.2 6.6-.9-1.4-2.4-2.5-4.2-3.1v3.4c1.9.6 3.4 1.8 4.2 3.4-.5-3.6-3-6.3-6.2-7.4z" })
  ] });
}
function FreeIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M8.2 10.6V7.6a3.8 3.8 0 0 1 7.5-0.8" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("rect", { x: "6.2", y: "10.6", width: "11.6", height: "9.2", rx: "1.5" })
  ] });
}

// apps/web/src/ui/master/play-mode-mark.tsx
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
function PlayModeMark(props) {
  const mark = setlistPlayModeIcon(props.song, props.files, props.setlistMode);
  const Icon = mark.playMode === PlayMode.ClickOnly ? EighthNoteIcon : mark.playMode === PlayMode.Playback ? NotationIcon : mark.playMode === PlayMode.Free ? FreeIcon : ViewIcon;
  const label = mark.playMode === PlayMode.Playback ? "Backing tracks" : "Metronome";
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "span",
    {
      className: `play-mode-mark${props.className ? ` ${props.className}` : ""}`,
      style: props.inheritColor ? void 0 : { color: mark.color },
      title: label,
      "aria-hidden": "true",
      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Icon, {})
    }
  );
}

// apps/web/src/ui/shared/key-color.ts
var BPM_MIN = 60;
var BPM_MAX = 200;
var BPM_STEP = 5;
var BPM_BUCKETS = (BPM_MAX - BPM_MIN) / BPM_STEP;
function listedSongForColor(song, playMode, files) {
  if (!song) return void 0;
  const mode = playMode ?? song.info?.playMode;
  const playback = mode === PlayMode.Playback || mode === PlayMode.ClickOnly || hasPlaybackAudio(song, files) && playMode === PlayMode.Playback;
  return playback ? song : metronomeSongView(song);
}

// apps/web/src/ui/master/setlist-marker.tsx
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);

// apps/web/src/ui/master/stage-scroll.ts
var AUTO_SCROLL_MS = 750;
var frame2 = 0;
var pendingTo = Number.NaN;
var pendingStage = null;
function stopStageScroll() {
  cancelAnimationFrame(frame2);
  frame2 = 0;
  pendingTo = Number.NaN;
  pendingStage = null;
}
function scrollStageTo(stage, top, ms = AUTO_SCROLL_MS) {
  const from = stage.scrollTop;
  const to = Math.max(0, top);
  const delta = to - from;
  if (Math.abs(delta) < 2) return;
  if (pendingStage === stage && Number.isFinite(pendingTo) && Math.abs(pendingTo - to) < 2) return;
  stopStageScroll();
  if (ms <= 0) {
    stage.scrollTop = to;
    return;
  }
  pendingStage = stage;
  pendingTo = to;
  const started = performance.now();
  const tick3 = (now) => {
    const t = Math.min(1, (now - started) / ms);
    const eased = t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
    stage.scrollTop = from + delta * eased;
    if (t < 1) {
      frame2 = requestAnimationFrame(tick3);
      return;
    }
    stopStageScroll();
    stage.dispatchEvent(new Event("stagescrollend"));
  };
  frame2 = requestAnimationFrame(tick3);
}
function scrollStageToNode(stage, target, ms = 280) {
  if (!stage || !target) return;
  const pad = Number.parseFloat(getComputedStyle(stage).paddingTop) || 0;
  const top = target.getBoundingClientRect().top - stage.getBoundingClientRect().top + stage.scrollTop - pad;
  scrollStageTo(stage, top, ms);
}

// apps/web/src/ui/master/StageSetlist.tsx
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);

// apps/web/src/ui/master/metro-draft-notes.tsx
var import_react5 = __toESM(require_react(), 1);
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
function MetroDraftNotes(props) {
  const readOnly = useMasterStore((s2) => s2.deviceKind === "client");
  const saveSongInfo = useMasterStore((s2) => s2.saveSongInfo);
  const stored = parseSongInfo(props.song?.info).metroNotes?.[props.page] ?? "";
  const [text, setText] = (0, import_react5.useState)(stored);
  const [error, setError] = (0, import_react5.useState)(null);
  const dirty = (0, import_react5.useRef)(false);
  const songId = props.song?.id;
  const song = props.song;
  const page = props.page;
  const textRef = (0, import_react5.useRef)(text);
  const fieldRef = (0, import_react5.useRef)(null);
  textRef.current = text;
  const fitField = () => {
    const el = fieldRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  };
  (0, import_react5.useEffect)(() => {
    if (!dirty.current) setText(stored);
    setError(null);
  }, [songId, page, stored]);
  (0, import_react5.useLayoutEffect)(() => {
    fitField();
  }, [text, stored]);
  (0, import_react5.useEffect)(() => {
    const parent = fieldRef.current?.parentElement;
    if (!parent) return;
    const observer = new ResizeObserver(() => fitField());
    observer.observe(parent);
    return () => observer.disconnect();
  }, []);
  (0, import_react5.useEffect)(() => {
    return () => {
      if (!songId || readOnly || !dirty.current || !song) return;
      dirty.current = false;
      const info = parseSongInfo(song.info);
      const nextNotes = { ...info.metroNotes, [page]: textRef.current.trim() || void 0 };
      const metroNotes = nextNotes.lyrics || nextNotes.drums ? {
        ...nextNotes.lyrics ? { lyrics: nextNotes.lyrics } : {},
        ...nextNotes.drums ? { drums: nextNotes.drums } : {}
      } : void 0;
      void saveSongInfo(songId, { ...info, metroNotes });
    };
  }, [songId, page, readOnly, song, saveSongInfo]);
  if (!isRealMetronomeTrack(props.song, props.files)) return null;
  const persist = () => {
    if (!songId || readOnly || !dirty.current || !song) return;
    dirty.current = false;
    const info = parseSongInfo(song.info);
    const nextNotes = { ...info.metroNotes, [page]: text.trim() || void 0 };
    const metroNotes = nextNotes.lyrics || nextNotes.drums ? {
      ...nextNotes.lyrics ? { lyrics: nextNotes.lyrics } : {},
      ...nextNotes.drums ? { drums: nextNotes.drums } : {}
    } : void 0;
    void saveSongInfo(songId, { ...info, metroNotes }).catch((err2) => {
      dirty.current = true;
      setError(err2 instanceof Error ? err2.message : "Could not save notes.");
    });
  };
  if (readOnly) {
    return stored.trim() ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("pre", { className: "metro-draft-notes is-read", children: stored }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "lyrics-empty meta", children: props.emptyLabel });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "metro-draft-notes", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "textarea",
      {
        ref: fieldRef,
        className: "metro-draft-field",
        rows: 1,
        "aria-label": props.label,
        placeholder: props.label,
        value: text,
        onChange: (event) => {
          dirty.current = true;
          setText(event.target.value);
          const el = event.currentTarget;
          el.style.height = "auto";
          el.style.height = `${el.scrollHeight}px`;
        },
        onBlur: persist
      }
    ),
    error ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "stage-song-note-error", children: error }) : null
  ] });
}

// apps/web/src/ui/master/StageSongHead.tsx
var import_react7 = __toESM(require_react(), 1);

// apps/web/src/ui/master/next-song-section.ts
function nextTransportSongEntry(entries, currentEntryId) {
  if (!currentEntryId) return void 0;
  const from = entries.findIndex((entry) => entry.entryId === currentEntryId);
  if (from < 0) return void 0;
  for (let i2 = from + 1; i2 < entries.length; i2++) {
    const entry = entries[i2];
    if (entry && isSongEntry(entry) && !entry.skipped) return entry;
  }
  return void 0;
}
function ignoreOutgoingPlayhead(song, time, chainNext) {
  if (!chainNext || !song) return false;
  return time < 1;
}

// apps/web/src/ui/master/song-metro-beats.tsx
var import_react6 = __toESM(require_react(), 1);
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
function freePageMetroTone(entryId, selectedEntryId, nextSongEntryId) {
  if (!entryId) return void 0;
  if (entryId === selectedEntryId) return "current";
  if (nextSongEntryId && entryId === nextSongEntryId) return "next";
  return void 0;
}
function previewPulseBeatIndex(now, interval) {
  return Math.floor((now + 4e-3) / Math.max(0.05, interval));
}
var previewClocks = /* @__PURE__ */ new Map();
function songPlayheadBeatIndex(map, time) {
  const pos = timeToMusical(map, time);
  return pos.measure * 32 + Math.floor(pos.beat);
}
function songTempoMap(songId) {
  return useMasterStore.getState().songs.find((item) => item.id === songId)?.tempoMap ?? [];
}
function playbackVisualTime(songId) {
  if (followClockPlaying()) return followClockTime();
  const state = useMasterStore.getState();
  if (state.playback.clock?.songId === songId) return state.playback.clock.time ?? 0;
  return state.previewTime;
}
var playbackClocks = /* @__PURE__ */ new Map();
function subscribePlaybackPulse(songId, onBeat) {
  let clock = playbackClocks.get(songId);
  if (!clock) {
    clock = {
      listeners: /* @__PURE__ */ new Set(),
      raf: 0,
      lastBeat: songPlayheadBeatIndex(songTempoMap(songId), playbackVisualTime(songId))
    };
    playbackClocks.set(songId, clock);
    const tick3 = () => {
      const beat = songPlayheadBeatIndex(songTempoMap(songId), playbackVisualTime(songId));
      if (beat !== clock.lastBeat) {
        clock.lastBeat = beat;
        for (const listener of clock.listeners) listener();
      }
      clock.raf = requestAnimationFrame(tick3);
    };
    clock.raf = requestAnimationFrame(tick3);
  }
  clock.listeners.add(onBeat);
  return () => {
    clock.listeners.delete(onBeat);
    if (clock.listeners.size === 0) {
      cancelAnimationFrame(clock.raf);
      playbackClocks.delete(songId);
    }
  };
}
function subscribePreviewPulse(key, interval, onBeat) {
  let clock = previewClocks.get(key);
  if (!clock) {
    clock = { listeners: /* @__PURE__ */ new Set(), raf: 0, lastBeat: -1, interval };
    previewClocks.set(key, clock);
    const tick3 = () => {
      const beat = previewPulseBeatIndex(metronomeVisualNow(), clock.interval);
      if (beat !== clock.lastBeat) {
        clock.lastBeat = beat;
        for (const listener of clock.listeners) listener();
      }
      clock.raf = requestAnimationFrame(tick3);
    };
    clock.raf = requestAnimationFrame(tick3);
  }
  clock.interval = interval;
  clock.listeners.add(onBeat);
  return () => {
    clock.listeners.delete(onBeat);
    if (clock.listeners.size === 0) {
      cancelAnimationFrame(clock.raf);
      previewClocks.delete(key);
    }
  };
}
function MetroPulse({
  song,
  active,
  tone,
  follow
}) {
  const flashRef = (0, import_react6.useRef)(null);
  const parsed = song ? parseSongInfo(song.info) : void 0;
  const pulseKey = parsed ? `${parsed.bpm}:${parsed.denominator}` : "";
  (0, import_react6.useEffect)(() => {
    const el = flashRef.current;
    const flash = () => {
      if (!el) return;
      for (const animation of el.getAnimations()) animation.cancel();
      el.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 90, easing: "ease-out" });
    };
    if (!active) {
      el?.classList.remove("is-on");
      return;
    }
    if (follow === "playback" && song?.id) {
      return subscribePlaybackPulse(song.id, flash);
    }
    if (follow === "sound") {
      const pending = [];
      const unsub = onMetronomeBeat((beat) => {
        pending.push(beat.at);
        pending.sort((left, right) => left - right);
      });
      const paintDue = (now) => {
        let due = false;
        while (pending.length > 0 && (pending[0] ?? 0) <= now + 4e-3) {
          pending.shift();
          due = true;
        }
        if (due) flash();
      };
      let raf = 0;
      const loop = () => {
        paintDue(metronomeVisualNow());
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
      return () => {
        unsub();
        cancelAnimationFrame(raf);
      };
    }
    if (!song || !pulseKey) return;
    const info = parseSongInfo(song.info);
    const interval = Math.max(0.05, secondsPerBeat(tempoAt(metronomeTempoMap(info), 0)));
    return subscribePreviewPulse(pulseKey, interval, flash);
  }, [active, follow, song?.id, pulseKey]);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "span",
    {
      ref: flashRef,
      className: `prep-metro-flash${tone ? ` is-${tone}` : ""}`,
      "aria-hidden": "true"
    }
  );
}

// apps/web/src/ui/master/StageSongHead.tsx
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var PAGE_LABELS = {
  lyrics: "Lyrics",
  score: "Score",
  chord: "Chord",
  drums: "Drums"
};
function StageSongHead(props) {
  const readOnly = useMasterStore((s2) => s2.deviceKind === "client");
  const selectSetlistEntry = useMasterStore((s2) => s2.selectSetlistEntry);
  const frozen = useMasterStore(setlistLocked);
  const freeMode = useMasterStore(usesFreeMetroTransport);
  const followSound = useMasterStore(followsFreeMasterClicks);
  const selectedEntryId = useMasterStore(
    (s2) => usesFreeMetroTransport(s2) ? s2.selectedEntryId : null
  );
  const nextSongEntryId = useMasterStore((s2) => {
    if (!usesFreeMetroTransport(s2)) return null;
    const gig = currentGig(s2);
    const displayed = gig ? withKeyChangeElifs(gig.setlist, s2.songs) : [];
    return nextTransportSongEntry(displayed, s2.selectedEntryId ?? void 0)?.entryId ?? nextUnskippedSongEntryId(gig, s2.selectedEntryId);
  });
  const playing = useMasterStore(songPlaying);
  const metronomePlaying = useMasterStore((s2) => s2.metronomePlaying);
  const song = useMasterStore((s2) => s2.songs.find((item) => item.id === props.songId));
  const fileIndex = useMasterStore((s2) => s2.fileIndex);
  const gigMode = useMasterStore((s2) => currentGig(s2)?.performanceMode);
  const files = song ? [...fileIndex[song.id] ?? [], ...song.folder ? fileIndex[song.folder] ?? [] : []] : void 0;
  const metroTone = freePageMetroTone(props.entryId, selectedEntryId, nextSongEntryId);
  const showTransport = Boolean(metroTone);
  const saveSongInfo = useMasterStore((s2) => s2.saveSongInfo);
  const [notes, setNotes] = (0, import_react7.useState)("");
  const [error, setError] = (0, import_react7.useState)(null);
  const dirty = (0, import_react7.useRef)(false);
  const songId = props.songId;
  const storedNotes = parseSongInfo(song?.info).pageNotes?.[props.page] ?? "";
  const notesRef = (0, import_react7.useRef)(notes);
  notesRef.current = notes;
  (0, import_react7.useEffect)(() => {
    dirty.current = false;
    if (!songId) {
      setNotes("");
      return;
    }
    if (!dirty.current) setNotes(storedNotes);
    setError(null);
  }, [songId, props.page, storedNotes]);
  const persist = (text) => {
    if (!songId || readOnly || !dirty.current) return;
    setError(null);
    dirty.current = false;
    if (!song) return;
    const info = parseSongInfo(song.info);
    void saveSongInfo(songId, {
      ...info,
      pageNotes: { ...info.pageNotes, [props.page]: text }
    }).catch((err2) => {
      dirty.current = true;
      setError(err2 instanceof Error ? err2.message : "Could not save notes.");
    });
  };
  (0, import_react7.useEffect)(() => {
    return () => {
      persist(notesRef.current);
    };
  }, [songId, props.page, readOnly]);
  const openSong = (event) => {
    const title = event.currentTarget.closest(".lyrics-song-title");
    if (title instanceof HTMLElement) {
      scrollStageToNode(title.closest(".lyrics-stage"), title.parentElement?.querySelector(".direct-pass-mark") ?? title);
    }
    if (!props.entryId || frozen) return;
    void selectSetlistEntry(props.entryId);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "lyrics-song-head", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(DirectPassMark, { song }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("h3", { className: "lyrics-song-title", children: [
      showTransport ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "lyrics-song-click", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        MetroPulse,
        {
          song,
          active: Boolean(song),
          follow: metroTone === "current" && (metronomePlaying || freeMode && followSound) ? "sound" : metroTone === "current" && playing && !metronomePlaying ? "playback" : void 0,
          tone: metroTone
        }
      ) }) : null,
      showTransport && song ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        PlayModeMark,
        {
          song,
          files,
          setlistMode: gigMode,
          inheritColor: true,
          className: "lyrics-song-mode"
        }
      ) : null,
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { type: "button", className: "stage-song-title-btn", onClick: openSong, children: props.children })
    ] }),
    songId ? /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
      readOnly ? notes.trim() ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "stage-song-notes", children: notes }) : null : /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        "input",
        {
          type: "text",
          className: notes.trim() ? "stage-song-note-field has-note" : "stage-song-note-field",
          "aria-label": `${PAGE_LABELS[props.page]} notes`,
          value: notes,
          placeholder: "",
          onChange: (event) => {
            dirty.current = true;
            setNotes(event.target.value.replace(/\s*\n+\s*/g, " "));
          },
          onBlur: () => persist(notes)
        }
      ),
      error ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "stage-song-note-error", children: error }) : null
    ] }) : null
  ] });
}

// apps/web/src/ui/master/stage-title-meta.tsx
var import_react8 = __toESM(require_react(), 1);
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
function songToneScale(song) {
  const tone = song?.key?.trim();
  const scale = song?.scale?.trim();
  const text = [tone, scale].filter(Boolean).join(" ");
  return text || void 0;
}
function songStartBpm(song) {
  const bpm = (song?.tempoMap ?? []).find((point) => point.bpm > 0)?.bpm;
  return bpm ? `${bpm} BPM` : void 0;
}
function songTimeSig(song) {
  const meters = [
    ...new Set(
      (song?.tempoMap ?? []).filter((point) => point.numerator > 0 && point.denominator > 0).map((point) => `${point.numerator}/${point.denominator}`)
    )
  ];
  return meters.length > 0 ? meters.join(", ") : void 0;
}
function songKita(song) {
  const kita = song?.kita ?? song?.info?.kita;
  return kita != null && kita > 0 ? `KITA ${kita}` : void 0;
}
var PAGE_META = {
  lyrics: [songToneScale],
  score: [songToneScale, songKita, songTimeSig],
  chord: [songToneScale, songKita, songTimeSig],
  drums: [songKita, songTimeSig, songStartBpm]
};
function stagePageMetaParts(song, page) {
  return PAGE_META[page].map((part) => part(song)).filter((part) => Boolean(part && part.trim()));
}
function SongTitleMeta(props) {
  const fileIndex = useMasterStore((s2) => s2.fileIndex);
  const gig = useMasterStore(currentGig);
  const entry = gig?.setlist.find((item) => item.entryId === props.entryId);
  const playMode = entry && isSongEntry(entry) ? entryPlayMode(entry, props.song?.info) : void 0;
  const files = props.song ? fileIndex[props.song.id] : void 0;
  const parts = stagePageMetaParts(listedSongForColor(props.song, playMode, files), props.page);
  if (parts.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "nota-song-meta", children: parts.map((part, index) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_react8.Fragment, { children: [
    index > 0 ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "nota-song-meta-dot", "aria-hidden": "true" }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: part })
  ] }, `${index}-${part}`)) });
}

// apps/web/src/ui/master/stage-pin.ts
var import_react9 = __toESM(require_react(), 1);

// apps/web/src/ui/master/form-marks.tsx
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
function SegnoIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("svg", { className: "form-cue-icon form-segno-icon", viewBox: "0 0 48 68", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    "path",
    {
      fill: "currentColor",
      d: "M12.2 9.15C12.72 9.15 13.29 9.32 13.53 10.24L13.7 10.82C14.27 13.06 15.54 17.96 19.74 17.96C23.14 17.96 25.5 15.94 25.5 12.43C25.5 11.17 25.21 9.84 24.81 8.52C23.48 4.72 17.96 3.28 13.7 3.28C7.94 3.28 1.38 10.42 1.38 18.65C1.38 20.6 1.78 22.68 2.71 24.75C5.35 30.79 17.38 38.16 18.01 38.45C18.36 38.62 18.53 38.73 18.53 39.08C18.53 39.42 18.36 39.83 18.01 40.4C17.44 41.55 5.53 63.02 5.53 63.02C5.35 63.37 5.24 63.77 5.24 64.12C5.24 65.44 6.27 66.53 7.6 66.53C8.4 66.53 9.27 66.01 9.67 65.27C9.67 65.27 22.5 42.07 22.73 41.55C22.73 41.67 23.42 41.15 23.77 41.15C24.98 41.44 41.55 46.33 41.55 54.16C41.55 57.38 39.6 59.57 36.78 59.97L36.49 60.09C34.76 60.09 33.38 58.88 33.38 56.35L33.38 55.42C33.38 52.26 31.31 49.96 28.95 49.96C28.66 49.96 28.32 50.01 27.97 50.13C24.92 50.88 22.1 52.2 22.1 55.48C22.1 60.55 27.22 64.98 32.12 64.98C33.21 64.98 34.36 64.81 35.57 64.35C42.24 62.16 46.62 56.75 46.62 49.84C46.62 49.09 46.56 48.29 46.45 47.48C45.24 38.33 32.12 30.96 31.14 30.45C30.1 29.87 29.7 29.58 29.7 29.12C29.7 29.01 29.81 28.83 29.87 28.66C30.27 27.97 43.17 4.89 43.17 4.89C43.4 4.43 43.45 4.14 43.45 3.68C43.45 2.36 42.42 1.38 41.15 1.38C40.35 1.38 39.48 1.78 39.08 2.53C39.08 2.53 25.9 26.3 25.38 27.05C25.15 27.51 24.98 27.74 24.63 27.74C24.4 27.74 24.17 27.68 23.83 27.51C23.08 27.22 10.59 22.45 8.4 18.71C7.94 17.78 7.25 16.06 7.25 14.33C7.25 12.09 8.23 9.73 11.74 9.15ZM35.45 25.67C35.45 28.26 37.58 30.39 40.17 30.39C42.82 30.39 44.89 28.26 44.89 25.67C44.89 23.02 42.82 20.95 40.17 20.95C37.58 20.95 35.45 23.02 35.45 25.67ZM12.66 42.42C12.66 39.83 10.59 37.7 7.94 37.7C5.35 37.7 3.17 39.83 3.17 42.42C3.17 45.06 5.35 47.14 7.94 47.14C10.59 47.14 12.66 45.06 12.66 42.42Z"
    }
  ) });
}
function DalSegnoIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { className: "form-ds-mark", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "form-ds-letters", children: "D.S." }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SegnoIcon, {})
  ] });
}
function formCue(kind) {
  if (kind === "segno") return { className: "form-senyo", label: "Segno", icon: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SegnoIcon, {}) };
  return { className: "form-ds", label: "Dal segno", icon: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(DalSegnoIcon, {}) };
}
function formStartCue(block) {
  if (block.segno) return formCue("segno");
  return null;
}
function formEndCue(block) {
  if (block.ds) return formCue("ds");
  return null;
}
function FormSectionBar(props) {
  const showRepeats = props.showRepeats !== false;
  const showJumps = props.showJumps !== false;
  const startCue = showJumps ? formStartCue(props.block) : null;
  const endCue = showJumps ? formEndCue(props.block) : null;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "form-section-bar", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { className: "form-section-lead", children: [
      startCue ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: startCue.className, title: startCue.label, children: startCue.icon }) : null,
      showRepeats && props.block.repeatStart ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "form-repeat-bar", "aria-hidden": "true", children: "|:" }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: props.block.name }),
      showRepeats && props.block.repeatEnd ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "form-repeat-bar", "aria-hidden": "true", children: ":|" }) : null
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { className: "form-section-tail", children: [
      props.extra ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: props.extraClass, children: props.extra }) : null,
      endCue ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: endCue.className, title: endCue.label, children: endCue.icon }) : null
    ] })
  ] });
}

// apps/web/src/ui/master/section-color.ts
function tokens(name) {
  return name.trim().toLocaleUpperCase("tr-TR").split(/[^A-Z0-9]+/).filter((part) => part.length > 0);
}
function isNamed(name, token) {
  const normalized = name.trim().toLocaleUpperCase("tr-TR");
  if (normalized === token || normalized.startsWith(`${token} `)) return true;
  return tokens(name).includes(token);
}
function sectionBarClass(name) {
  if (isNamed(name, "COUNT")) return " section-tone-count";
  if (isNamed(name, "SERBEST")) return " section-tone-serbest";
  if (isNamed(name, "SAN") || isNamed(name, "NAK")) return " section-tone-song";
  if (isNamed(name, "RALL")) return " section-tone-rall";
  if (isNamed(name, "FINAL")) return " section-tone-final";
  return " section-tone-default";
}

// apps/web/src/ui/master/song-cue-bar.tsx
var import_react10 = __toESM(require_react(), 1);
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
function SongCueBar(props) {
  const attr = `data-${props.attrPrefix}-${props.kind}`;
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    "div",
    {
      className: `song-cue-bar is-${props.kind} ${props.tone}`,
      ...{ [attr]: props.tone },
      "aria-label": props.label,
      children: props.label
    }
  );
}
function SongCueBars(props) {
  const cues = songCues(props.song);
  if (cues.length === 0) return null;
  const measure = props.active === false ? void 0 : cueMeasureAt(props.song, props.time);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_jsx_runtime12.Fragment, { children: cues.map((kind) => {
    const label = kind === "rall" ? "RALL" : "FINAL";
    const tone = songCueTone(measure, kind, props.song);
    const bar = /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      SongCueBar,
      {
        label,
        tone,
        kind,
        attrPrefix: props.attrPrefix
      },
      kind
    );
    return props.wrap ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react10.Fragment, { children: props.wrap(bar, kind) }, kind) : bar;
  }) });
}
function paintSongCueBars(root, song, time, active, attrPrefix) {
  const measure = active ? cueMeasureAt(song, time) : void 0;
  for (const kind of ["rall", "final"]) {
    const tone = songCueTone(measure, kind, song);
    const attr = `data-${attrPrefix}-${kind}`;
    for (const el of root.querySelectorAll(`[${attr}]`)) {
      applySongCueTone(el, tone);
      if (kind === "rall") {
        if (attrPrefix === "lyric") el.dataset.lyricRall = tone;
        if (attrPrefix === "chord") el.dataset.chordRall = tone;
        if (attrPrefix === "drum") el.dataset.drumRall = tone;
      } else {
        if (attrPrefix === "lyric") el.dataset.lyricFinal = tone;
        if (attrPrefix === "chord") el.dataset.chordFinal = tone;
        if (attrPrefix === "drum") el.dataset.drumFinal = tone;
      }
    }
  }
}

// apps/web/src/ui/master/DrumView.tsx
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
var TIME_EPS6 = 0.02;
var STEPS_PER_BEAT2 = 4;
function drumBarSteps(map, time) {
  const beats = Math.max(1, Math.round(tempoAt(map, time).numerator) || 4);
  return Math.max(STEPS_PER_BEAT2, beats * STEPS_PER_BEAT2);
}
var NOTE_LANES2 = [
  { name: "F", pc: 5 },
  { name: "E", pc: 4 },
  { name: "D", pc: 2 },
  { name: "C", pc: 0 }
];
function hasNotes(pattern) {
  return pattern.notes.length > 0;
}
function measureCount(map, start, end) {
  if (end - start <= TIME_EPS6) return 0;
  const first = timeToMusical(map, start + TIME_EPS6).measure;
  const last = timeToMusical(map, end - TIME_EPS6).measure;
  return Math.max(0, last - first + 1);
}
function measureEndAt2(map, time) {
  const point = tempoAt(map, time);
  const measure = timeToMusical(map, time).measure;
  return point.time + (measure - point.measure + 1) * secondsPerMeasure(point);
}
function stepOf2(note, start, steps, map, barSteps) {
  const origin2 = timeToMusical(map, start);
  const at = timeToMusical(map, note.time);
  const raw = (at.measure - origin2.measure) * barSteps + (at.beat - origin2.beat) * STEPS_PER_BEAT2;
  return Math.max(0, Math.min(steps - 1, Math.round(raw)));
}
function hasPatternData(song) {
  return (song?.patterns?.length ?? 0) > 0;
}
function laneName2(pitch) {
  const pc = (pitch % 12 + 12) % 12;
  return NOTE_LANES2.find((lane) => lane.pc === pc)?.name;
}
function buildHits(pattern, map) {
  const cycle = Math.max(TIME_EPS6, pattern.end - pattern.time);
  const written = Math.max(1, measureCount(map, pattern.time, pattern.end));
  const barSteps = drumBarSteps(map, pattern.time);
  const steps = written * barSteps;
  const hits = /* @__PURE__ */ new Map();
  for (const note of pattern.notes) {
    const name = laneName2(note.pitch);
    if (!name) continue;
    const lane = hits.get(name) ?? /* @__PURE__ */ new Set();
    lane.add(stepOf2(note, pattern.time, steps, map, barSteps));
    hits.set(name, lane);
  }
  return { hits, cycle, steps, barSteps, written };
}
function isFillText(pattern) {
  return pattern.text.trim().toLocaleUpperCase("tr-TR") === "FILL";
}
function textCueBefore(texts, nextTime, map) {
  const last = texts.filter((pattern) => {
    if (pattern.time > nextTime - TIME_EPS6) return false;
    return measureCount(map, pattern.time, nextTime) === 1;
  });
  const cue = last[last.length - 1];
  if (!cue) return null;
  return { text: cue.text.trim(), start: cue.time, end: Math.min(cue.end, nextTime) };
}
function runCue(texts, start, spanEnd, map) {
  const fills = texts.filter(
    (item) => isFillText(item) && item.time >= start - TIME_EPS6 && item.time < spanEnd - TIME_EPS6
  );
  const fill = fills[fills.length - 1];
  if (fill) return { text: fill.text.trim(), start: fill.time, end: Math.min(fill.end, spanEnd) };
  return textCueBefore(texts, spanEnd, map);
}
function visitFillCue(song, visit) {
  if (!song || !visit) return null;
  const fills = (song.patterns ?? []).filter((pattern) => {
    if (hasNotes(pattern) || !isFillText(pattern)) return false;
    return pattern.time >= visit.start - TIME_EPS6 && pattern.time < visit.end - TIME_EPS6;
  });
  const fill = fills[fills.length - 1];
  if (!fill) return null;
  return { text: fill.text.trim(), start: fill.time, end: Math.min(fill.end, visit.end) };
}
function cueLeadIn(map, start) {
  return Math.max(0, start - secondsPerMeasure(tempoAt(map, start)));
}
function cuePhase(cue, time, map, live) {
  if (!live) return "hidden";
  if (time >= cue.start && time < cue.end) return "live";
  if (time >= cueLeadIn(map, cue.start) && time < cue.start) return "soon";
  return "hidden";
}
function patternRun(pattern, spanEnd, map, cue, start = pattern.time) {
  const written = Math.max(1, measureCount(map, pattern.time, pattern.end));
  const total = Math.max(written, measureCount(map, start, spanEnd));
  const built = buildHits(pattern, map);
  return {
    name: pattern.text.trim(),
    start,
    end: spanEnd,
    cycle: built.cycle,
    repeats: Math.max(1, Math.round(total / written)),
    written,
    steps: built.steps,
    barSteps: built.barSteps,
    hits: built.hits,
    cue
  };
}
function sameGrid(left, right) {
  if (left.name !== right.name) return false;
  if (left.steps !== right.steps || left.barSteps !== right.barSteps) return false;
  if (left.hits.size !== right.hits.size) return false;
  for (const [lane, steps] of left.hits) {
    const other = right.hits.get(lane);
    if (!other || other.size !== steps.size) return false;
    for (const step of steps) if (!other.has(step)) return false;
  }
  return true;
}
function joinRepeatedRuns(runs) {
  const joined = [];
  for (const run of runs) {
    const last = joined[joined.length - 1];
    if (last && !last.cue && !run.cue && Math.abs(last.end - run.start) < TIME_EPS6 && sameGrid(last, run)) {
      joined[joined.length - 1] = { ...last, end: run.end, repeats: last.repeats + run.repeats };
      continue;
    }
    joined.push(run);
  }
  return joined;
}
function sectionChart(song) {
  if (!song) return [];
  const sections = song.sections.length > 0 ? song.sections : [{ name: "", start: 0, end: song.duration }];
  const patterns = [...song.patterns ?? []].sort((a, b) => a.time - b.time);
  const midi = patterns.filter(hasNotes);
  const texts = patterns.filter((pattern) => !hasNotes(pattern));
  return sections.map((section, index) => {
    const runs = [];
    for (const pattern of midi) {
      if (pattern.time < section.start - TIME_EPS6) continue;
      if (pattern.time >= section.end - TIME_EPS6) break;
      const next = midi.find((item) => item.time >= pattern.end - TIME_EPS6);
      const spanEnd = Math.min(next?.time ?? song.duration, section.end);
      runs.push(patternRun(pattern, spanEnd, song.tempoMap, runCue(texts, pattern.time, spanEnd, song.tempoMap)));
    }
    const firstMidi = midi.find(
      (item) => item.time >= section.start - TIME_EPS6 && item.time < section.end - TIME_EPS6
    );
    const openingGap = firstMidi ? firstMidi.time - section.start : 0;
    const bar = secondsPerMeasure(tempoAt(song.tempoMap, section.start));
    if (firstMidi && openingGap > Math.max(TIME_EPS6, bar * 0.5)) {
      const lateName = firstMidi.text.trim().toUpperCase();
      const carried = [...midi].reverse().find((item) => {
        if (item.time >= section.start - TIME_EPS6) return false;
        const text = item.text.trim().toUpperCase();
        if (!text || text === "FILL") return false;
        return text !== lateName;
      });
      if (carried) {
        runs.unshift(
          patternRun(
            carried,
            firstMidi.time,
            song.tempoMap,
            runCue(texts, section.start, firstMidi.time, song.tempoMap),
            section.start
          )
        );
      }
    }
    if (runs.length === 0) {
      const inSection = (item) => item.time >= section.start - TIME_EPS6 && item.time < section.end - TIME_EPS6;
      const sectionTexts = texts.filter(inSection);
      const carried = [...midi].reverse().find((item) => item.time < section.start - TIME_EPS6);
      if (carried && sectionTexts.length > 0 && sectionTexts.every(isFillText)) {
        const next = midi.find((item) => item.time >= section.start - TIME_EPS6);
        const spanEnd = Math.min(next?.time ?? song.duration, section.end);
        runs.push(
          patternRun(
            carried,
            spanEnd,
            song.tempoMap,
            runCue(sectionTexts, section.start, spanEnd, song.tempoMap),
            section.start
          )
        );
      } else {
        for (const pattern of sectionTexts) {
          if (isFillText(pattern)) continue;
          const next = texts.find((item) => item.time >= pattern.end - TIME_EPS6 && !isFillText(item));
          const spanEnd = Math.min(next?.time ?? section.end, section.end);
          runs.push(patternRun(pattern, spanEnd, song.tempoMap, null));
        }
      }
    }
    return { section, index, runs: joinRepeatedRuns(runs) };
  });
}
function writtenChart(song, form) {
  const linear = sectionChart(song);
  const rows = form.blocks.flatMap((block) => {
    const row = linear[block.originIndex];
    if (!row) return [];
    return [
      {
        ...row,
        block,
        copy: 0,
        runs: row.runs.filter((run) => run.start < block.originEnd - TIME_EPS6).map((run) => {
          const end = Math.min(run.end, block.originEnd);
          const total = Math.max(run.written, measureCount(song?.tempoMap ?? [], run.start, end));
          return { ...run, end, repeats: Math.max(1, Math.round(total / run.written)) };
        })
      }
    ];
  });
  return spellReplayedSpans(rows, form);
}
function spellReplayedSpans(rows, form) {
  const ranges = replayedSpanRanges(form);
  if (ranges.length === 0) return rows;
  const out = [];
  let cursor = 0;
  for (const range of ranges) {
    const ids = form.blocks.slice(range.start, range.end + 1).map((block) => block.id);
    const at = rows.findIndex(
      (row, index) => index >= cursor && ids.every((id, offset) => rows[index + offset]?.block.id === id)
    );
    if (at < 0) {
      out.push(...rows.slice(cursor));
      return out;
    }
    out.push(...rows.slice(cursor, at));
    const span = rows.slice(at, at + ids.length);
    out.push(...span.map((row) => spelledCopy(row, 0)));
    out.push(...span.map((row) => spelledCopy(row, 1)));
    cursor = at + ids.length;
  }
  out.push(...rows.slice(cursor));
  return out;
}
function spelledCopy(row, copy) {
  return {
    ...row,
    copy,
    block: {
      ...row.block,
      repeatStart: false,
      repeatEnd: false,
      // D.S. is where the spelled pair finishes, on the second pass.
      ds: copy === 1 ? row.block.ds : false,
      toCoda: copy === 1 ? row.block.toCoda : false
    }
  };
}
function replayedSpanRanges(form) {
  const ranges = [];
  const blocks = form.blocks;
  for (let start = 0; start < blocks.length; start++) {
    if (!blocks[start]?.repeatStart) continue;
    let end = start;
    while (end < blocks.length && !blocks[end]?.repeatEnd) end += 1;
    if (!blocks[end]?.repeatEnd) continue;
    const ids = blocks.slice(start, end + 1).map((block) => block.id);
    if (spanPlayedTwice(form, ids)) ranges.push({ start, end });
    start = end;
  }
  return ranges;
}
function spanPlayedTwice(form, ids) {
  if (ids.length === 0) return false;
  const seq = form.visits.map((visit) => visit.blockId);
  for (let index = 0; index + ids.length * 2 <= seq.length; index++) {
    if (sameIds(seq, index, ids) && sameIds(seq, index + ids.length, ids)) return true;
  }
  return false;
}
function sameIds(seq, index, ids) {
  return ids.every((id, offset) => seq[index + offset] === id);
}
function drumVisitCopy(form, visitIndex) {
  if (visitIndex < 0) return 0;
  for (const range of replayedSpanRanges(form)) {
    const ids = form.blocks.slice(range.start, range.end + 1).map((block) => block.id);
    const seq = form.visits.map((visit) => visit.blockId);
    for (let index = 0; index + ids.length * 2 <= seq.length; index++) {
      if (!sameIds(seq, index, ids) || !sameIds(seq, index + ids.length, ids)) continue;
      if (visitIndex >= index && visitIndex < index + ids.length) return 0;
      if (visitIndex >= index + ids.length && visitIndex < index + ids.length * 2) return 1;
    }
  }
  return 0;
}
function nextDrumPatternRun(chart, pos, nextPos, copy = 0) {
  if (!nextPos) return void 0;
  const nextRow = chart.find((row) => row.block.id === nextPos.block.id && row.copy === copy);
  if (!nextRow) return void 0;
  const covering = nextRow.runs.find(
    (run) => nextPos.originTime >= run.start - TIME_EPS6 && nextPos.originTime < run.end
  );
  if (covering) return covering;
  if (pos && nextPos.block.id !== pos.block.id) return nextRow.runs[0];
  return void 0;
}
function sectionFill(live, time, start, end, map) {
  if (!live) return 0;
  return measureRangeFill(map, start, end, time);
}
function sectionTakesFullRow(row, song) {
  return isCountSection(song, row.section) || row.runs.length >= 2;
}
function packSections(chart, song) {
  const packs = [];
  for (const row of chart) {
    const last = packs[packs.length - 1];
    const head = last?.[0];
    if (last && head && last.length === 1 && !sectionTakesFullRow(head, song) && !sectionTakesFullRow(row, song)) {
      last.push(row);
    } else {
      packs.push([row]);
    }
  }
  return packs;
}
function paintDrumLive(root, chart, packs, form, time, map, song, live, preview, chainNext) {
  const pos = live && !ignoreOutgoingPlayhead(song, time, chainNext) ? formAt(form, time) : null;
  const writtenTime = pos?.originTime ?? time;
  const visitIndex = pos ? form.visits.indexOf(pos.visit) : -1;
  const activeCopy = drumVisitCopy(form, visitIndex);
  const currentRun = pos ? chart.find((row) => row.block.id === pos.block.id && row.copy === activeCopy)?.runs.find((run) => pos.originTime >= run.start && pos.originTime < run.end) : void 0;
  const actualMeasureEnd = pos ? measureEndAt2(map, time) : 0;
  const visitOriginEnd = pos ? pos.block.originStart + Math.max(TIME_EPS6, pos.visit.end - pos.visit.start) : 0;
  const originMeasureEnd = pos ? measureEndAt2(map, pos.originTime) : 0;
  const afterOriginTime = pos && (actualMeasureEnd >= pos.visit.end - TIME_EPS6 || originMeasureEnd >= visitOriginEnd - TIME_EPS6) ? pos.block.originEnd : originMeasureEnd;
  const nextPos = chainNext ? null : pos ? formNextAt(form, time, afterOriginTime) : null;
  const nextCopy = nextPos ? drumVisitCopy(form, form.visits.indexOf(nextPos.visit)) : 0;
  const nextRun = nextDrumPatternRun(chart, pos, nextPos, nextCopy);
  const followingVisit = visitIndex >= 0 ? form.visits[visitIndex + 1] : void 0;
  const followingCopy = followingVisit ? drumVisitCopy(form, visitIndex + 1) : 0;
  const onCopy = (row, blockId, copy) => Boolean(blockId) && row.block.id === blockId && row.copy === copy;
  root.querySelectorAll("[data-drum-pack]").forEach((el, packIndex) => {
    const written = packs[packIndex];
    if (!written) return;
    const packCurrent = written.some((row) => onCopy(row, pos?.block.id, activeCopy));
    const packLeadIn = el.hasAttribute("data-lead-in");
    el.classList.toggle("current", packCurrent);
    el.classList.toggle(
      "next",
      packLeadIn || !packCurrent && written.some((row) => onCopy(row, nextPos?.block.id, nextCopy))
    );
    el.classList.toggle(
      "scroll-next",
      packLeadIn || !packCurrent && written.some((row) => onCopy(row, followingVisit?.blockId, followingCopy))
    );
  });
  for (const row of chart) {
    const rowCurrent = onCopy(row, pos?.block.id, activeCopy);
    const rowNext = onCopy(row, nextPos?.block.id, nextCopy);
    const visit = rowCurrent && pos ? pos.visit : null;
    const fill = visit ? sectionFill(live, time, visit.start, visit.end, song?.tempoMap) : 0;
    const copyAttr = `[data-drum-copy="${row.copy}"]`;
    for (const el of root.querySelectorAll(
      `[data-drum-section="${row.block.id}"]${copyAttr}`
    )) {
      const packLeadIn = Boolean(el.closest("[data-lead-in]"));
      el.classList.toggle("current", Boolean(live && visit));
      el.classList.toggle("next", packLeadIn || !rowCurrent && rowNext);
      el.style.setProperty("--playhead", String(fill));
    }
    for (const el of root.querySelectorAll(
      `[data-block-id="${row.block.id}"]${copyAttr}[data-run-start]`
    )) {
      const start = Number(el.dataset.runStart);
      const run = row.runs.find((item) => Math.abs(item.start - start) < 1e-6);
      if (!run) continue;
      const current = rowCurrent && currentRun === run;
      el.classList.toggle("current", current);
      el.classList.toggle("next", !current && rowNext && nextRun === run);
      const runLive = live && rowCurrent;
      const visitCue = visitFillCue(song, visit);
      const liveCue = visitCue ?? run.cue;
      const phase = liveCue ? cuePhase(liveCue, visitCue ? time : writtenTime, map, runLive) : "hidden";
      const cueLive = phase === "live";
      el.classList.toggle("cue-live", cueLive);
      const cue = el.querySelector(".drum-run-cue");
      if (cue) {
        cue.classList.toggle("current", cueLive);
        cue.hidden = phase === "hidden";
      }
      const count = el.querySelector(".drum-count");
      if (count) {
        const elapsed = current ? Math.max(0, (pos?.originTime ?? time) - run.start) : 0;
        count.textContent = String(
          current ? Math.min(run.repeats, Math.floor(elapsed / run.cycle) + 1) : 1
        );
      }
    }
  }
  paintSongCueBars(root, song, time, live || preview, "drum");
}
var SongPatterns = (0, import_react11.memo)(function SongPatterns2(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
    "article",
    {
      className: "lyrics-song",
      "data-drum-song": props.entryId,
      "data-lead-in": props.leadIn && !hasPatternData(props.song) ? "" : void 0,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(StageSongHead, { songId: props.song?.id, entryId: props.entryId, page: "drums", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "nota-song-name", children: songDisplayName(props.song) }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SongTitleMeta, { song: props.song, entryId: props.entryId, page: "drums" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          DrumChartBody,
          {
            song: props.song,
            live: props.live,
            preview: props.preview,
            leadIn: props.leadIn,
            chainNext: props.chainNext
          }
        )
      ]
    }
  );
});
var DrumChartBody = (0, import_react11.memo)(function DrumChartBody2(props) {
  const fileIndex = useMasterStore((s2) => s2.fileIndex);
  const files = props.song ? [...fileIndex[props.song.id] ?? [], ...props.song.folder ? fileIndex[props.song.folder] ?? [] : []] : void 0;
  const live = Boolean(props.live);
  const form = (0, import_react11.useMemo)(() => songForm(props.song, { identity: "drums" }), [props.song]);
  const chart = (0, import_react11.useMemo)(
    () => hasPatternData(props.song) ? writtenChart(props.song, form) : [],
    [props.song, form]
  );
  const packs = (0, import_react11.useMemo)(() => packSections(chart.filter((row) => !hidesCountSection(props.song, row.section)), props.song), [chart, props.song]);
  const map = props.song?.tempoMap ?? [];
  const rootRef = (0, import_react11.useRef)(null);
  const chartRef = (0, import_react11.useRef)(chart);
  const packsRef = (0, import_react11.useRef)(packs);
  const formRef = (0, import_react11.useRef)(form);
  const mapRef = (0, import_react11.useRef)(map);
  const songRef = (0, import_react11.useRef)(props.song);
  chartRef.current = chart;
  packsRef.current = packs;
  formRef.current = form;
  mapRef.current = map;
  songRef.current = props.song;
  (0, import_react11.useEffect)(() => {
    const root = rootRef.current;
    if (!root) return;
    const paint = (time) => paintDrumLive(
      root,
      chartRef.current,
      packsRef.current,
      formRef.current,
      time,
      mapRef.current,
      songRef.current,
      live,
      Boolean(props.preview),
      Boolean(props.chainNext)
    );
    if (!live) {
      paint(props.preview ? stagePlayheadTime(useMasterStore.getState()) : 0);
      if (!props.preview) return;
      return useMasterStore.subscribe((state) => {
        paint(stagePlayheadTime(state));
      });
    }
    let handle = 0;
    const loop = () => {
      const time = followClockPlaying() ? followClockTime() : stagePlayheadTime(useMasterStore.getState());
      paint(time);
      handle = requestAnimationFrame(loop);
    };
    paint(
      followClockPlaying() ? followClockTime() : stagePlayheadTime(useMasterStore.getState())
    );
    handle = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(handle);
  }, [live, props.preview, props.chainNext, props.song?.id]);
  if (chart.length === 0) {
    return isRealMetronomeTrack(props.song, files) ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      MetroDraftNotes,
      {
        song: props.song,
        files,
        page: "drums",
        label: "Paste pattern notes",
        emptyLabel: "No Pattern Data"
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "lyrics-empty meta", children: "No Pattern Data" });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { ref: rootRef, className: "drum-section-list", children: [
    packs.map((written, packIndex) => {
      const showGrids = written.some((row) => !isCountSection(props.song, row.section));
      const spanRow = written.some(
        (row) => !isCountSection(props.song, row.section) && row.runs.length >= 2
      );
      const pair = written.length === 2;
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
        "div",
        {
          "data-drum-pack": written.map((row) => `${row.block.id}:${row.copy}`).join("+"),
          "data-lead-in": props.leadIn && packIndex === 0 ? "" : void 0,
          className: `drum-pack wide${pair ? " pair" : ""}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: `drum-pack-titles${spanRow ? " span" : ""}`, children: written.map((row) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              DrumSectionTitle,
              {
                row,
                song: props.song,
                block: row.block
              },
              `${row.block.id}:${row.copy}`
            )) }),
            showGrids ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "drum-pack-grids", children: written.map(
              (row) => isCountSection(props.song, row.section) ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", {}, `${row.block.id}:${row.copy}`) : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                "div",
                {
                  "data-drum-section": row.block.id,
                  "data-drum-copy": row.copy,
                  className: "drum-section-runs",
                  children: row.runs.map((run) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                    DrumRunView,
                    {
                      run,
                      blockId: row.block.id,
                      copy: row.copy
                    },
                    `${run.name}-${run.start}`
                  ))
                },
                `${row.block.id}:${row.copy}`
              )
            ) }) : null
          ]
        },
        written.map((row) => `${row.block.id}:${row.copy}`).join("+")
      );
    }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      SongCueBars,
      {
        song: props.song,
        time: 0,
        active: false,
        attrPrefix: "drum"
      }
    )
  ] });
});
function DrumSectionTitle(props) {
  const isCount = isCountSection(props.song, props.row.section);
  if (!props.row.section.name) return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", {});
  const extra = isCount ? props.row.runs.map((run) => run.name).filter(Boolean).join("  ") : null;
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
    "div",
    {
      "data-drum-section": props.block.id,
      "data-drum-copy": props.row.copy,
      className: `lyrics-section drum-section-name playhead-green${sectionBarClass(props.row.section.name)}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "lyrics-playhead", "aria-hidden": "true" }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "lyrics-cue-body drum-section-bar", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          FormSectionBar,
          {
            block: props.block,
            showRepeats: false,
            extra,
            extraClass: isCount ? "drum-count-label" : void 0
          }
        ) })
      ]
    }
  );
}
function DrumRunView(props) {
  const barSteps = Math.max(STEPS_PER_BEAT2, props.run.barSteps);
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    "div",
    {
      className: "drum-run",
      "data-drum-row": `${props.run.name}-${props.run.start}`,
      "data-block-id": props.blockId,
      "data-drum-copy": props.copy,
      "data-run-start": String(props.run.start),
      style: {
        "--drum-steps": String(props.run.steps),
        "--drum-bar-steps": String(barSteps)
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "drum-run-grid", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "drum-measure-name", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "drum-pattern-name", children: props.run.name }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("span", { className: "drum-repeat", children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("span", { children: [
              "x",
              props.run.repeats
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "drum-count", children: "1" })
          ] }),
          props.run.cue ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "drum-run-cue", hidden: true, children: props.run.cue.text }) : null
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "drum-grid", children: NOTE_LANES2.map((lane) => {
          const hits = [...props.run.hits.get(lane.name) ?? []].sort((left, right) => left - right);
          return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "drum-lane", children: hits.map((step) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            "span",
            {
              "data-note": lane.name,
              className: "drum-hit",
              style: { "--drum-hit": String(step) }
            },
            step
          )) }, lane.name);
        }) })
      ] })
    }
  );
}

// ../../../../private/tmp/stage-charts-entry.ts
function hitsObject(hits) {
  const out = {};
  hits.forEach((steps, name) => {
    out[name] = [...steps].sort((left, right) => left - right);
  });
  return out;
}
function markNamedCoda(form) {
  for (const block of form.blocks) {
    if (isCodaName(block.name)) block.coda = true;
  }
}
function chordSheet(song) {
  const form = songForm(song, { identity: "chords" });
  markNamedCoda(form);
  const data = song;
  const has = (data?.chords ?? []).some((chord) => String(chord.text ?? "").trim());
  const chart = chordChart(has ? song : void 0, form);
  return { form, chart, cues: songCues(song) };
}
function drumSheet(song) {
  const form = songForm(song, { identity: "drums" });
  markNamedCoda(form);
  const rows = writtenChart(song, form).map((row) => ({
    section: row.section,
    copy: row.copy,
    block: row.block,
    runs: row.runs.map((run) => ({
      name: run.name,
      start: run.start,
      end: run.end,
      cycle: run.cycle,
      repeats: run.repeats,
      steps: run.steps,
      barSteps: run.barSteps,
      hits: hitsObject(run.hits)
    }))
  }));
  return { form, rows, cues: songCues(song) };
}
function chordAt(chart, form, time, map) {
  const head = chordPlayhead(chart, form, time, map, false);
  if (!head) return null;
  const pos = formAt(form, time);
  return {
    blockId: head.blockId,
    measure: head.measure,
    phase: head.phase,
    playing: head.playing,
    nextPlaying: head.nextPlaying,
    next: head.next ? { blockId: head.next.blockId, measure: head.next.measure } : null,
    fillStart: pos?.visit.start ?? 0,
    fillEnd: pos?.visit.end ?? 0
  };
}
function drumAt(form, time, map) {
  const songFormValue = form;
  const pos = formAt(songFormValue, time);
  if (!pos) return null;
  const visitIndex = songFormValue.visits.indexOf(pos.visit);
  const copy = drumVisitCopy(songFormValue, visitIndex);
  const musicalEnd = measureEnd(map, time);
  const originEnd = measureEnd(map, pos.originTime);
  const visitSpan = Math.max(0.02, pos.visit.end - pos.visit.start);
  const visitOriginEnd = pos.block.originStart + visitSpan;
  const after = musicalEnd >= pos.visit.end - 0.02 || originEnd >= visitOriginEnd - 0.02 ? pos.block.originEnd : originEnd;
  const nextPos = formNextAt(songFormValue, time, after);
  const nextIndex = nextPos ? songFormValue.visits.indexOf(nextPos.visit) : -1;
  return {
    blockId: pos.block.id,
    copy,
    originTime: pos.originTime,
    fillStart: pos.visit.start,
    fillEnd: pos.visit.end,
    nextBlockId: nextPos?.block.id ?? "",
    nextCopy: nextIndex >= 0 ? drumVisitCopy(songFormValue, nextIndex) : 0,
    nextOrigin: nextPos?.originTime ?? -1
  };
}
function measureEnd(map, time) {
  const points = map;
  const point = tempoAt(points, time);
  const measure = timeToMusical(points, time).measure;
  return point.time + (measure - point.measure + 1) * secondsPerMeasure(point);
}
export {
  chordAt,
  chordSheet,
  drumAt,
  drumSheet,
  slotGridPlacement
};
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@capacitor/core/dist/index.js:
  (*! Capacitor: https://capacitorjs.com/ - MIT License *)

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
