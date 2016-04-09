package io.swagger.client;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import java.lang.reflect.Type;
import java.util.List;
import io.swagger.client.model.*;

public class JsonUtil {
  public static GsonBuilder gsonBuilder;

  static {
    gsonBuilder = new GsonBuilder();
    gsonBuilder.serializeNulls();
    gsonBuilder.setDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ");
  }

  public static Gson getGson() {
    return gsonBuilder.create();
  }

  public static String serialize(Object obj){
    return getGson().toJson(obj);
  }

  public static <T> T deserializeToList(String jsonString, Class cls){
    return getGson().fromJson(jsonString, getListTypeForDeserialization(cls));
  }

  public static <T> T deserializeToObject(String jsonString, Class cls){
    return getGson().fromJson(jsonString, getTypeForDeserialization(cls));
  }

  public static Type getListTypeForDeserialization(Class cls) {
    String className = cls.getSimpleName();
    
    if ("Account".equalsIgnoreCase(className)) {
      return new TypeToken<List<Account>>(){}.getType();
    }
    
    if ("AccountID".equalsIgnoreCase(className)) {
      return new TypeToken<List<AccountID>>(){}.getType();
    }
    
    if ("CreateAccountRequest".equalsIgnoreCase(className)) {
      return new TypeToken<List<CreateAccountRequest>>(){}.getType();
    }
    
    if ("CreateCustomerRequest".equalsIgnoreCase(className)) {
      return new TypeToken<List<CreateCustomerRequest>>(){}.getType();
    }
    
    if ("CreateTransferRequest".equalsIgnoreCase(className)) {
      return new TypeToken<List<CreateTransferRequest>>(){}.getType();
    }
    
    if ("Customer".equalsIgnoreCase(className)) {
      return new TypeToken<List<Customer>>(){}.getType();
    }
    
    if ("CustomerID".equalsIgnoreCase(className)) {
      return new TypeToken<List<CustomerID>>(){}.getType();
    }
    
    if ("ResponseError".equalsIgnoreCase(className)) {
      return new TypeToken<List<ResponseError>>(){}.getType();
    }
    
    if ("Stats".equalsIgnoreCase(className)) {
      return new TypeToken<List<Stats>>(){}.getType();
    }
    
    if ("Transaction".equalsIgnoreCase(className)) {
      return new TypeToken<List<Transaction>>(){}.getType();
    }
    
    if ("TransactionArray".equalsIgnoreCase(className)) {
      return new TypeToken<List<TransactionArray>>(){}.getType();
    }
    
    return new TypeToken<List<Object>>(){}.getType();
  }

  public static Type getTypeForDeserialization(Class cls) {
    String className = cls.getSimpleName();
    
    if ("Account".equalsIgnoreCase(className)) {
      return new TypeToken<Account>(){}.getType();
    }
    
    if ("AccountID".equalsIgnoreCase(className)) {
      return new TypeToken<AccountID>(){}.getType();
    }
    
    if ("CreateAccountRequest".equalsIgnoreCase(className)) {
      return new TypeToken<CreateAccountRequest>(){}.getType();
    }
    
    if ("CreateCustomerRequest".equalsIgnoreCase(className)) {
      return new TypeToken<CreateCustomerRequest>(){}.getType();
    }
    
    if ("CreateTransferRequest".equalsIgnoreCase(className)) {
      return new TypeToken<CreateTransferRequest>(){}.getType();
    }
    
    if ("Customer".equalsIgnoreCase(className)) {
      return new TypeToken<Customer>(){}.getType();
    }
    
    if ("CustomerID".equalsIgnoreCase(className)) {
      return new TypeToken<CustomerID>(){}.getType();
    }
    
    if ("ResponseError".equalsIgnoreCase(className)) {
      return new TypeToken<ResponseError>(){}.getType();
    }
    
    if ("Stats".equalsIgnoreCase(className)) {
      return new TypeToken<Stats>(){}.getType();
    }
    
    if ("Transaction".equalsIgnoreCase(className)) {
      return new TypeToken<Transaction>(){}.getType();
    }
    
    if ("TransactionArray".equalsIgnoreCase(className)) {
      return new TypeToken<TransactionArray>(){}.getType();
    }
    
    return new TypeToken<Object>(){}.getType();
  }

};
