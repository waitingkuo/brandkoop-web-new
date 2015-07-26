Meteor.startup(function() {

  profilerUrl = process.env.PROFILER_URL
  if (!profilerUrl) {
    console.log('[ERROR] No Profiler URL');
  } else {
    console.log('[DEBUG] Connected to profiler ' + profilerUrl);
  }

  Meteor.methods({

    // instant profiler
    insertInstantProfile(domain) {

      // remove http:// or https://
      if (domain.match(SimpleSchema.RegEx.Url)) {
        domain = url.parse(domain).host;
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
    profile(websiteId) {
      let website = Websites.findOne({_id: websiteId});
      HTTP.post(profilerUrl+'/v3/profiler/profilewebsite', {
        params: {
          websiteId: websiteId,
          domain: website.domain
        }
      });
    }



    
  });



});
