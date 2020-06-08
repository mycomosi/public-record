

export default function (component) {
    return {
        /**
         *
         * @param options
         * @return {*|any}
         */
        setOptions: (options) => {
            return component.setOptions(options);
        },

        /**
         *
         * @return {*}
         */
        getOptions() {
            return component.getOptions();
        },

        /**
         *
         * @param level
         * @param message
         * @param args
         * @return {string}
         */
        logMessage: (level, message, ...args) => {
            return component.logMessage(level, message, ...args);
        },

        /**
         *
         * @param options
         * @param filters
         * @return {*|string}
         */
        printMessages(options, filters) {
            return component.printMessages(options, filters);
        },

        /**
         * Clears log messages
         */
        clearMessages() {
            component.clearMessages();
        },

        /**
         *
         * @return {HTMLElement}
         */
        component: () => {
            return component;
        }
    };
}