Meteor.startup(function() {

  profilerUrl = process.env.PROFILER_URL
  if (!profilerUrl) {
    console.log('[ERROR] No Profiler URL');
  } else {
    console.log('[DEBUG] Connected to profiler ' + profilerUrl);
  }

  Meteor.methods({

    // instant profiler
    insertInstantProfile(domain, limited, ip, uuid) {

      // remove http:// or https://
      if (domain.match(SimpleSchema.RegEx.Url)) {
        domain = url.parse(domain).host;
      }

      let time = moment().subtract(5, 'minutes').toDate();
      if (limited) {
        if (InstantProfilerRecords.findOne({
          ip:ip, 
          createdAt: {$gt: time},
        })) {
          return 'limited'
        }

        if (InstantProfilerRecords.findOne({
          uuid:uuid,
          createdAt: {$lt: time},
        })) {
          return 'limited'
        }

        InstantProfilerRecords.insert({
          ip: ip,
          uuid: uuid,
          createdAt: new Date(),
        });
      }

      let profile = InstantProfiles.findOne({domain: domain});
      if (profile) {
        profileId = profile._id;
      } else {
        profileId = InstantProfiles.insert({domain: domain})
        Meteor.call('instantProfile', profileId, function(){}); 
      }

      return profileId;
    },

    instantProfile(profileId) {
      let profile = InstantProfiles.findOne({_id: profileId});
      HTTP.post(profilerUrl+'/v3/instantprofiler/profilewebsite', {
        params: {
          profileId: profileId,
          domain: profile.domain
        }
      });
    },

    //
    analyze(websiteId) {
      let website = Websites.findOne({_id: websiteId});
      HTTP.post(profilerUrl+'/v3/analyzer/analyzewebsite', {
        params: {
          websiteId: websiteId,
          domain: website.domain
        }
      });
    },

    profile(websiteId) {
      let website = Websites.findOne({_id: websiteId});
      HTTP.post(profilerUrl+'/v3/profiler/profilewebsite', {
        params: {
          websiteId: websiteId,
          domain: website.domain
        }
      });
    },

    profileTwitter(twitterId) {
      let twitter = Twitters.findOne({_id: twitterId});
      //console.log(twitter);
      HTTP.post(profilerUrl+'/v3/profiler/profiletwitter', {
        params: {
          twitterId: twitterId,
          screenName: twitter.twitterScreenName,
          accessToken: twitter.accessToken,
          accessTokenSecret: twitter.accessTokenSecret,
        }
      });
    }
    

    
  });



});
