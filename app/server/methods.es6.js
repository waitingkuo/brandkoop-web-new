Meteor.startup(function() {

  profileUrl = process.env.PROFILER_URL
  if (!profileUrl) {
    console.log('[ERROR] No Profiler URL');
  } else {
    console.log('[DEBUG] Connected to profiler ' + profileUrl);
  }

  Meteor.methods({

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
