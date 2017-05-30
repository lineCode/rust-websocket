initSidebarItems({"enum":[["MergedItem","An item returned from a merge stream, which represents an item from one or both of the underlying streams."]],"fn":[["channel","Creates an in-memory channel implementation of the `Stream` trait."],["empty","Creates a stream which contains no elements."],["futures_unordered","Converts a list of futures into a `Stream` of results from the futures."],["iter","Converts an `Iterator` over `Result`s into a `Stream` which is always ready to yield the next value."],["once","Creates a stream of single element"],["repeat","Create a stream which produces the same item repeatedly."],["unfold","Creates a `Stream` from a seed and a closure returning a `Future`."]],"struct":[["AndThen","A stream combinator which chains a computation onto values produced by a stream."],["BufferUnordered","An adaptor for a stream of futures to execute the futures concurrently, if possible, delivering results as they become available."],["Buffered","An adaptor for a stream of futures to execute the futures concurrently, if possible."],["CatchUnwind","Stream for the `catch_unwind` combinator."],["Chain","An adapter for chaining the output of two streams."],["Chunks","An adaptor that chunks up elements in a vector."],["Collect","A future which collects all of the values of a stream into a vector."],["Concat","A stream combinator to concatenate the results of a stream into the first yielded item."],["Empty","A stream which contains no elements."],["Filter","A stream combinator used to filter the results of a stream and only yield some values."],["FilterMap","A combinator used to filter the results of a stream and simultaneously map them to a different type."],["Flatten","A combinator used to flatten a stream-of-streams into one long stream of elements."],["Fold","A future used to collect all the results of a stream into one generic type."],["ForEach","A stream combinator which executes a unit closure over each item on a stream."],["Forward","Future for the `Stream::forward` combinator, which sends a stream of values to a sink and then waits until the sink has fully flushed those values."],["FromErr","A stream combinator to change the error type of a stream."],["Fuse","A stream which \"fuse\"s a stream once it's terminated."],["FutureSender","Future returned by `Sender::send`."],["FuturesUnordered","An adaptor for a stream of futures to execute the futures concurrently, if possible, delivering results as they become available."],["IterStream","A stream which is just a shim over an underlying instance of `Iterator`."],["Map","A stream combinator which will change the type of a stream from one type to another."],["MapErr","A stream combinator which will change the error type of a stream from one type to another."],["Merge","An adapter for merging the output of two streams."],["Once","A stream which emits single element and then EOF."],["OrElse","A stream combinator which chains a computation onto errors produced by a stream."],["Peekable","A `Stream` that implements a `peek` method."],["Receiver","The receiving end of a channel which implements the `Stream` trait."],["Repeat","Stream that produces the same element repeatedly."],["Select","An adapter for merging the output of two streams."],["SendError","Error type for sending, used when the receiving end of the channel is dropped"],["Sender","The transmission end of a channel which is used to send values."],["Skip","A stream combinator which skips a number of elements before continuing."],["SkipWhile","A stream combinator which skips elements of a stream while a predicate holds."],["SplitSink","A `Sink` part of the split pair"],["SplitStream","A `Stream` part of the split pair"],["StreamFuture","A combinator used to temporarily convert a stream into a future."],["Take","A stream combinator which returns a maximum number of elements."],["TakeWhile","A stream combinator which takes elements from a stream while a predicate holds."],["Then","A stream combinator which chains a computation onto each item produced by a stream."],["Unfold","A stream which creates futures, polls them and return their result"],["Wait","A stream combinator which converts an asynchronous stream to a blocking iterator."],["Zip","An adapter for merging the output of two streams."]],"trait":[["Stream","A stream of values, not all of which may have been produced yet."]],"type":[["BoxStream","A type alias for `Box<Stream + Send>`"]]});