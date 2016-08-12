package main

import (
	"fmt"
	"html/template"
	"net/http"
)

func init() {
	http.HandleFunc("/", tmplHandler)
	http.HandleFunc("/api/", apiHandler)
}

func tmplHandler(w http.ResponseWriter, r *http.Request) {

	if r.URL.Path != "/" {
		errorHandler(w, r, http.StatusNotFound)
		return
	}

	tpl := template.Must(template.ParseFiles("template/index.html"))
	tpl.Execute(w, "")
}

func apiHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "aa")
}

func errorHandler(w http.ResponseWriter, r *http.Request, status int) {
	w.WriteHeader(status)
	if status == http.StatusNotFound {
		fmt.Fprint(w, "custom 404")
	}
}
