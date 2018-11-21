"use strict";
const basePathRoutes = ["/health", "/healthz", "/healthcheck"];
const baseMethods = ["get", "head"];
const baseMessage = { message: "OK" };
module.exports = (customRoutes, methods, jsonMessage) => {
  !jsonMessage ? (jsonMessage = baseMessage) : jsonMessage;
  !methods ? (methods = baseMethods) : (methods = baseMethods.concat(methods));
  !customRoutes ? (customRoutes = basePathRoutes) : (customRoutes = basePathRoutes.concat(customRoutes));
  return (req, res, next) => {
    customRoutes.indexOf(req.path.toLowerCase()) >= 0 && methods.indexOf(req.method.toLowerCase()) >= 0
      ? res.status(200).json(jsonMessage)
      : next();
  };
};
