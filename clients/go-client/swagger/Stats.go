package swagger

import (
    "time"
)

type Stats struct {
    State  string  `json:"state,omitempty"`
Startup  time.Time  `json:"startup,omitempty"`
Uptime  int32  `json:"uptime,omitempty"`
}
