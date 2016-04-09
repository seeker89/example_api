package swagger

import (
    "time"
)

type Customer struct {
    Created  time.Time  `json:"created,omitempty"`
Name  string  `json:"name,omitempty"`
Id  string  `json:"id,omitempty"`
Accounts  []Account  `json:"accounts,omitempty"`
}
