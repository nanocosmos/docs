## Mp4 Recording on the fly

It is possible to start and stop the local file recording while a broadcast is running. To use this feature, the SetConfig option "Mp4RecordOnTheFly" has to be enabled, before the broadcast is started. With a second SetConfig option ("Mp4RecordOnTheFlyControl") a recording can be started and stopped while the broadcast is running.

The mp4 file name will be the same for every recording started and stopped during a broadcast. If a previous recording exists, it will be renamed.
For example if the file name is "test.mp4" and three recording were made during the broadcast, following files will exist:
  - test.mp4
  - test_1.mp4
  - test_2.mp4

See [[live_video_encoder_-_plugin_integration_api#mp4_recording|here]] for further information about the SetConfig options.
