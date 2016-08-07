package hello

import (
	"fmt"
	"net/http"
)

func init() {
	http.HandleFunc("/", handler)
	http.HandleFunc("/test", te)
}

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "5回目")
}
func te(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "kame")
}
