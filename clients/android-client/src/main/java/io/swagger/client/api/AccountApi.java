package io.swagger.client.api;

import io.swagger.client.ApiException;
import io.swagger.client.ApiInvoker;
import io.swagger.client.Pair;

import io.swagger.client.model.*;

import java.util.*;

import io.swagger.client.model.CreateAccountRequest;
import io.swagger.client.model.Customer;
import io.swagger.client.model.ResponseError;
import io.swagger.client.model.Transaction;
import io.swagger.client.model.CreateTransferRequest;
import io.swagger.client.model.Account;
import io.swagger.client.model.TransactionArray;

import org.apache.http.entity.mime.MultipartEntityBuilder;

import java.util.Map;
import java.util.HashMap;
import java.io.File;

public class AccountApi {
  String basePath = "https://localhost/";
  ApiInvoker apiInvoker = ApiInvoker.getInstance();

  public void addHeader(String key, String value) {
    getInvoker().addDefaultHeader(key, value);
  }

  public ApiInvoker getInvoker() {
    return apiInvoker;
  }

  public void setBasePath(String basePath) {
    this.basePath = basePath;
  }

  public String getBasePath() {
    return basePath;
  }

  /**
   * Create a new account for a customer
   * Creates a new account for the customer in question. Creates a transaction with the amount specified.\n
   * @param body The customer data to store
   * @return Customer
   */
  public Customer  createAccount (CreateAccountRequest body) throws ApiException {
    Object localVarPostBody = body;
    
    // verify the required parameter 'body' is set
    if (body == null) {
       throw new ApiException(400, "Missing the required parameter 'body' when calling createAccount");
    }
    

    // create path and map variables
    String localVarPath = "/account".replaceAll("\\{format\\}","json");

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    // header params
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    // form params
    Map<String, String> localVarFormParams = new HashMap<String, String>();



    String[] localVarContentTypes = {
      "application/json"
    };
    String localVarContentType = localVarContentTypes.length > 0 ? localVarContentTypes[0] : "application/json";

    if (localVarContentType.startsWith("multipart/form-data")) {
      // file uploading
      MultipartEntityBuilder localVarBuilder = MultipartEntityBuilder.create();
      

      localVarPostBody = localVarBuilder.build();
    } else {
      // normal form params
          }

    try {
      String localVarResponse = apiInvoker.invokeAPI(basePath, localVarPath, "PUT", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarContentType);
      if(localVarResponse != null){
        return (Customer) ApiInvoker.deserialize(localVarResponse, "", Customer.class);
      }
      else {
        return null;
      }
    } catch (ApiException ex) {
      throw ex;
    }
  }
  /**
   * Make a new transfer
   * Makes a new transfer. It should do some kind of complex validation about whether the originating account has enough money on it, can do overdraft, credit, etc.\n
   * @param body The accounts to make the transfer between
   * @return Transaction
   */
  public Transaction  createTransfer (CreateTransferRequest body) throws ApiException {
    Object localVarPostBody = body;
    
    // verify the required parameter 'body' is set
    if (body == null) {
       throw new ApiException(400, "Missing the required parameter 'body' when calling createTransfer");
    }
    

    // create path and map variables
    String localVarPath = "/transfer".replaceAll("\\{format\\}","json");

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    // header params
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    // form params
    Map<String, String> localVarFormParams = new HashMap<String, String>();



    String[] localVarContentTypes = {
      "application/json"
    };
    String localVarContentType = localVarContentTypes.length > 0 ? localVarContentTypes[0] : "application/json";

    if (localVarContentType.startsWith("multipart/form-data")) {
      // file uploading
      MultipartEntityBuilder localVarBuilder = MultipartEntityBuilder.create();
      

      localVarPostBody = localVarBuilder.build();
    } else {
      // normal form params
          }

    try {
      String localVarResponse = apiInvoker.invokeAPI(basePath, localVarPath, "PUT", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarContentType);
      if(localVarResponse != null){
        return (Transaction) ApiInvoker.deserialize(localVarResponse, "", Transaction.class);
      }
      else {
        return null;
      }
    } catch (ApiException ex) {
      throw ex;
    }
  }
  /**
   * Get account balance
   * Shows current balance of an account by its ID\n
   * @param accountId The account id
   * @return Account
   */
  public Account  getAccount (String accountId) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'accountId' is set
    if (accountId == null) {
       throw new ApiException(400, "Missing the required parameter 'accountId' when calling getAccount");
    }
    

    // create path and map variables
    String localVarPath = "/account/{accountId}".replaceAll("\\{format\\}","json").replaceAll("\\{" + "accountId" + "\\}", apiInvoker.escapeString(accountId.toString()));

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    // header params
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    // form params
    Map<String, String> localVarFormParams = new HashMap<String, String>();



    String[] localVarContentTypes = {
      "application/json"
    };
    String localVarContentType = localVarContentTypes.length > 0 ? localVarContentTypes[0] : "application/json";

    if (localVarContentType.startsWith("multipart/form-data")) {
      // file uploading
      MultipartEntityBuilder localVarBuilder = MultipartEntityBuilder.create();
      

      localVarPostBody = localVarBuilder.build();
    } else {
      // normal form params
          }

    try {
      String localVarResponse = apiInvoker.invokeAPI(basePath, localVarPath, "GET", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarContentType);
      if(localVarResponse != null){
        return (Account) ApiInvoker.deserialize(localVarResponse, "", Account.class);
      }
      else {
        return null;
      }
    } catch (ApiException ex) {
      throw ex;
    }
  }
  /**
   * Get account transactions history
   * Shows all transactions for the account in question.\n
   * @param accountId The account id
   * @return TransactionArray
   */
  public TransactionArray  getAccountHistory (String accountId) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'accountId' is set
    if (accountId == null) {
       throw new ApiException(400, "Missing the required parameter 'accountId' when calling getAccountHistory");
    }
    

    // create path and map variables
    String localVarPath = "/account/history/{accountId}".replaceAll("\\{format\\}","json").replaceAll("\\{" + "accountId" + "\\}", apiInvoker.escapeString(accountId.toString()));

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    // header params
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    // form params
    Map<String, String> localVarFormParams = new HashMap<String, String>();



    String[] localVarContentTypes = {
      "application/json"
    };
    String localVarContentType = localVarContentTypes.length > 0 ? localVarContentTypes[0] : "application/json";

    if (localVarContentType.startsWith("multipart/form-data")) {
      // file uploading
      MultipartEntityBuilder localVarBuilder = MultipartEntityBuilder.create();
      

      localVarPostBody = localVarBuilder.build();
    } else {
      // normal form params
          }

    try {
      String localVarResponse = apiInvoker.invokeAPI(basePath, localVarPath, "GET", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarContentType);
      if(localVarResponse != null){
        return (TransactionArray) ApiInvoker.deserialize(localVarResponse, "", TransactionArray.class);
      }
      else {
        return null;
      }
    } catch (ApiException ex) {
      throw ex;
    }
  }
}
