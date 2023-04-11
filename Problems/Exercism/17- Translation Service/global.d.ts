



/*
  # Instructions:
  In this exercise, you'll be providing a TranslationService that provides basic translation services to free members, 
  and advanced translation to premium members with quality assurances.
  The API
  You have found an outer space translation API that fulfills any translation request in a reasonable amount of time. 
  You want to capitalize on this. 
  The space translators are extremely fickle and hate redundancy, so they also provide API storage satellites 
  where you can fetch past translations without bothering them.
  /I Fetching a translation
  api.fetch(text) fetches a translation of text from the API storage and returns a promise that provides two values:
  * translation: the actual translation
  * quality: the quality expressed as a number
  
  If a translation is not found in the API storage, the API throws a NotAvailable error. 
  Translations can be added using the api.request method. If 'text' is not translatable, the API throws an Untranslatable error.
  api.fetch('jIyaj');
  // => Promise({ resolved: 'I understand' })
  
  /I Requesting a translation
  Some translations are sure to exist, but haven't been added to the API storage yet. 
  That's the difference between NotAvailable ( not in storage, but can be requested ) and Untranslatable ( cannot be translated ).
  api.request(text, callback) requests that a translation of text be performed and added into the API storage. On completion the callback function is called.
  * On success callback is passed undefined: this indicates the translation was successful and is accessible using the api.fetch method.
  * On failure callback is passed an error: this indicates something went wrong. The outspace API is unstable, which means that the API fails often. 
    If that happens, it is okay to api.request again.
    
  api.request('majQa’', callback);
  // => undefined
  //
  // later: the passed callback is called with undefined
  //        because it was successful.
  
  ⚠ Warning! ⚠
  Caution
  The API works its magic by teleporting in the various translators when a request comes in. 
  This is a very costly action, so it shouldn't be called when a translation is available. 
  Unfortunately, not everyone reads the manual, so there is a system in place to kick-out bad actors.
  If an api.request is called for text is available, the API throws an AbusiveClientError for this call, and every call after that. 
  Ensure that you never request a translation if something has already been translated.
  1. Fetch a translation, ignoring the quality
  The free service only provides translations that are currently in the API storage.
  Implement a method free(text) that provides free members with translation that already exist in the API storage. Ignore the quality and forward any errors thrown by the API.
  * Returns the translation if it can be retrieved, regardless of its quality
  * Forwards any error from the translation API
  * Uses the api.fetch method (api.fetch returns a promise)
  
  service.free('jIyaj');
  // => Promise<...> resolves "I understand."
  service.free("jIyajbe'");
  // => Promise<...> rejects Error("Not yet translated")
  
  2. Fetch a batch of translations, all-or-nothing
  Implement a method batch([text, text, ...]) for free members that translates an array of text using the free service, 
  returning all the translations, or a single error.
  *  Resolves with all the translations (in the same order), if they are all available
  *  Rejects with the first error that is encountered
  *  Rejects with a BatchIsEmpty error if no texts are given
  
  service.batch(['jIyaj', "majQa'"]);
  // => Promise<...> resolves ["I understand.", "Well done!"]
  service.batch(['jIyaj', "jIyajbe'"]);
  // => Promise<...> rejects new Error("Not yet translated")
  service.batch([]);
  // => Promise<...> rejects BatchIsEmpty()
  
  3. Request a translation, retrying at most 2 times
  Implement a premium user method request(text), that requests a translation be added to the API storage. The request should automatically retry if a failure occurs.
  It should perform no more than 3 calls for the same request (don't upset the space translators!!!).
  * If api.request does not return an error, resolve with undefined
  * If api.request returns an error, retry at most two times
  * If you run out of retries, reject with the last error received
  
  service.request("jIyajbe'");
  // => Promise<...> resolves (with nothing), can now be retrieved using the fetch API
  
  4. Fetch a translation, inspect the quality, or request it
  Implement a premium user method premium(text, quality) to fetch a translation. If a translation is NotAvailable, request the translation and fetch it after its been added to the API storage. The method should only return the translation if it meets a certain quality threshold.
  * If api.fetch resolves, check the quality before resolving
  * If api.fetch rejects, request the translation instead
  * If api.request rejects, forward the error
  
  service.premium("jIyajbe'", 100);
  // => Promise<...> resolves "I don't understand."
  service.premium("'arlogh Qoylu'pu'?", 100);
  // => Promise<...> rejects QualityThresholdNotMet()
  service.premium("'arlogh Qoylu'pu'?", 40);
  // => Promise<...> resolves "What time is it?"
  
  # Note  :
  The correct translation of 'arlogh Qoylu'pu'? is How many times has it been heard?.
  
  11-April-2023
*/


/**
 * These are the shapes of the external service', the return values and the
 * functions. Don't change these. In various IDEs, such as vscode, this will add
 * type information on the fly
 */
interface ExternalApi {
  fetch: fetchTranslation;
  request: requestTranslation;
}
interface Translation {
  translation: string;
  quality: number;
}
type fetchTranslation = (text: string) => Promise<Translation>;
type requestTranslation = ( 
  text: string,
  callback: (err?: Error) => void
 ) => void;
