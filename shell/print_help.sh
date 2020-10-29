#!/bin/bash

function print_help {
  echo "Usage: ${0} [OPTIONS]"
  echo ""
  echo "OPTIONS:"
  echo "  --node-version <version>  the node version to use while testing [12]"
  echo "  --git-branch <branch>     the git branch to checkout for testing [the current one]"
  echo "  --test-suite <suite>      which test suite to use ('all', 'behavior', installs', 'kitchensink', 'kitchensink-eject', 'simple') ['all']"
  echo "  --interactive             gain a bash shell after the test run"
  echo "  --help                    print this message and exit"
  echo ""
}
