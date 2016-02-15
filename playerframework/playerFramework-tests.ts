///<reference path="playerFramework.d.ts" />

var el = document.createElement("div");
var player = new PlayerFramework.MediaPlayer(el);

// Getters
var currentSrc = player.currentSrc;
var interactiveModel = player.defaultInteractiveViewModel;
var duration = player.duration;
var element = player.element;
var ended = player.ended;
var error = player.error;
var initialTime = player.initialTime;
var audioAllowed = player.isAudioAllowed;
var captionsAllowed = player.isCaptionsAllowed;
var currentTime = player.isCurrentTimeLive;
var timeAllowed = player.isElapsedTimeAllowed;
var forwardAllowed = player.isFastForwardAllowed;
var fullscreenAllowed = player.isFullScreenAllowed;
var goLiveAllowed = player.isGoLiveAllowed;
var live = player.isLive;
var mediaQualityAllowed = player.isMediaQualityAllowed;
var muteAllowed = player.isMuteAllowed;
var pauseAllowed = player.isPauseAllowed;
var playPauseAllowed = player.isPlayPauseAllowed;
var playResumeAllowed = player.isPlayResumeAllowed;
var remainingTimeAllowed = player.isRemainingTimeAllowed;
var replayAllowed = player.isReplayAllowed;
var rewindAllowed = player.isRewindAllowed;
var strengthAllowed = player.isSignalStrengthAllowed;
var aheadAllowed = player.isSkipAheadAllowed;
var backAllowed = player.isSkipBackAllowed;
var nextAllowed = player.isSkipNextAllowed;
var prevAllowed = player.isSkipPreviousAllowed;
var motionAllowed = player.isSlowMotionAllowed;
var timelineAllowed = player.isTimelineAllowed;
var volumeAllowed = player.isVolumeAllowed;
var muteAllowed = player.isVolumeMuteAllowed;
var optimalPlayback = player.msIsLayoutOptimalForPlayback;
var stereo = player.msIsStereo3D;
var playToSource = player.msPlayToSource;
var networkState = player.networkState;
var paused = player.paused;
var playlistPlugin = player.playlistPlugin;
var readyState = player.readyState;
var scrubbing = player.scrubbing;
var seeking = player.seeking;
var videoHeight = player.videoHeight;
var videoWidth = player.videoWidth;

// Getters/Setters
player.advertisingState = PlayerFramework.AdvertisingState.linear;
player.autobuffer = false;
player.autohide = false;
player.autohideBehavior = PlayerFramework.AutohideBehavior.all;
player.autohideTime = 0;
player.autoload = false;
player.autoplay = false;
player.controls = false;
player.currentTime = 0;
player.defaultPlaybackRate = 0;
player.endTime = 0;
player.height = '100px';
player.interactiveActivationMode = PlayerFramework.InteractionType.all;
player.interactiveDeactivationMode = PlayerFramework.InteractionType.all;
player.interactiveViewModel = new PlayerFramework.InteractiveViewModel();
player.isAudioEnabled = false;
player.isAudioVisible = false;
player.isCaptionsVisible = false;
player.isElapsedTimeEnabled = false;
player.isElapsedTimeVisible = false;
player.isFastForwardEnabled = false;
player.isFastForwardVisible = false;
player.isFullScreen = false;
player.isFullScreenEnabled = false;
player.isFullScreenVisible = false;
player.isGoLiveEnabled = false;
player.isGoLiveVisible = false;
player.isInteractive = false;
player.isMediaQualityEnabled = false;
player.isMediaQualityVisible = false;
player.isMuteEnabled = false;
player.isMuteVisible = false;
player.isPauseEnabled = false;
player.isPauseVisible = false;
player.isPlayPauseEnabled = false;
player.isPlayPauseVisible = false;
player.isPlayResumeEnabled = false;
player.isPlayResumeVisible = false;
player.isRemainingTimeEnabled = false;
player.isRemainingTimeVisible = false;
player.isReplayEnabled = false;
player.isReplayVisible = false;
player.isRewindEnabled = false;
player.isRewindVisible = false;
player.isSignalStrengthEnabled = false;
player.isSignalStrengthVisible = false;
player.isSkipAheadEnabled = false;
player.isSkipAheadVisible = false;
player.isSkipBackEnabled = false;
player.isSkipBackVisible = false;
player.isSkipNextEnabled = false;
player.isSkipNextVisible = false;
player.isSkipPreviousEnabled = false;
player.isSkipPreviousVisible = false;
player.isSlowMotion = false;
player.isSlowMotionEnabled = false;
player.isSlowMotionVisible = false;
player.isStartTimeOffset = false;
player.isTimelineEnabled = false;
player.isTimelineVisible = false;
player.isVolumeEnabled = false;
player.isVolumeMuteEnabled = false;
player.isVolumeMuteVisible = false;
player.isVolumeVisible = false;
player.liveTime = 0;
player.liveTimeBuffer = 0;
player.loop = false;
player.mediaElement = <HTMLMediaElement>document.createElement('video');
player.mediaExtensionManager = new Windows.Media.MediaExtensionManager();
player.mediaQuality = PlayerFramework.MediaQuality.highDefinition;
player.msAudioCategory = 'audioCategory';
player.msAudioDeviceType = 'deviceType';
player.msHorizontalMirror = false;
player.msPlayToDisabled = false;
player.msPlayToPrimary = false;
player.msRealTime = false;
player.msStereo3DPackingMode = 'stereoMode';
player.msStereo3DRenderMode = 'stereoMode';
player.msZoom = false;
player.muted = false;

player.playbackRate = 0;
player.playerState = PlayerFramework.PlayerState.starting;
player.poster = 'poster';
player.preload = 'preload';
player.replayOffset = 0;
player.seekWhileScrubbing = false;
player.signalStrength = 0;

player.skipAheadInterval = 0;
player.skipBackInterval = 0;
player.slowMotionPlaybackRate = 0;
player.src = 'srcUrl';
player.startTime = 0;
player.startupTime = 0;
player.testForMediaPack = false;
player.volume = 50;
player.width = '100px';


// Methods
player.addClass('className');
player.addEventListener('eventName', () => { });
player.addEventListener('eventName', () => { }, false);
player.addTextTrack('kind');
player.addTextTrack('kind', 'label');
player.addTextTrack('kind', 'label', 'language');
var canPlay = player.canPlayType('type');
player.decreasePlaybackRate();
player.dispose();
player.focus();
player.increasePlaybackRate();
player.load();
player.pause();
player.play();
player.playResume();
player.removeClass('className');
player.removeEventListener('eventName', () => { });
player.replay();
player.retry();
player.stop();
player.update({});

