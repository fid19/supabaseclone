'use client'

export function singleton<Value>(name: string, value: () => Value): Value {
    const yolo = global as any
    yolo.__singletons ??= {}
    yolo.__singletons[name] ??= value()
    console.log(yolo.__singletons[name])
    return yolo.__singletons[name]
}