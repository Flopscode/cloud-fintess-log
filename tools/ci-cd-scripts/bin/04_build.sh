# Do a full "ship" build, showing detailed logs in real time
# (We assume "--ship" was defined in common/config/rush/command-line.json)
node common/scripts/install-run-rush.js rebuild --ship --verbose