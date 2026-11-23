@echo off
setlocal
cd /d "%~dp0"
set "SITE_NODE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if exist "%SITE_NODE%" goto ready
for /f "delims=" %%N in ('where node 2^>nul') do if not defined SITE_SYSTEM_NODE set "SITE_SYSTEM_NODE=%%N"
if defined SITE_SYSTEM_NODE set "SITE_NODE=%SITE_SYSTEM_NODE%"
if exist "%SITE_NODE%" goto ready
echo Node.js was not found. Open Codex or install Node.js, then retry.
pause
exit /b 1
:ready
if not exist "node_modules\astro\astro.js" (
  echo Project dependencies are missing. Please restore them before previewing.
  pause
  exit /b 1
)
for %%N in ("%SITE_NODE%") do set "PATH=%%~dpN;%PATH%"
echo Starting local preview. Open the Local URL printed below.
echo Keep this window open. Press Ctrl+C to stop.
"%SITE_NODE%" "node_modules\astro\astro.js" dev --host 127.0.0.1
if errorlevel 1 pause
