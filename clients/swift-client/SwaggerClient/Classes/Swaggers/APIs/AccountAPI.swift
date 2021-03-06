//
// AccountAPI.swift
//
// Generated by swagger-codegen
// https://github.com/swagger-api/swagger-codegen
//

import Alamofire



public class AccountAPI: APIBase {
    /**
     Create a new account for a customer
     
     - parameter body: (body) The customer data to store 
     - parameter completion: completion handler to receive the data and the error objects
     */
    public class func createAccount(body body: CreateAccountRequest, completion: ((data: Customer?, error: ErrorType?) -> Void)) {
        createAccountWithRequestBuilder(body: body).execute { (response, error) -> Void in
            completion(data: response?.body, error: error);
        }
    }


    /**
     Create a new account for a customer
     - PUT /account
     - Creates a new account for the customer in question. Creates a transaction with the amount specified.\n
     - API Key:
       - type: apiKey api_key 
       - name: api_key
     - examples: [{contentType=application/json, example={
  "created" : "2000-01-23T04:56:07.000+0000",
  "name" : "aeiou",
  "id" : "aeiou",
  "accounts" : [ {
    "number" : "aeiou",
    "amount" : 1.3579000000000001069366817318950779736042022705078125,
    "name" : "aeiou",
    "ownerId" : "aeiou"
  } ]
}}]
     
     - parameter body: (body) The customer data to store 

     - returns: RequestBuilder<Customer> 
     */
    public class func createAccountWithRequestBuilder(body body: CreateAccountRequest) -> RequestBuilder<Customer> {
        let path = "/account"
        let URLString = SwaggerClientAPI.basePath + path
        let parameters = body.encodeToJSON() as? [String:AnyObject]

        let requestBuilder: RequestBuilder<Customer>.Type = SwaggerClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "PUT", URLString: URLString, parameters: parameters, isBody: true)
    }

    /**
     Make a new transfer
     
     - parameter body: (body) The accounts to make the transfer between 
     - parameter completion: completion handler to receive the data and the error objects
     */
    public class func createTransfer(body body: CreateTransferRequest, completion: ((data: Transaction?, error: ErrorType?) -> Void)) {
        createTransferWithRequestBuilder(body: body).execute { (response, error) -> Void in
            completion(data: response?.body, error: error);
        }
    }


    /**
     Make a new transfer
     - PUT /transfer
     - Makes a new transfer. It should do some kind of complex validation about whether the originating account has enough money on it, can do overdraft, credit, etc.\n
     - API Key:
       - type: apiKey api_key 
       - name: api_key
     - examples: [{contentType=application/json, example={
  "amount" : 1.3579000000000001069366817318950779736042022705078125,
  "executedAt" : "2000-01-23T04:56:07.000+0000",
  "origin" : {
    "number" : "aeiou"
  },
  "destination" : ""
}}]
     
     - parameter body: (body) The accounts to make the transfer between 

     - returns: RequestBuilder<Transaction> 
     */
    public class func createTransferWithRequestBuilder(body body: CreateTransferRequest) -> RequestBuilder<Transaction> {
        let path = "/transfer"
        let URLString = SwaggerClientAPI.basePath + path
        let parameters = body.encodeToJSON() as? [String:AnyObject]

        let requestBuilder: RequestBuilder<Transaction>.Type = SwaggerClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "PUT", URLString: URLString, parameters: parameters, isBody: true)
    }

    /**
     Get account balance
     
     - parameter accountId: (path) The account id 
     - parameter completion: completion handler to receive the data and the error objects
     */
    public class func getAccount(accountId accountId: String, completion: ((data: Account?, error: ErrorType?) -> Void)) {
        getAccountWithRequestBuilder(accountId: accountId).execute { (response, error) -> Void in
            completion(data: response?.body, error: error);
        }
    }


    /**
     Get account balance
     - GET /account/{accountId}
     - Shows current balance of an account by its ID\n
     - API Key:
       - type: apiKey api_key 
       - name: api_key
     - examples: [{contentType=application/json, example={
  "number" : "aeiou",
  "amount" : 1.3579000000000001069366817318950779736042022705078125,
  "name" : "aeiou",
  "ownerId" : "aeiou"
}}]
     
     - parameter accountId: (path) The account id 

     - returns: RequestBuilder<Account> 
     */
    public class func getAccountWithRequestBuilder(accountId accountId: String) -> RequestBuilder<Account> {
        var path = "/account/{accountId}"
        path = path.stringByReplacingOccurrencesOfString("{accountId}", withString: "\(accountId)", options: .LiteralSearch, range: nil)
        let URLString = SwaggerClientAPI.basePath + path

        let nillableParameters: [String:AnyObject?] = [:]
        let parameters = APIHelper.rejectNil(nillableParameters)

        let requestBuilder: RequestBuilder<Account>.Type = SwaggerClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "GET", URLString: URLString, parameters: parameters, isBody: true)
    }

    /**
     Get account transactions history
     
     - parameter accountId: (path) The account id 
     - parameter completion: completion handler to receive the data and the error objects
     */
    public class func getAccountHistory(accountId accountId: String, completion: ((data: TransactionArray?, error: ErrorType?) -> Void)) {
        getAccountHistoryWithRequestBuilder(accountId: accountId).execute { (response, error) -> Void in
            completion(data: response?.body, error: error);
        }
    }


    /**
     Get account transactions history
     - GET /account/history/{accountId}
     - Shows all transactions for the account in question.\n
     - API Key:
       - type: apiKey api_key 
       - name: api_key
     - examples: [{contentType=application/json, example={
  "transactions" : [ {
    "amount" : 1.3579000000000001069366817318950779736042022705078125,
    "executedAt" : "2000-01-23T04:56:07.000+0000",
    "origin" : {
      "number" : "aeiou"
    },
    "destination" : ""
  } ]
}}]
     
     - parameter accountId: (path) The account id 

     - returns: RequestBuilder<TransactionArray> 
     */
    public class func getAccountHistoryWithRequestBuilder(accountId accountId: String) -> RequestBuilder<TransactionArray> {
        var path = "/account/history/{accountId}"
        path = path.stringByReplacingOccurrencesOfString("{accountId}", withString: "\(accountId)", options: .LiteralSearch, range: nil)
        let URLString = SwaggerClientAPI.basePath + path

        let nillableParameters: [String:AnyObject?] = [:]
        let parameters = APIHelper.rejectNil(nillableParameters)

        let requestBuilder: RequestBuilder<TransactionArray>.Type = SwaggerClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "GET", URLString: URLString, parameters: parameters, isBody: true)
    }

}
