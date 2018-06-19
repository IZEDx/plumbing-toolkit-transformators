
import { Pipe, Sink, Operator } from "plumbing-toolkit-core";

export function flatMap<T, K>(mapFn: (x: T) => Pipe<K>): Operator<T, K> 
{
    return Pipe.operator( async (value: T, sink: Sink<K>) => {
        mapFn(value).flush( Sink.suppresReturn(sink) );
    });
}
