const log = (str, formatter) => {
  const _formatter = formatter || (str => str);
  console.log(_formatter(str));
};

log("hello", str => str.toUpperCase());

const getLogger = (type) => {
  switch (type) {
    case "error": {
      return console.error
    }
    case "warn": {
      return console.warn
    }
    case "info":
    default: {
      return console.log
    }
  }
};

const logWarn = getLogger("warn");

logWarn("hello");