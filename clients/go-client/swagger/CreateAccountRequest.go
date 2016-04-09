package swagger

import (
)

type CreateAccountRequest struct {
    Amount  Number  `json:"amount,omitempty"`
Customer  CustomerID  `json:"customer,omitempty"`
Name  string  `json:"name,omitempty"`
}
