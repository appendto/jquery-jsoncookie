# jQuery JSON Cookie

Cookies are the most widely available form of persistent client-side storage.
Unfortunately there's no built-in support for storing structured data inside of one.
That's where the jsoncookie plugin comes in;
this plugin allows you to store any data that can be represented via JSON.
This means that you can store objects, arrays, strings, numbers, and booleans
and get the data back exactly as you expect.
(Standard cookie size limitations of 4K still exist)

## Usage

	$.cookie( string key, mixed value [, hash options ] )

Stores a value for a given key.

* `key`: Identifier for the value being stored.
* `value`: The value to store. The value can be anything that can be serialized as JSON.
* [`options`]: A set of key/value pairs that relate to settings for storing the value (see Options section below).

 

	$.cookie( string key )

Gets a stored value based on the key.

	$.cookie()

Gets a hash of all stored values.

### Options

* `expires` Duration in milliseconds that the cookie should exist.
* `domain` Limit which pages can access the cookie based on the (sub)domain. Defaults to the current domain.
* `path` Limit which pages can access the cookie based on the path. Defaulst to the current path.
* `secure` Boolean. Whether to limit the cookie to only be sent over secure connections.

---

For more information on cookies, see the [MDN documentation](https://developer.mozilla.org/en/document.cookie).
