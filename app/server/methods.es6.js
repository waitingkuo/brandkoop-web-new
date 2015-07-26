Meteor.startup(function() {

  profileUrl = process.env.PROFILER_URL
  if (!profileUrl) {
    console.log('[ERROR] No Profiler URL');
  } else {
    console.log('[DEBUG] Connected to profiler ' + profileUrl);
  }

  Meteor.methods({

    // instant profiler
    instantProfile(domain) {

      let profileId;

      let profile = InstantProfiles.findOne({domain: domain});
      if (profile) {
        profileId = profile._id;
      } else {
        profileId = InstantProfiles.insert({domain: domain})
      }

      return profileId;
    },


    //
    profile(websiteId) {
      let website = Websites.findOne({_id: websiteId});
      HTTP.post(profileUrl+'/v3/profiler/profilewebsite', {
        params: {
          websiteId: websiteId,
          domain: website.domain
        }
      });
    }



    
  });



});
