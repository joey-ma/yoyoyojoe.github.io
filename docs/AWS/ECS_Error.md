# Elastic Container Service

The following error is from AWS ECS logs. What does this error mean? 
`[FATAL tini (6)] exec /usr/src/app/entrypoint.sh failed: Exec format error`

This error message is indicating that there was a problem executing the file "/usr/src/app/entrypoint.sh". The "exec format error" is specifically referring to a problem with the format or structure of the file, and that it cannot be executed as a result. The "FATAL tini (6)" component of the error message is related to the process manager (tini) that was being used, and that it encountered a fatal error (exit code 6) when trying to execute the script.

What does exit code 6 mean?

Exit code 6 typically means a specific error has occurred, but the meaning of the code can vary depending on the system and context in which it is used. In the context of the AWS ECS logs error message you mentioned, the exact meaning of exit code 6 is not specified. However, it is generally considered a non-zero exit status that indicates some sort of failure or error. In such cases, it is usually best to refer to the documentation or source code of the specific tool or process that generated the exit code in order to determine its exact meaning.




