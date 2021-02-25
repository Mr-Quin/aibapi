import { createLogger, format, transports } from 'winston'
import store from '../store'
const { combine, timestamp, printf, colorize } = format

const customFormat = printf(({ level, message, timestamp }) => `${timestamp} ${level}: ${message}`)

const transport = {
    console: new transports.Console({
        format: combine(colorize(), customFormat),
        level: 'error',
        handleExceptions: true,
    }),
}

const logger = createLogger({
    level: 'error',
    format: combine(timestamp({ format: 'YYYY-MM-DD HH:mm:ss' })),
    defaultMeta: { service: 'bilibili-api' },
    transports: [transport.console],
    exitOnError: true,
})

store.subscribe(
    (debug) => {
        if (debug) {
            transport.console.level = 'debug'
        } else {
            transport.console.level = 'error'
        }
    },
    (state) => state.debug
)

export default logger
