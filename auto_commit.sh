    #!/bin/bash

    REPO_PATH="./" # Replace with the actual path to your Git repository

    while true; do
        cd "$REPO_PATH" || { echo "Error: Repository path not found. Exiting."; exit 1; }

        # Stage all changes
        git add -A

        # Create a commit message with a timestamp
        COMMIT_MESSAGE="Automated commit: $(date '+%Y-%m-%d %H:%M:%S')"

        # Perform the commit
        git commit -m "$COMMIT_MESSAGE"

        echo "Committed changes at $(date '+%Y-%m-%d %H:%M:%S')"

        # Wait for 60 seconds (1 minute) before the next iteration
        sleep 60
    done