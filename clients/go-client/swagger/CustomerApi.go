package swagger

import (
    "strings"
    "fmt"
    "encoding/json"
    "errors"
    "github.com/dghubble/sling"
)

type CustomerApi struct {
    basePath  string
}

func NewCustomerApi() *CustomerApi{
    return &CustomerApi {
        basePath:   "https://localhost/",
    }
}

func NewCustomerApiWithBasePath(basePath string) *CustomerApi{
    return &CustomerApi {
        basePath:   basePath,
    }
}

/**
 * Create a new customer
 * Stores a new customer in the database. Will generate a random id, unless provided with one.\n
 * @param body The customer data to store
 * @return Customer
 */
//func (a CustomerApi) CreateCustomer (body CreateCustomerRequest) (Customer, error) {
func (a CustomerApi) CreateCustomer (body CreateCustomerRequest) (Customer, error) {

    _sling := sling.New().Put(a.basePath)

    // create path and map variables
    path := "//customer"

    _sling = _sling.Path(path)

    // accept header
    accepts := []string { "application/json" }
    for key := range accepts {
        _sling = _sling.Set("Accept", accepts[key])
        break // only use the first Accept
    }

// body params
    _sling = _sling.BodyJSON(body)

  var successPayload = new(Customer)

  // We use this map (below) so that any arbitrary error JSON can be handled.
  // FIXME: This is in the absence of this Go generator honoring the non-2xx
  // response (error) models, which needs to be implemented at some point.
  var failurePayload map[string]interface{}

  httpResponse, err := _sling.Receive(successPayload, &failurePayload)

  if err == nil {
    // err == nil only means that there wasn't a sub-application-layer error (e.g. no network error)
    if failurePayload != nil {
      // If the failurePayload is present, there likely was some kind of non-2xx status
      // returned (and a JSON payload error present)
      var str []byte
      str, err = json.Marshal(failurePayload)
      if err == nil { // For safety, check for an error marshalling... probably superfluous
        // This will return the JSON error body as a string
        err = errors.New(string(str))
      }
  } else {
    // So, there was no network-type error, and nothing in the failure payload,
    // but we should still check the status code
    if httpResponse == nil {
      // This should never happen...
      err = errors.New("No HTTP Response received.")
    } else if code := httpResponse.StatusCode; 200 > code || code > 299 {
        err = errors.New("HTTP Error: " + string(httpResponse.StatusCode))
      }
    }
  }

  return *successPayload, err
}
/**
 * Get customer data
 * Shows customer data by their ID\n
 * @param customerId The customer id
 * @return Customer
 */
//func (a CustomerApi) GetCustomer (customerId string) (Customer, error) {
func (a CustomerApi) GetCustomer (customerId string) (Customer, error) {

    _sling := sling.New().Get(a.basePath)

    // create path and map variables
    path := "//customer/{customerId}"
    path = strings.Replace(path, "{" + "customerId" + "}", fmt.Sprintf("%v", customerId), -1)

    _sling = _sling.Path(path)

    // accept header
    accepts := []string { "application/json" }
    for key := range accepts {
        _sling = _sling.Set("Accept", accepts[key])
        break // only use the first Accept
    }


  var successPayload = new(Customer)

  // We use this map (below) so that any arbitrary error JSON can be handled.
  // FIXME: This is in the absence of this Go generator honoring the non-2xx
  // response (error) models, which needs to be implemented at some point.
  var failurePayload map[string]interface{}

  httpResponse, err := _sling.Receive(successPayload, &failurePayload)

  if err == nil {
    // err == nil only means that there wasn't a sub-application-layer error (e.g. no network error)
    if failurePayload != nil {
      // If the failurePayload is present, there likely was some kind of non-2xx status
      // returned (and a JSON payload error present)
      var str []byte
      str, err = json.Marshal(failurePayload)
      if err == nil { // For safety, check for an error marshalling... probably superfluous
        // This will return the JSON error body as a string
        err = errors.New(string(str))
      }
  } else {
    // So, there was no network-type error, and nothing in the failure payload,
    // but we should still check the status code
    if httpResponse == nil {
      // This should never happen...
      err = errors.New("No HTTP Response received.")
    } else if code := httpResponse.StatusCode; 200 > code || code > 299 {
        err = errors.New("HTTP Error: " + string(httpResponse.StatusCode))
      }
    }
  }

  return *successPayload, err
}
