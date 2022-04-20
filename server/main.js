import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import dayjs from 'dayjs';
import { Roles } from 'meteor/alanning:roles';
import SimpleSchema from 'simpl-schema';

import { UserProfiles } from '../imports/api/UserProfiles';


Meteor.startup(() => {

  //**** ----- SETTING UP USER PRESENCE HOOK
    // Listen for new connections, login, logoff and application exit to manage user status and register methods to be used by client to set user status and default status
    UserPresence.start();
    // Active logs for every changes
    // Listen for changes in UserSessions and Meteor.users to set presence status based on active connections to user collection...
    UserPresenceMonitor.start();

  //**** ----- CONFIGURE GOOGLE ACCOUNT SERVICE CONFIGURATION
  Accounts.loginServiceConfiguration.remove({
    service: "google"
  });
  Accounts.loginServiceConfiguration.upsert(
    { service: 'google' },
    {
      $set: {
        clientId: /****REDACTED CODE****/,
        loginStyle: 'popup',
        secret: /****REDACTED CODE****/
      }
    }
  );

  //**** ----- RESTRICT ACCOUNTS CREATION TO SELECTED EMAILS
    //Accounts.config({restrictCreationByEmailDomain: /****REDACTED CODE****/});
    var checkEmailAgainstAllowed = function(email) {
      //var allowedDomains = ['mycompanydomain.com'];
      /****REDACTED CODE****/
      //var domain = email.replace(/.*@/,'').toLowerCase();
      email = email.toLowerCase();
      return allowedEmails.includes(email);
  };
  
  Accounts.config({
      restrictCreationByEmailDomain: function(email) {
      if (!email) {
          throw new Meteor.Error(403,'This email address is not allowed');
      }
      if (!checkEmailAgainstAllowed(email)) {
          throw new Meteor.Error(403,'Opps! Thank you for your interest, but your email address is not listed in our beta testers database.');
      }
      return true;
      }
  });

  //THE full version of the code above. CREDIT: https://www.titanwolf.org/Network/q/4e824bf1-3b90-40db-b02a-9ba0b5b62ded/y
  //NOTE: This code uses UnderscoresJS
  // var checkEmailAgainstAllowed = function(email) {
  //  var allowedDomains = ['mycompanydomain.com'];
  //  var allowedEmails = ['otheruser@fromotherdomain.com','anotheruser@fromanotherdomain.com'];
  //  var domain = email.replace(/.*@/,'').toLowerCase();
  //  email = email.toLowerCase();
  //  return _.contains(allowedEmails, email) || _.contains(allowedDomains, domain);
  //};
  
  //Accounts.config({
  //  restrictCreationByEmailDomain: function(email) {
  //    if (!email) {
  //      throw new Meteor.Error(403,'This email address is not allowed');
  //    }
  //    if (!checkEmailAgainstAllowed(email)) {
  //      throw new Meteor.Error(403,'This email domain is not allowed');
  //    }
  //    return true;
  //  }
  //}); */


  //**** ----- ADDING SUPERUSER ++ DUPLICATES USER DETAILS INTO USERPROFILES COLLECTION
  Meteor.users.after.insert(function (userId, doc) {

    if (typeof(doc.services.google) != "undefined") {

        //custom assign a specific role for Dr Mohd Hafiz Md Hanif, the creator of hack(edu).tech
        if(doc.services.google.email === '/****REDACTED CODE****/'){
            Roles.createRole('superuser', {unlessExists: true});
            Roles.addUsersToRoles(doc._id, ['superuser']);
            doc.roles = ['superuser'];
            doc.activated = 1;
            doc.status = 'offline';
        } else {
            Roles.createRole('subscriber', {unlessExists: true});
            Roles.addUsersToRoles(doc._id, ['subscriber']);
            doc.roles = ['subscriber']; //options are subscriber, moderator, superuser
            doc.status = 'offline';
            doc.activated = 1;
        }

        UserProfiles.insert({
            owner: doc._id,
            firstTimeLogin: true,
            plan:'free', //or 'paid'
            accountType: '',//business, teacher, home, student
            profileCompletedness: 0,
            skipOnboarding: false,
            verifiedEducator: false,
            userCreatedAt: dayjs().format('DD-MM-YYYY, hh:mm:sa'),
            roles: doc.roles,
            name: doc.services.google.name,
            givenName : doc.services.google.given_name,
            familyName: doc.services.google.family_name,
            avatar: doc.services.google.picture,
            coverImage: '',
            googleId: doc.services.google.id,
            email: doc.services.google.email,
            country: '',
            school:'',
            description:'',
            overallScore: 0,
            idArtikelSendiri:[],
            idArtikelSimpanan: [],
            activated: doc.activated
        });

    }
});

//hacking the oncreateuser method to push infomation to new collection
//in server
Accounts.onCreateUser(function(options,user){
    user.profile = options.profile || {};
    user._id = Meteor.users._makeNewID();
    // Use provided profile in options, or create an empty object
    user.profile = options.profile;
    // Assigns first and last names to the newly created user object
    user.profile.name = options.profile.name;
    user.status = options.status;
    user.statusConnection = options.statusConnection;
    return user;
}); 

//**** ----- START METEOR PUB/SUB HERE

Meteor.publish('currentUserProfile', function(){
  let currentUser = this.userId;
  return UserProfiles.find({
      owner : currentUser
  })
});




  //END
});
