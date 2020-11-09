#!/bin/bash

## Open google chrome
function openChrome(){

    urls=(
        "https://www.freecodecamp.org/"
    )

    for url in "${urls[@]}"; do
        google-chrome -new-tab $url &
        sleep 5
    done
}

## Open google chrome anônimo
function openChromeAnonymous(){

    urls=(
        "https://outlook.live.com/owa/"
        "https://web.whatsapp.com/"
        "https://www.urionlinejudge.com.br/judge/pt/login"
        "https://www.freecodecamp.org/"
    )

    for url in "${urls[@]}"; do
        google-chrome --incognito -new-tab $url &
        sleep 5
    done
}

# Chamada das tarefas
openChrome
openChromeAnonymous